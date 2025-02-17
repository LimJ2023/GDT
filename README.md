# 1팀. 감다팀 - 프로젝트 “세이버”

“감”동을 남기고 “다”음으로 나아가는 “팀” 

                                                                 “쿠폰을 구하다.”

- 팀원
    
    🐻임요한  - 조장  FE
    
    🐿️ 최혜미 - 조원  FE
    
    🐷 민경원 - 조원  BE
    
    - 게시판 (예)
    
    🦦 이도윤 - 조원  BE
    
    - 쿠폰 (예)
- Github
    
    [https://github.com/LimJ2023/GDT](https://github.com/LimJ2023/GDT)
    

# 1. 소개

- 문제점
    
    <aside>
    
    1. 넘쳐나는 각종 쿠폰들, 사용하려고 보면 어디있는지 모르겠다.
    
    2. 못쓰고 버려진다.
    
    3. 뭐를 썼고 안쓴게 뭐인지도 모르겠다.
    
    </aside>
    
    <aside>
    
    ![스크린샷 2024-12-16 오후 6.08.26.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-16_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_6.08.26.png)
    
    </aside>
    
- 해결방안
    
    <aside>
    
    내가 가진 쿠폰을 등록, 관리 ⇒ 한눈에 파악할 수 있는 서비스 제공
    
    </aside>
    
- 주요기능
    
    <aside>
    
    1. 쿠폰 등록 관리 `mvp` 
        - 쿠폰 등록 (이미지 ocr + 직접 입력)
        - 원하는 카테고리 생성
        - 쿠폰 원하는 카테고리로 집어넣고 옮기기
        - 등록된 쿠폰 리스트, 상세보기 기능(이미지, 상세정보)
        - 정렬 기능(만료일, 카테고리 등..)
        - 체크 기능(완료 시)
    2. 자유 게시판 (목적과 정체성 보완하기)
    3. 알림기능 (유효기간 전 푸시알람)
    4. 사용/잔여금액 확인(차감방식 교환권에 대해)
    5. 쿠폰 공유
    6. 쿠폰 사용처 검색 기능 
    7. 위치기반 쿠폰 사용처 찾기
    </aside>
    

$$
\color{white}\rule{360px}{1px}
$$

# 2. 계획

- **프로젝트 목표**
    
    본 프로젝트의 목표는 사용자 친화적인 Web Application을 구축하여 회원 관리, 게시판 기능, 쿠폰 관리 및 공유와 같은 핵심 기능을 제공하는 것입니다 이를 통해 사용자들이 쉽게 정보를 교환하고, 쿠폰을 효율적으로 관리하며 편리한 서비스 경험을 누리게 만드는 것이 목표입니다.
    
- **요구사항 명세서**
    - **상위 요구사항**
        - 
            
            
            | 식별자 | 요구사항명 | 설명 |
            | --- | --- | --- |
            | USER | 회원 가입, 로그인 | 회원 가입 및 로그인 기능 |
            | BOARD | 게시판 | 게시판 및 게시판 기능 |
            | COUPON | 쿠폰 등록 및 관리 | 쿠폰 및 관리 기능 |
            | ALERT | 알림 | 쿠폰 만료일, 게시판 댓글,중요한 업데이트 시 알림 기능 제공 |
        - 게시판에 댓글, 대댓글 등등 요구사항 명확히, 게시글 조회수 등등 여부
            
            [요구사항](%E1%84%8B%E1%85%AD%E1%84%80%E1%85%AE%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%2019d649dc2c0c81f49e48ec39c5fc7665.csv)
            
- 화면설계서 (검색 기능?, 웹뷰나 반응형 등등 디자인적인 요소 고려, 고도화 기능으로, 영상처리 기반에 자동인식 OCR등등.. 고려… 사용처들 DB, 지도, 등등…)
    
    ![화면설계 (1).png](%25E1%2584%2592%25E1%2585%25AA%25E1%2584%2586%25E1%2585%25A7%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%2580%25E1%2585%25A8_(1).png)
    
- WBS/Gantt
    
    테스트 케이스 문서화.. (수동, 자동) 개발/테스트 방법론중에 TDD, 테스트 케이스 작성은 어떻게 하느냐?? Postman 등으로 자동화 가능… (CRUD 자동화를 다양하게 할수 있음..)
    
    이번주에는 다양한 기술조사 하기 (예, 쿠폰 영상 OCR 등등, 안배운것, 안해본것중 가중 “중요한것” 부터 PoC (Proof-of-Concept)) - 목록 나열…
    
    우선순위 낮게 해서, 추가 기능 고려해볼것
    
    ![wbs1.png](wbs1.png)
    
    [일정표](%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%91%E1%85%AD%2019d649dc2c0c81bd9656e50b964da4c3.csv)
    
- 기술조사 (정리중)
    
    ## 참조 링크
    
    <aside>
    
    [pwa@mdn](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
    
    [camera api@capacitor](https://capacitorjs.com/docs/apis/camera)
    
    </aside>
    
    ## 개요
    
    <aside>
    
    ### 기술조사 목적
    
    사용자가 모바일 사진첩에 저장한 각종 쿠폰을 우리 서비스에 등록하는 방법으로
    
    모바일 사진첩 접근 기능 구현을 위한 조사
    
    ### 기술조사를 통해 얻고자 하는 정보
    
    1. 웹엔진에서 네이티브 앱의 기능(카메라, 사진첩, 알람 등)에 접근할 수 있는 방법
    2. 기존 우리 스펙에서의 디렉토리 및 코드 구조 유지 하면서 추가하여 구현할 수 있는 방식
    3. pc 브라우저와 모바일 브라우저에서 사용 가능한 url 기반의 배포가 가능한 방식
    4. 필요에 따라 앱배포를 추가적으로 할 수 있는가
    
    ### 조사결과  요약
    
    …
    
    </aside>
    
    ## 1. Web-App 개발형태
    
    ### PWA(Progressive Web App)
    
    ![image.png](image.png)
    
    * 출처: gpt
    
    ![image.png](image%201.png)
    
    * 출처: mdn
    
    ### Hybrid App
    
    ![image.png](image%202.png)
    
    ### FWA vs Hybrid
    
    ![image.png](image%203.png)
    
    ![image.png](image%204.png)
    
    ### 웹뷰(WebView)
    
    > **네이티브 앱에 내재되어 있는 웹 브라우저**
    > 
    
    > 네이티브앱이 원래 ios랑 안드로이드별로 개발언어가 다르기 때문에 각각 개발해야하는거인데,
    네이티브앱 안에 브라우저를 랜더링할 수있는걸 만들었고 그걸 웹뷰라고 하는거고,
    **웹뷰에서 브라우저가 랜더링되어서.. 웹개발한거를 웹뷰에서 랜더링 해주게 되는거** 
    그래서,, 안드로이드, ios 따로따로 개발할필요가 없어지게되는거고 (⇒ 크로스플랫폼)
    흠.. 그러면, 브라우저 돔 랜더링-웹뷰 랜더링 2번 랜더링하게되는? (⇒ ㅇㅇ)
    > 
    
    ![스크린샷 2024-12-23 오전 9.05.02.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-23_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB_9.05.02.png)
    
    ![스크린샷 2024-12-22 오후 9.32.09.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-22_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.32.09.png)
    
    ![스크린샷 2024-12-22 오후 9.32.48.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-22_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.32.48.png)
    
    ![스크린샷 2024-12-22 오후 9.33.00.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-22_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.33.00.png)
    
    https://docs.tosspayments.com/resources/glossary/webview
    
    ## 크로스 플랫폼
    
    :
    
    ![스크린샷 2024-12-22 오후 9.37.09.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-22_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_9.37.09.png)
    
    https://docs.tosspayments.com/resources/glossary/cross-platform
    
    ## 2. Native App 접근 라이브러리
    
    ### Capacitor-camera
    
    : 모바일 카메라와 사진첩에 접근가능한 라이브러리
    
    https://capacitorjs.com/docs/apis/camera
    
    ![image.png](image%205.png)
    
    ![image.png](8abde3b1-029d-4b04-9e09-321f36bac8e4.png)
    
    ### 4. 기술조사 기반으로한 “쿠폰등록 useCase”
    
    ![image.png](image%206.png)
    
    ## 3. Hybrid 형태로 개발시 개발 코드 및 배포 영향
    
    ## 4. 기술조사 기반으로한 “쿠폰등록 useCase”
    
    ![image.png](image%206.png)
    
    ![스크린샷 2024-12-23 오후 3.16.49.png](%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-12-23_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.16.49.png)
    

$$
\color{white}\rule{360px}{1px}
$$

# 3. 구현

- 기술스택
    - 기획 - Pigma
    - 디자인 - TailWind
    - FE - React
    - BE - Node.js exporess
    - DB - MYSQL
- 톱레벨 아키텍쳐 다이어그램
- API 명세서
    
    
    | URI | 메서드 | 설명 | 응답 | 실패 코드 |
    | --- | --- | --- | --- | --- |
    | /api/password/change | PUT | 비밀번호 변경 처리 | {"message": "비밀번호가 성공적으로 변경되었습니다."} | 400
    {"message": "현재 비밀번호가 일치하지 않습니다."}
    404
    {"message": "사용자를 찾을 수 없습니다."}
    500
    {"message": "비밀번호 변경 중 오류가 발생했습니다."} |
    | /api/auth/login | POST | 로그인 처리 | 200
    {"token": "jwt_token", "user": { "id": 1, "email": "[user@example.com](mailto:user@example.com)" }} | 400
    {"message": "이메일 또는 비밀번호를 확인하세요."} |
    | /api/auth/signup | POST | 회원가입 처리 | 201 
    { "message": "회원가입이 완료되었습니다. 이메일을 확인해 주세요." } | 400 
    {"message": "이미 존재하는 이메일입니다."} |
    | /api/auth/verify-email | GET | 이메일 인증 처리 | 200
    {"message": "이메일 인증이 완료되었습니다. 이제 로그인할 수 있습니다."} | 400
    {"message": "유효하지 않은 토큰입니다."} |
    | /api/auth/send-verification-code | POST | 이메일 인증 코드 전송 | 200
    {"message": "인증 코드가 전송되었습니다."} | 500
    {"message": "이메일 전송 중 오류 발생"} |
    | /api/auth/verify-code | POST | 인증 코드 확인 | 200
    {"message": "인증이 완료되었습니다."} | 400
    {"message": "인증 코드가 올바르지 않습니다."} |
    | /api/socialAuth/google-login | POST | 구글 로그인 | 200
    {"token": "jwt_token", "user": { "id": 1, "email": "[user@example.com](mailto:user@example.com)", "picture": "profile_picture_url" }, "message": "구글 로그인/가입 완료" } | 400
    {"error": "구글 로그인 실패"} |
    | /api/socialAuth/google-verify-only | POST | 구글 ID 토큰 검증 및 DB 존재 여부 확인 | {"existingUser": true, "token": "jwt_token", "user": { "id": 1, "email": "[user@example.com](mailto:user@example.com)", "picture": "profile_picture_url" }, "message": "이미 가입된 소셜 계정 → 로그인 완료" } | 400
    {"error": "구글 검증 실패"} |
    | /api/socialAuth//google-signup-confirm | POST | 구글 회원가입 처리 | 201
    {"token": "jwt_token", "user": { "id": 1, "email": "[user@example.com](mailto:user@example.com)", "name": "User Name", "picture": "profile_picture_url" }, "message": "구글 소셜 회원가입 완료"} | 400 
    {"message": "이미 가입된 이메일입니다."}
    500 
    {"error": "회원가입 실패"} |
    | /api/search | GET | 검색 기능을 처리하는 엔드포인트 | 200 
    {"id": 12, "title": “제목1”, "content": “내용2”, "author": “이용자”, "posted_at": “2025-01-24 12:00:00”}  | 500 
    {"error": "Database error"} |
    | /api/posts | POST | 글 작성 | 201
    {"id": 1, "title": "새로운 글 제목", "content": "글 내용", "author": "작성자"} | 500
    { "message": "서버 오류 발생" } |
    | /api/posts | GET | 글 목록 조회 | 200
    {"id": 12, "title": "제목 1", "content": "내용 1", "author": "작성자 1", "created_at": "2024-01-01 12:00:00", “view_count”: 10, “is_hidden”: false} | 500
    { "message": "서버 오류 발생" } |
    | /api/posts/:id | GET | 글 상세 조회 | 200
    {"id": 1, "title": "제목", "content": "내용", "author": "작성자", "view_count”: 11, “is_hidden”: false} | 404
    {"message": "게시글을 찾을 수 없습니다."}
    500
    {"message": "서버 오류 발생"} |
    | /api/posts/:id | DELETE | 글 삭제  | 200
    {"message": "글이 삭제되었습니다."} | 500
    {"message": "서버 오류 발생"} |
    | /api/posts/:id | PUT | 글 수정 | 200
    {"message": "글이 수정되었습니다."} | 500
    {"message": "서버 오류 발생"} |
    | /api/posts/comments | POST | 댓글 작성 | 201
    {"id": 1, "postId": 1, "userId": 1, "content": "Content", "posted_at": "2025-01-23 12:00:00"} | 500
    {"message": "서버 오류 발생"} |
    | /api/posts/comments/:postId | GET | 댓글 조회 | 200 
    {"id": 11, "post_id": 4, "content": "Comment", "created_at": "2025-01-23 12:00:00", "user_email": "mkw@naver.com"} | 500
    {"message": "서버 오류 발생"} |
    | /api/posts/comments/reply | POST | 대댓글 작성 | 201 
    { "id": 11, "postId": 21, "userId": 41, "content": "Reply", "parentId": 1, "depth": 1, "posted_at": "2025-01-23 12:00:00" } | 500
    {"message": "서버 오류 발생"} |
    | /api/posts/comments/:commentId | DELETE | 댓글 삭제 | 200
    {"message": "댓글이 삭제되었습니다."} | 403
    {"message": "삭제 권한이 없습니다."}
    500
    {"message": "서버 오류 발생"} |
    | /api/posts/comments/:commentId | PUT | 댓글 수정 | 200
    {"message": "댓글이 수정되었습니다."} | 403 
    {"message": "수정 권한이 없습니다."}
    500 
    {"message": "서버 오류 발생"} |
    | /api/coupons | GET | 사용자의 쿠폰 목록 조회 | 200  
    {"id": 1,
    "user_id": 23,
    "name": “행복한 플라워 하트 케이크",
    "note": “빨리 써야 하는 쿠폰",
    "deadline": "2025-04-19",
    "status": “available",
    "image": "",
    "usage_location": "뚜레쥬르",
    "categories": ["빵집", "4월"]} | 500 Internal Server Error |
    | /api/coupons | POST | 새로운 쿠폰을 생성  | 200
    {"message": "쿠폰과 카테고리가 성공적으로 저장되었습니다.",
    "couponId": 1} | 500
    {"error": "트랜잭션 시작 중 오류가 발생했습니다."
    } |
    | /api/coupons/extract | POST | 쿠폰 이미지에서 바코드 및 텍스트 추출 | 200
    {"barcode": "993921004549",
    "name": “행복한 플라워 하트케이크",
    "note": "빨리 써야 하는 쿠폰",
    "deadline": "2025-04-19",
    "status": “available",
    "usage_location": “뚜레쥬르"} | 400
    {"error": "이미지 파일이 없습니다."}
    404
    {”error”: “쿠폰 정보를 추출할 수 없습니다.”}
    500
    {”error”: “쿠폰 정보 처리 중 오류가 발생했습니다.”} |
    | /api/coupons/:coupon_id | DELETE | 특정 쿠폰을 삭제 | 200
    {"message": "쿠폰이 성공적으로 삭제되었습니다."} | 500
    {"error": "쿠폰 삭제 중 오류가 발생했습니다."}
    404
    { “error”: “해당 쿠폰을 찾을 수 없습니다.” } |
    | /api/coupons/:coupon_id | PUT | 특정 쿠폰의 정보를 수정 | 200
    {"message": "쿠폰이 성공적으로 수정되었습니다."
    } | 500
    {”error”: “트랜잭션 시작 중 오류가 발생했습니다.”}
    {”error”: “트랜잭션 커밋 중 오류가 발생했습니다.”}
    {”error”: “쿠폰 수정 중 오류가 발생했습니다.”}
    { “error”: “카테고리 관계 삭제 중 오류가 발생했습니다.”}
    {”error”: “카테고리 관계 추가 중 오류가 발생했습니다.”}
    404
    { “error”: “해당 쿠폰을 찾을 수 없습니다.'”} |
    | /api/categories | GET | 카테고리 조회 |  |  |
    | /api/categories | POST | 카테고리 추가 | 200 “카테고리 추가 완료” | 400 “필수 파라미터가 누락되었습니다."
    500 "서버 에러가 발생했습니다.” |
    | /api//categories/:id | PUT | 카테고리 수정 | 200 “카테고리 수정 완료” | 404 "카테고리를 찾을 수 없습니다.” |
    | /api/categories/:id | DELETE | 카테고리 삭제 | 200 “카테고리 삭제 완료” | 404 "카테고리를 찾을 수 없습니다.” |
    | /api/dm/search | GET | 유저 이메일 검색 | 200
    {”id”:12, “email”: “user1@naver.com”} | 400 
    {"message": "검색어를 입력하세요." }
    500 
    {"message": "DB 오류 발생"} |
    | /api/dm/send | POST | DM 메시지 전송 및 저장 | 201 
    { "message": "메시지가 성공적으로 저장되었습니다.", "data": { "id": 276, "senderEmail": "sesac@gmail.com", "receiverId": 14, "content": "안녕? 반가워" } } | 400
    { "message": "수신자와 내용을 확인하세요."}
    500 
    { "message": "메시지 저장 오류"} |
    | /api/dm/:receiverEmail | GET | 대화 기록 조회 | 200
    {"sender_id": 123, "receiver_id": 444, "content": “쿠폰을 얼른 쓰라고", "sent_at": "2025-01-23"} | 500 
    {"message": "대화 기록 조회 중 오류 발생"} |
    | /api/dm/read/:receiverId | PUT | 메시지 읽음 상태 업데이트 | 200 
    { "message": "읽음 상태가 업데이트되었습니다." } | 500 
    {"message": "읽음 상태 업데이트 중 오류 발생"} |
- ERD (vs-code xxx 확장팩 사용했음)
    
    ![image.png](image%207.png)
    

$$
\color{white}\rule{360px}{1px}
$$

# 4. 결과물

- 최종발표자료
    
    [세이버발표자료.pdf](%25EC%2584%25B8%25EC%259D%25B4%25EB%25B2%2584%25EB%25B0%259C%25ED%2591%259C%25EC%259E%2590%25EB%25A3%258C.pdf)
    
- 주요스크린샷

$$
\color{white}\rule{360px}{1px}
$$

$$
\color{white}\rule{360px}{1px}
$$
