# bodyParser
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

# ORM
###### Object Relational Mapping (객체-관계 맵핑)
###### 객체지향에서 class가 있듯이, 관계형DB에는 Table이라는 개념이 있다.
###### DMBS 앞단에서 기능하는 새로운 개념
###### 이번 프로젝트에서는 sequelize를 통해 MySQL 제어

# Ajax
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

## Promise
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

## axios
###### Vue에서 권고하는 Promise 기반의 API

# REFERENECES
###### https://poiemaweb.com/es6-promise
###### https://coding-factory.tistory.com/143?category=785989

