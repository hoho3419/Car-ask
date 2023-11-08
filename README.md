# leenkimmail
리앤김 메일 - API 명세서


1-2) SignIn
요청
URL: /auth/signin
Method: POST
Headers:
Content-Type: application/json
Body:
email: string
password: string
응답 예시
status: 200 OK
body
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
}

2-1) SendMail
요청
URL: /todos
Method: POST
Headers:
Authorization: Bearer access_token
Content-Type: application/json
Body:
todo: string
응답 예시
status: 201 Created
body
{
  "id": 1,
  "todo": "과제하기",
  "isCompleted": false,
  "userId": 1
}

2-2) getMails
요청
URL: /todos
Method: GET
Headers:
Authorization: Bearer access_token
응답 예시
status: 200 OK
body
[
  {
    "id": 1,
    "todo": "todo2",
    "isCompleted": false,
    "userId": 1
  },
  {
    "id": 2,
    "todo": "todo3",
    "isCompleted": false,
    "userId": 1
  }
]
