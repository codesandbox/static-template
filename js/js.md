# Javascript

- 문법

  - javascript 언어 문법
  - 문법의 내용
    - 데이터/변수/연산자
    - 명령문
    - 함수
    - 배열/객체/Class
    - 추가 문법

- 활용
  - HTML DOM(Document Object Model)
  - HTML/CSS/Js 종합 활용
  - Open API - 객체

## JS basic

- version

  - ES5
  - ES6

- 작성방식

  - External : js 파일 생성
  - Internal
    - HTML 파일에 js 코드를 작성
    - js 코드 블럭을 따로 구분해서 작성
  - Inline
    - HTML Tag에 js 코드를 작성

- 작성위치
  - js가 실행되는 시점에 HTML이 로딩(렌더링)되어 있어야 함
  - js가 실행되는 방식 : 최초 한번만 실행됨

## JS 문법

### 데이터/변수/연산자

- 데이터
  - 숫자
  - 문자

```
숫자 : 0, 1, 2, 3, 4, 5 ...
문자 : 가,나,다... , a,b,c...
```

- 데이터 타입(종류)
  - 숫자 : 정수, 실수 ...
  - 문자
    - 코드상에서 문자는 따옴표로 묶임
    - 낱개 글자, 묶음 글자 ...
  - 불리언(boolean, 논리값)
    - true/false(참/거짓)

```
1 + 1 = 2

'a' + 1 = 'a1'

'1' + 1 = 11
```

\*\* 자바스크립트는 데이터 타입을 엄격하게 구분하지 않음

- 변수(variable)
  - 데이터를 저장하는 공간
  - 변수는 선언/정의를 한 이후에 사용
  - 변수 선언 예약어(키워드)
    - var(ES5) : 타입 구분 안함, 데이터 변경 자유로움
    - let(ES6) : 타입 구분 안함, 데이터 변경 자유로움
    - const(ES6) : 타입 구분 안함, 데이터 변경 불가능

```
JAVA
정수 변수 선언 : int number1;
실수 변수 선언 : float number2;
문자 변수 선언 : char text;

ES5/6
정수 변수 선언 : var number1; | let number1; | const number1;
실수 변수 선언 : var number2; | let number2; | const number2;
문자 변수 선언 : var text;    | let text;    | const text;
```

- 연산자

- 산술연산자

  - +, \*, -, /
  - % : 나머지연산

- 할당(대입)연산자

  - = : 값을 변수에 저장

  ```
  const PI = 3.141592;
  ```

  - 산술+대입연산(재귀)

  ```
  let a = 10;

  a = a+5

  a += 5
  ```

  \*\* 산술+대입 연산이 반복 실행되면 일정 값을 지속적으로 연산

  - 카운터

  ```
  a += 1 => a++

  a -= 1 => a--
  ```

- 비교연산자

  - ==, === : 같음
  - !=, !== : 다름
  - 비교 연산자를 사용한 식의 결과는 참 또는 거짓

- 논리연산자
  - 논리값(참/거짓)을 연산
  - 논리식 : 논리값이 결과로 나오는 식
  - AND : && - 연산하는 여러개의 논리값중 모두 참이어야 연산결과가 참
  - OR : || - 연산하는 여러개의 논리값중 모두 거짓이어야 연산결과가 거짓
  - NOT : ! - 연산 결과의 반대값 표시

### 명령문

- 프로그래밍 언어의 실행 흐름에 관여
- 조건문/분기문
  - if : 조건/상황에 대한 다른 결정에 대해 각각 다른 실행방식을 선택
    - if
    - else if
    - else

```
if(결과값이 bool데이터인 식){
  결과값이 참일때 실행코드
}

if(bool1){
  bool1이 참일때 실행코드
}
else if(bool2){
  bool2가 참일때 실행코드
}

if(bool){
  bool이 참일때 실행코드
}
else {
  bool이 거짓일때 실행코드
}

if(bool1){
  bool1이 참일때 실행코드
}
else if(bool2){
  bool2가 참일때 실행코드
}
else {
  bool1, bool2 모두 거짓일때 실행코드
}
```

```
if(a>10){}
if(true){}
if(a+1){} : 값이 숫자 - 0 : false, 정수 : true
if(1){}
```

- switch
  - 식의 결과값에 따라 실행 분기

```
let a = 0;
switch(a+1){
  case 1:
          실행코드1
          break;
  case 2:
          실행코드2
          break;
}
```

- 반복문
  - for : 결정된 반복횟수만큼 반복 실행 구문
    - 구문1, 구문2, 구문3이 유기적으로 연결되어 반복횟수를 결정

