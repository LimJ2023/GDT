
const mysql = require("mysql2"); // MySQL 모듈 로드
require("dotenv").config(); // .env 파일 로드

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",    // DB 호스트 설정
  user: process.env.DB_USER || "root",        // DB 사용자 이름
  password: process.env.DB_PASSWORD || "",    // DB 비밀번호
  database: process.env.DB_NAME || "test_db", // 사용할 DB 이름
});

// 연결 확인
db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패:", err);
    return;
  }
  console.log("MySQL 연결 성공");
});

module.exports = db; // 다른 파일에서 db를 사용할 수 있도록 내보냄



// localhost

// const mysql = require("mysql2");
// require("dotenv").config();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '0000',  // 비밀번호 확인
//   database: 'board_app'       // 'boadr_app' 대신 'board_app'으로 수정
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL 연결 실패:", err);
//     return;
//   }
//   console.log("MySQL 연결 성공");
// });

// module.exports = db;



// 기존에 쓰던 내용 즉 요한님 aws ec2 에 접속하기 위한 코드 
// const mysql = require("mysql2");
// require("dotenv").config();

// const db = mysql.createConnection({
//   host: "34.228.198.11", // EC2 퍼블릭 IP
//   user: "root",          // MySQL 사용자
//   password: "sesac1234!", // MySQL 비밀번호
//   database: "test_mkw_db", // 사용할 데이터베이스
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL 연결 실패:", err);
//     return;
//   }
//   console.log("MySQL 연결 성공");
// });

// module.exports = db;
