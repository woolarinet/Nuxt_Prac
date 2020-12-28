# bodyParser
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