```
for(초기값구문1; 비교식구문2; 수식구문3){
  반복 실행 코드
}

1) 초기값구문1이 최초 한번 실행
2) 비교식구문2가 실행 -> 참/거짓 -> 거짓 : 반복구문실행 종료
3) 참일때 실행코드 실행
4) 수식구문3 실행
5) 2)부터 반복 실행
```

```
// i=i+1 => i+=1 => i++

for(let i=0; i<3; i++){
  코드 블럭
}

1. i=0
2. i<3 => true
3. 코드블럭 실행
4. i++ => i=1
```

```
for(let i=0; i<5; i++){} : 5번 반복
for(let i=1; i<=5; i++){} : 5번 반복
for(let i=0; i<10; i+=2){} : 5번 반복
```

- while
  - 조건식의 결과값이 참일때 반복 실행

```
while(조건식){
  실행코드
}
조건식의 결과값이 참일때 계속 반복 실행
```

### 함수

- 특정작업을 실행할 수 있도록 만들어진 코드 블럭
- 함수 하나가 독립적으로 실행될 수 있음
- 코드를 그룹화
- 함수를 실행하기 위해서 해당 함수를 호출
- 매개변수 : 외부로부터 값을 받아서 실행할 때 사용하는 변수

### 배열/객체/Class

- 집합 형태의 데이터

#### 배열

- 같은 타입의 데이터들을 나열해서 패키지화 한 것

```
let array = [1,2,3,4,5]
```

#### 객체

- 어떤 대상을 데이터화 시킨 집합 데이터
- 객체 데이터 {}

  - Property : 객체 데이터화 시킨 것, 객체가 가지고 있는 성질, 형태
  - Method : 객체에 포함된 함수, 객체에 기능 정의

  ```
  const obj= {type:"fiat", model:"500", color:"white" }
  ```

#### class

- 객체 데이터를 쉽게 만들 수 있게 하는 설계도

### 추가 문법

#### 변수 scope

- Scope

  - Global Scope

    - 변수는 모든 범위에서 접근 가능

  - Function Scope:for구문에 함수선언을 넣을 수는 없다

    - 변수는 해당 범위내에서만 접근 가능

  - block Scope
    - 변수는 해당 범위내에서만 접근 가능

```
<script>
// Global Scope
let a = 1;
var _a = 1;

function myFunction(){
  //function scope
  let b = 2;
  var _b = 2;

  for(statement){
    //block Scope(1)
    let c = 3;
    var _c = 3;
  }
}

if(condition){
  //block Scope(2)
    let d = 4;
    var _d = 4;
}
</script>
```

## JS 활용

- 데이터 입출력
- UI 효과

### HTML DOM

- DOM(Document Object Model): HTML Element들을 객체화 시킨 모델
- HTML DOM을 사용하여 HTML Element를 제어

### DOM 접근 API(Application Programming Interface)

- DOM API : DOM 객체 메소드

```
HTML4
document.getElementByID('id'): id로 DOM 접근
document.getElementsByClassName('class'): class로 DOM 접근
document.getElementsByTagName('tagname'): tag로 DOM 접근

jQuery: 요즘 많이 사용하지 않음
$('#id')
$('.class'):여러개 일 경우 알아서 접근/속도,효율이 떨어짐/개발은 편함
$('tag')

HTML5
document.querySelector('#id')
document.querySelector('.class'):여러개 일 경우 맨 처음 하나만 접근
document.querySelector('tag')

document.querySelectorAll('.class')
document.querySelectorAll('tag')

vanilla JS: 프레임워크 또는 라이브러리가 적용되지 않은 순수한 자바스크립트
```

### 이벤트

- 상태(상황)의 변화
- ~할 때 : 이벤트 발생

```
마우스를 클릭할 때, 키보드 키를 누를 때
```

```
이벤트 흐름
이벤트 발생 -> 신호 발생 -> 신호 감지 -> 해당 이벤트에 대응하는 기능/동작 실행
```

- addEventListener(이벤트핸들러) : 이벤트를 감지
- 이벤트핸들러: 익명함수 사용
  - 익명함수: 함수 이름이 없는 함수, 선언과 동시에 실행

```
function(){

}
```

```
dom.addEventListener('click',function(){
 실행코드블럭
});
```

### CRUD

### 화면효과(Effect)
- 시각적 효과=> CSS제어
  - CSS 시작상태화 끝상태를 구현
  - JS구현
- Effect구현 밸런스
  - 효과 표현: CSS
  - 효과 동적 제어: JS

