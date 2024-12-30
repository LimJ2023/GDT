// be/app.js
const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = process.env.PORT || 5000;


// 회원가입시 비밀번호 보안을 위해 설치함함
const bcrypt = require("bcrypt");
// jwt 사용하여서 세선 유지하기 위해 설치
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// 이메일 인증for
const crypto = require("crypto");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config(); // .env 파일 로드

// 테스트용 주석 
// 삭제x 필수o
app.get("/db-test", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) {
      return res.status(500).send("DB 연결 실패: " + err);
    }
    res.send(`DB 연결 성공, 테스트 결과: ${results[0].solution}`);
  });
});



//jwt 토근 부분 
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "인증 토큰이 필요합니다." });
  }

  try {
    const decoded = jwt.verify(token, "너의 보안 jwt");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send({ message: "유효하지 않은 토큰입니다." });
  }
};

// 글 작성 API에 미들웨어 적용
app.post("/api/posts", authenticateJWT, (req, res) => {
  const { title, content } = req.body;
  const user_id = req.user.id; // 토큰에서 추출한 사용자 ID

  if (!title || !content || !user_id) {
    return res.status(400).send({ message: "모든 필드를 입력해주세요." });
  }

  const query = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";
  db.query(query, [title, content, user_id], (err, result) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).send({ message: "글 작성 중 오류 발생", error: err });
    }
    res.status(201).send({ id: result.insertId, title, content });
  });
});


// Nodemailer 설정
const transporter = nodemailer.createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // .env에 설정된 사용자 이메일
    pass: process.env.EMAIL_PASS, // .env에 설정된 앱 비밀번호
  },
  debug: true, // 디버깅 로그 활성화
});


// 로그인 API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res
        .status(401)
        .send({ message: "잘못된 이메일 또는 비밀번호입니다." });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .send({ message: "잘못된 이메일 또는 비밀번호입니다." });
    }

    
    // JWT 토큰 생성 (1시간 유효) // 테스트로 일단 30ms 초 넣음음
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "너의 보안 jwt",
      { expiresIn: "1hr" }
    );
    res.send({ message: "로그인 성공!", token });
  });
});


// 글 작성 API (사용자 인증 추가) (POST 요청 핸들러)
app.post("/api/posts", authenticateJWT, (req, res) => {
  const { title, content } = req.body;
  const user_id = req.user.id; // 토큰에서 추출한 user_id 사용
  if (!title || !content) {
    return res.status(400).send({ message: "모든 필드를 입력해주세요." });
  }

  const query = "INSERT INTO posts (title, content, user_id, author) VALUES (?, ?, ?, ?)";
  db.query(query, [title, content, user_id, req.user.email], (err, result) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).send({ message: "글 작성 중 오류 발생", error: err });
    }
    res.status(201).send({ id: result.insertId, title, content, user_id });
  });
});




