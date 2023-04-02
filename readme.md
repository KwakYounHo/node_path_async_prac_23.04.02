# 여러가지 기술을 접목해 보기
* * *
- 들어간 기능  
| 기능 | 이름 |
| :--: | :--: |
| 내장모듈 | http |
| 내장모듈 | fs.promise |
| 내장모듈 | path |
| 조건문 | try,catch |

## 상세 설명
- 서버가 생성 되고, 해당 스코프에 첫 문장에 try를 입력, try의 끝에 404Page 응답
- GET 요청 중 명시 된 html파일은(index.html)직접 요청 처리
- GET 요청 중 명시되지 않은(없는) 파일 요청은 새로운 try문으로 req.url을 인수로 받아 조회 후 있다면 데이터 응답
  - 없다면 에러 catch => console.error
  - 이 과정에서 js, css파일 모두 자동 응답

- 처음 요청을 받으면 서버는
  1. try문을 검사하기 시작
  2. if req.method === GET을 통과하여 맞는 값이 있는지 검색
    - 없다면 새로운 try문을 만나 명시한 요청 외 파일이 있는 지 검색
      - 있다면 응답
      - 없다면 콘솔에 에러
  3. GET요청에 맞는 요청이 없다면 404 페이지 반환
    - POST요청을 작성을 안하였는데, POST가 있다면 POST 검토 후 없다면 404 반환
  4. 요청 검토 자체가 문제가 생겼다면 500 페이지 반환(콘솔에 메세지 출력)
    - 이 경우는 거의 볼 일이 없을 듯

## server.listen에서 server 생략
- Promise.then 쓰는 거 보고 따라 써봄