# 1. bodyParser
###### request.body에 있는 데이터에 접근하기 위해 사용한다.
## bodyParser.json()
###### application/json 방식의 content-type 데이터를 받아준다.
## bodyParser.text()
###### 'text/xml' 방식의 content-type 데이터를 받아준다
## bodyParser.urlencoded({...})
###### application/x-www-form-urlencoded 방식의 content-type 데이터를 받아준다.(jQuery.ajax의 기본타입)
## extended: true와 false의 차이점
###### 데이터를 인코딩하는 방식의 옵션을 선택하는 것이라 보면 된다. 기본적으로 같은 동작방식을 가지지만 전달되는 object에 depth가 있을 경우 인코딩 방식이 달라진다.

### true : qs library
###### depth를 나눠주며 최대 5depth 까지 가능하다.
### false : querystring library
###### depth값을 키값에 모두 포함한다.

# 2. ORM
###### Object Relational Mapping (객체-관계 맵핑)
###### 객체지향에서 class가 있듯이, 관계형DB에는 Table이라는 개념이 있다.
###### DMBS 앞단에서 기능하는 새로운 개념
###### 이번 프로젝트에서는 sequelize를 통해 MySQL 제어

# 3. Ajax
###### JavaScript의 라이브러리 중 하나.
###### Asynchronous Javascript And Xml의 약자로 브라우저가 갖고 있는 XMLHttpRequest 객체를 이용
###### 전체 페이지를 새로 고치지 않고 일부만을 위한 데이터를 로드하는 기법이다.
###### 즉, JavaScript를 이용한 클라이언트와 서버간의 비동기 통신
## HTTP Protocol 복습
###### 기본적으로 HTTP 프로토콜은 클라이언트에서 요청을보내고 서버에서 응답을 하면 연결이 끊어진다.
###### 따라서 화면의 내용을 갱신하기 위해 다시 요청응답과정을 거쳐야한다. 
###### 이는 상당한 낭비를 초래하므로 json이나 xml형태로 필요한 데이터만 받아 갱신하는 ajax를 쓰고있다
## Ajax의 장단점
### 장점
###### 웹페이지 속도향상, 서버응답 대기x, 서버에서 데이터만 전송하면 되므로 코드의 양이 줄어듬
### 단점
###### 보안(history 관리 불가능), 연속으로 데이터 요청시 서버부하 증가, 유저에게 진행정보 출력 불가능(오작동 가능성)

## 3-1. Promise
###### JavaScript에서 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용하는데, 전통적인 패턴은 콜백 헬로 인해 가독성이 좋지 않다.
###### 또한 비동기 처리 중 발생하는 에러의 처리가 곤란하고 여러 비동기 처리를 한번에 하는데에도 한계가 존재한다.
###### 따라서 ES6에서는 비동기 처리를 위한 다른 패턴으로 Promise를 도입
### state
###### pending: 비동기처리가 아직 수행되지 않은 상태
###### fulfilled: 비동기처리 성공(resolve)
###### rejected: 비동기처리 실패(reject)
###### setteled: 비동기처리 수행(resolve or reject)
### 후속처리
###### then, catch 메소드를 통해 비동기 처리 결과를 전달받아 처리한다. 둘 다 Promise를 반환한다.
###### then: .then(첫번째 인자 = 성공, 두번째 인자 = 실패)
###### catch: 예외(비동기 처리 시 에러 or then에서 발생한 에러) 발생 시 호출
###### then에 두번째 인자를 전달하는 것은 첫번째 인자에서 발생한 에러를 캐치하지 못하고 코드의 가독성이 나쁨
###### 따라서 에러처리는 catch를 사용하는 것을 권장
### chaining
###### 후속처리함수로 Promise 객체를 반환하고 나면, 여러개의 Promise를 연결하여 사용하여 콜벡 헬을 해결한다.
###### ex) 특정 포스트를 작성한 사용자가 작성한 모든 포스트를 검색하는 방법
### axios
###### Vue에서 권고하는 Promise 기반의 API

# 4. 서버 인증
## 4-1. Session/Cookie
###### 로그인 -> 서버에서 사용자확인 -> 사용자ID 세션저장소에 저장 -> 세션ID 발행 후 응답
###### -> 사용자가 쿠키에 저장 -> 인증이 필요한 요청마다 쿠키를 헤더에 실어 요청 -> 서버에서 대응하는 정보 정보획득 후 전송
### 장점
###### 인증의 책임을 서버가 지게하여 보안강화. 통신 도중 http요청이 노출되도 쿠키의 값은 무의미
### 단점
###### 하지만 해커가 쿠키를 이용해 http요청을 보내면 세션에서는 사용자라고 오인
###### (https를 사용하여 정보를 암호화 or 세션에 유효시간을 넣어 해결 가능)
## 4-2. 토큰(JWT)
###### Json Web Token의 약자로 인증에 필요한 정보를 암호화시킨 토큰
###### Header(암호화방식, 타입 포함), Payload(사용자ID, 유효기간 포함), Verify Signature(Base64방식으로 인코딩한 Header, Payload, SECRET KEY를 더한 후 서명) 총 이 세개가 포함된다.
###### 로그인 -> 사용자확인 -> 사용자ID Payload에 적재 -> SECRET KEY를 이용해 ACCESS TOKEN 발급
###### -> 사용자는 토큰을 받아 저장 후, 인증이 필요한 요청마다 토큰을 헤더에 실어 요청
###### -> 토큰의 Verify Signature를 SECRET KEY로 복호화 후, 조작여부, 유효기간 확인
###### -> 검증 후 Payload를 디코딩하여 사용자ID에 맞는 데이터 전송
### 장점
###### 간편하며 추가 저장소가 필요없다. stateless한 서버(서버를 확장 or 유지보수에 유리)
###### 토큰 기반의 다른 인증시스템 접근가능(ex. Facebook, Google)
### 단점
###### 이미 발급된 토큰을 돌이킬 수 없다. 해커에게 유출 시, 유효기간 지나기 전까지 정보를 마음껏 악용 가능
###### (유효기간을 짧게하고 Refresh Token을 발급함으로써 해결)
###### Payload의 정보가 제한적(중요정보 적재 불가능), 토큰의 길이가 길어 서버의 자원낭비 발생
## 4-3. Oauth
###### 외부서비스의 인증 및 권한부여를 관리하는 범용적 프로토콜
###### 반드시 https를 사용하여 보안강화
###### 사용자-서버간의 인증과정 -> 권한증서를 Authorization 서버에 전송 -> 확인 후 정보와 토큰 등을 발급
###### -> 서버에서 토큰을 db에 저장 or 사용자에게 전송 -> Resource 서버에 자원이 필요하면 사용자가 서버를 통해 토큰을 담아 요청
###### -> 토큰의 유효성을 확인후, 서버에 전송
###### 즉, 사용자 - 서버 - Oauth서버 간 통신
### 4-3-1. SNS로그인
###### Oauth + 서버인증으로 구성
###### 서버에 인증요청 -> sns 로그인 url을 사용자에게 전송 -> 해당 url을 통해 로그인 후, 권한증서를 담아 서버에 전송
###### -> 서버가 권한증서를 sns의 authorization 서버로 요청 -> 확인 후 Access, Refresh 토큰과 유저의 정보를 전송하며 응답
###### -> 받은 고유ID를 key값으로 db안에 존재 유무를 파악하여 로그인 or 회원가입 진행


# REFERENCES
###### https://poiemaweb.com/es6-promise
###### https://coding-factory.tistory.com/143?category=785989
###### https://tansfil.tistory.com/60?category=255594