// 글 목록 조회 API (GET 요청 핸들러)
app.get("/api/posts", (req, res) => {
  const query = `
    SELECT posts.id, posts.title, posts.content, posts.user_id, posts.author, 
           DATE_FORMAT(posts.posted_at, "%Y-%m-%d %H:%i:%s") as posted_at,
           posts.view_count
    FROM posts
    ORDER BY posts.posted_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).send(err);
    }
    res.send(results);
  });
});


// 글 상세 조회 API
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM posts WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send({ message: "게시글을 찾을 수 없습니다." });
    }
    res.send(results[0]);
  });
});

// 글 삭제 API
app.delete("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM posts WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "글이 삭제되었습니다." });
  });
});

//글 수정 api
app.put("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const query = "UPDATE posts SET title = ?, content = ? WHERE id = ?";

  db.query(query, [title, content, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: "글이 수정되었습니다." });
  });
});

// 댓글 작성 API
app.post("/api/comments", (req, res) => {
  const { post_id, user_id, content } = req.body; // user_id와 content 사용
  if (!post_id || !user_id || !content) {
    return res.status(400).send({ message: "모든 필드를 입력해주세요." });
  }

  const query = "INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)";
  db.query(query, [post_id, user_id, content], (err, result) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).send({ message: "댓글 작성 중 오류 발생", error: err });
    }
    res.status(201).send({ id: result.insertId, post_id, user_id, content });
  });
});


// 댓글 조회 API
app.get("/api/comments/:postId", (req, res) => {
  const { postId } = req.params;
  const query = `
    SELECT comments.id, comments.content, comments.post_id, comments.user_id,
           DATE_FORMAT(comments.posted_at, "%Y-%m-%d %H:%i:%s") as posted_at
    FROM comments
    WHERE comments.post_id = ?
    ORDER BY comments.posted_at ASC
  `;

  db.query(query, [postId], (err, results) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).send(err);
    }
    res.send(results);
  });
});



//회원 가입
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  // 입력값 검증
  if (!email || !password) {
    return res.status(400).send({ message: "이메일과 비밀번호를 모두 입력해주세요." });
  }

  // 이메일 중복 체크
  const checkQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkQuery, [email], async (err, results) => {
    if (err) {
      console.error("DB 에러:", err);
      return res.status(500).send({ message: "서버 에러 발생", error: err });
    }

    if (results.length > 0) {
      return res.status(400).send({ message: "이미 존재하는 이메일입니다." });
    }

    try {
      // 비밀번호 해싱
      const hashedPassword = await bcrypt.hash(password, 10);

      // 회원정보 삽입
      const insertQuery =
        "INSERT INTO users (email, password, profile_image, join_date, is_verified) VALUES (?, ?, NULL, NOW(), 0)";
      db.query(insertQuery, [email, hashedPassword], (err, result) => {
        if (err) {
          console.error("DB 삽입 오류:", err);
          return res.status(500).send({ message: "회원가입 중 오류 발생", error: err });
        }
        res.status(201).send({ message: "회원가입이 완료되었습니다. 이메일 인증을 진행해주세요." });
      });
    } catch (hashError) {
      console.error("비밀번호 해싱 오류:", hashError);
      res.status(500).send({ message: "서버 에러 발생", error: hashError });
    }
  });
});



// 이메일 인증 API
app.get("/api/verify-email", (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    const email = decoded.email;

    // 이메일 인증 상태 업데이트
    const updateQuery = "UPDATE users SET is_verified = true WHERE email = ?";
    db.query(updateQuery, [email], (err) => {
      if (err) {
        return res.status(500).send({ message: "이메일 인증 중 오류 발생" });
      }
      res.send({
        message: "이메일 인증이 완료되었습니다. 이제 로그인할 수 있습니다.",
      });
    });
  } catch (error) {
    res.status(400).send({ message: "유효하지 않은 토큰입니다." });
  }
});

// 이메일 인증 코드 전송 API
app.post("/api/send-verification-code", (req, res) => {
  const { email } = req.body;
  if (!email) {
    console.log("이메일 값이 전달되지 않았습니다.");
    return res.status(400).send({ message: "이메일이 누락되었습니다." });
  }
  console.log("인증 요청 이메일:", email);

  const verificationCode = crypto.randomInt(100000, 999999).toString();

  if (!global.verificationCodes) {
    global.verificationCodes = {};
  }
  global.verificationCodes[email] = verificationCode;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "이메일 인증 코드",
    text: `인증 코드: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("SMTP 전송 실패:", error);
      return res.status(500).send({ message: "이메일 전송 중 오류 발생", error });
    }
    res.send({ message: "인증 코드가 전송되었습니다." });
  });
});


// 인증 코드 확인 API
app.post("/api/verify-code", (req, res) => {
  const { email, code } = req.body;

  if (global.verificationCodes && global.verificationCodes[email] === code) {
    delete global.verificationCodes[email];
    res.send({ message: "인증이 완료되었습니다." });
  } else {
    res.status(400).send({ message: "인증 코드가 올바르지 않습니다." });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
