# GDT - Project Saver

## 프로젝트 정보

- **AWS 주소:** [http://18.212.90.82](http://18.212.90.82)
- **기획 노션 페이지:** [Notion 링크](https://lovehyun.notion.site/1-1516ebae57e180faa9cec3f138f17efc)

---

## 초기 프로젝트 세팅 방법

### 1. 프로젝트 클론 및 패키지 설치

```sh
# 저장소 클론
git clone https://github.com/LimJ2023/GDT.git
cd GDT

# 서버 패키지 설치
cd server
npm install cors dotenv express mysql2 bcrypt jsonwebtoken nodemailer tesseract.js ws cookie-parser
cd ..

# 클라이언트 패키지 설치
cd client
npm install --save-dev vite
npm install @react-oauth/google
npm install
```

### 2. 프로젝트 실행 방법

```sh
# 클라이언트 실행
cd client
npm run dev

# 새 터미널에서 서버 실행
cd server
node app.js
```

---

## API 명세서

| URL         | 메소드 | 설명                 | 응답 |
|------------|-------|----------------------|------|
| `/api/users` | GET   | 모든 유저 정보 가져오기 | `{ success: true, data: [{id: 1, email: "hi@gmail.com"}, {id: 2, email: "bye@gmail.com"}] }` |

### 에러 코드

- **404**: 데이터 없음

---

## 회의록

### 12월 17일 (화)

#### Git 관련 규칙

- 내 작업은 내 이름 브랜치에 커밋한다.
- 통합 브랜치에 병합 후 기존 브랜치는 삭제한다.
- 병합 후 새로운 작업은 다시 브랜칭해서 진행한다.

#### Git 커밋 컨벤션

```
[ ] description #이슈번호
```

- `fix` : 코드 수정
- `add` : 기능 추가

#### 기술 조사 (이번 주 Task)

- 이미지 가져오는 방식 조사 (갤러리 / 사이트 링크 등)
- JavaScript 기반 OCR 테스트 진행
- 바코드 인식 관련 API 조사

#### 기타

- **자주 커밋하기!** 기록이 많을수록 좋음.

