# HTML

- Contents

  - Text
  - Media
    - Image, Video, Audio

- Structure
  - Semantic : 의미있는 구조
  - Layout

## HTML basic

- HTML : Hyper Text Markup Language

  - Hyper Text : 하이퍼링크로 연견된 문서 => 웹페이지(콘텐츠,구조)
  - Markup : 표시
  - Language : 언어

- HTML 문법
  - 명칭 : Tag / Element
  - 구성 : 시작태그 ~ 종료태그
  - 종료태그가 없는 태그 : 빈태그(Empty Element)

```
<tag> content </tag> : Element

<tag ...> : Empty Element
```

- HTML 속성(attribute)
  - HTML Element를 표시할때 필요한 추가정보 입력
  - name="value"

```
<a href="https://www.naver.com">네이버</a>

<img src="photo.jpg">
```

## HTML Basic Structure

```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

### DOCTYPE

- HTML 문서타입
  - HTML 버전
  - HTML5 표준

### Head - 웹사이트 기본정보

- meta : 웹사이트 관련 정보(검색엔진)
- title : 웹사이트 제목

### Body - 웹사이트 컨텐츠

- 웹사이트에 contents, structure... 표시하는 모든 태그

## HTML Contents

### Text

#### heading(제목)

- h(heading) : 제목태그
- 1 ~ 6 단계로 표시됨

#### paragraph(단락)

- p(paragraph) : 단락태그
- 강제줄바꿈, 강제 공백은 이식되지 않고 공백 한 칸으로만 인식
  - line break : br(강제줄바꿈 태그)
  - space : &nbsp;(강제 공백 엔터티(Entity))
- hr(horizontal rule) : 수평선 긋기
  - 단락을 선의 형태로 구분

#### list(목록)

- ul(Unordered List) : 순서없는 목록
- ol(Ordered List) : 순서있는 목록
- li(List Item) : 목록 항목

\*\* 포함관계(Nested Structure)

- 태그안에 다른 태그들이 포함되는 것
- 포함하는 요소
  - 조상요소(Ancestor)
  - 부모요소(Parent)
- 포함되는 요소
  - 자식요소(Child)
  - 자손요소(Descendant)
- 옆에 나란히 있는 요소
  - 형제요소(sibling)

```
(1) <html>
(2)   <body>
(3)     <h1>내용 제목</h1>
(4)     <p>
(5)       단락내용<br>
        </p>
      </body>
    </html>
```

(1) 조상 요소 | 기준 요소 | 조상 요소
(2) 조상 요소 | 자식 요소 | 부모 요소
(3) | 자손 요소 | 형제 요소
(4) 부모 요소 | 자손 요소 | 기준 요소
(5) 기준 요소 | 자손 요소 | 자식 요소

- Description List(설명 목록)

  - dl(description list)
  - dt(description title) : 항목
  - dd(description data) : 항목에대한 설명

#### table(표)

- table
- thead(table head) : 표 상단 - 제목
- tbody(table body) : 컨텐츠, 데이터
- tr(table row) : 행
- th(table header) : 제목
- td(table data) : 칸(열)

#### hyper link(하이퍼링크)

- a(anchor)
- 기본 속성 : href(hypertext reference) : 연결할 위치(웹페이지)

- 링크 이동 위치
  - 외부링크
  - 내부링크 : Bookmark

### Media

#### image(이미지)

- img(image)
  - 빈 요소
- 기본 속성
  - src(source) : 이미지 파일 이름, 위치
  - alt(alternate text) : 대체 텍스트 - 이미지가 화면에 표시되지 않을때, screen reader

```
<img src="photo.jpg" alt="제주도 서귀포 바닷가 배경 사진">
```

#### video(영상)

- video, source
- 속성

  - video 태그 : on/off 형태 attribute

    - controls : 동영상 제어 버튼
    - autoplay : 자동재생
    - muted : 음소거
    - loop : 반복 재생

  - source 태그
    - src : 파일 이름, 경로
    - type : 미디어 형식

- Youtube 영상

## HTML Structure

### Semantic

- header
  - logo, login ...
- nav(igation)
  - menu
- section
  - 본문 영역
- article
  - 본문 영역
- aside
  - 본문 영역, 부수적인 컨텐츠
- footer
  - 연락처, 주소, 회사 이름 ...

### Layout

- Block & Inline
  - Block 요소
    - 태그가 화면 브라우저에 표시될 때 각 태그영역이 새 줄에서 표시
    - 태그 영역이 부모요소 전체에 채워짐
  - Inline 요소
    - 태그가 화면 브라우저에 표시될 때 각 태그영역이 같은 줄에서 표시
    - 태그 영역이 콘텐츠에 맞춰짐

### container element

- div(ision)
  - block
- span
  - inline

## 경로 지정 방식

- 파일 위치, 인터넷 주소(url)
- 상대 경로
  - 리소스 파일을 사용하는 HTML 파일 기준

```
root(/) - [html1] - home.html
        - [html2] - [about] - about.html
        - [images] - photo.jpg

1)home.html -> photo.jpg
- ../images/photo.jpg

2)about.html -> photo.jpg
- ../../images/photo.jpg

```

- 절대 경로
  - 이미지 표시하는 HTML 페이지가 기준이 아니고, 해당 서브가 기준

```
www.image.com
root(/) - [html1] - home.html
        - [html2] - [about] - about.html
        - [images] - photo.jpg

1)home.html
- www.image.com/images/photo.jpg

2)about.html -> photo.jpg
- www.image.com/images/photo.jpg

```

## 강조 태그, 기타태그

- 텍스트 특정 부분 강조

  - strong : 강한 강조
  - em(emphasize) : 일반 강조
  - mark : html5버전, block강조/ caniuse.com

- 텍스트를 표현할 때 부족한 태그를 보완

  - i(talic)
  - b(old)

# CSS

- content styling

  - text styling
  - media styling

- layout(structure styling)
  - 가로배치(flexbox)

## CSS basic

- CSS : Cascading Style Sheet

```
효율성,브라우저에 좋음
h1 {color:blue;font-size:20px;}

가독성,사람에 좋음
h1 {
  color:blue;
  font-size:20px;
  }

  사람이 보기 좋게 작성하고 브라우저가 받아 들이게 편하게 압축하면 됨

```

## Selector(선택자)

- HTML 요소 선택
- HTML 요소 선택방법
  - Simple Selector(단순선택자)
    - tag/element 이름 사용
    - class 이름 사용
    - id 이름 사용

```
<a href="https://www.naver.com" class="naver">네이버</a>
<a href="https://www.daum.net" id="daum">다음</a>

/* a태그 2개 모두 red 적용 */
a {
  color:red;
}

/* a태그 각각 다른 색깔 적용 */
.naver {
  color:blue;
}
#daum {
  color:green;
}
```

### id, class 이름의 특징

- id

  - 같은 html 페이지에서 유일해야 함
    - 프로그램밍 언어의 변수와 연결 가능성이 있음
  - html 요소에 여러개의 id 이름 사용 불가능

- class
  - 같은 html 페이지에서 여러번 사용 가능
  - html 요소에 여러개의 class 이름 사용 가능

```
<p class="paragraph">단락1</p>
<p class="paragraph">단락2</p>
<p id="content">단락3</p>
<p id="content">단락4</p>_X


<p class="gnb-list-item">회사소개</p>



```

### CSS 선택자 우선순위

- cascading 규칙

  - 동일한 대상에 여러 스타일이 적용 될 때 마지막에 적용된 스타일이 반영

- 선택자 우선순위
  - 선택자 종류에 따라 css 적용 우선순유ㅣ가 다르게 정의
  - cascading 규칙에 따르지 않고 CSS를 적용할 때
  - inline : 1000
  - id : 100
  - class : 10
  - tag : 1

#### Text aligment

```
p{
  test-align:center;
}
```

- 정렬값: left, center, right, justify(양쪽맞춤)
- 단어 중간에 줄바꿈

```
word-break: break-all;
```

#### Text Decoration

```
h1{
  text-decoration:underline;
}

h1{
  text-decoration:line-through;
}

h1{
  text-decoration:overline;
}

a{
  text-decoration:none;
}

```

#### Text Spacing

```
p{
   text-indent:16px;
}

h{
  letter-spacing:5px
}

p{
  word-spacing:3px
}

p{
  white-space:nowrap;
}
```

- line-height
  - 텍스트 줄 높이를 포함한 줄 높이
  - 값: px, 배수
  - 배수: 폰트크기를 기준, 소수점 포함한 숫자 가능

\*\* 조상요소나 부모요소에 CSS 속성을 적용했을 때, 자식요소에 상속되는 속성이 있음

- HTML Element 중에 상속되지 않는 태그가 있음
- CSS 속성중에 상속되지 않는 속성이 있음

#### Font Family

- css파일이 브라우저에서 랜더링 되기 때문에 폰트 파일을 클라이언트 PC에서 찾음

  - 다수의 클라이언트 PC에 설치될 만한 폰트를 선택(Web safe)

- font-family 속성에 값으로 정해준 폰트 종류를 차례대로 찾음(Fallback)

- 서버에서 폰트를 사용할 수 있게 하는 기능

  - Web Font:

- 구글 폰트

- 폰트 종류(저작권)
  - 폰트 파일 포함 여부

#### Font size

- font-size
- 폰트 크기
- 값: px

#### Font style

- font-style
- 기울임꼴 설정
- italic

#### Font weight

- font-weight
- 굵기
- normal/bold
- 단위없는 100단위 숫자 값 사용

#### Link style

- a 태그 4가지 상태로 구분
- link, visited, hover, active

```
<a herf="https://www.naver.com" class="link">naver</a>
a:link{}
.link:visited{}
a:hover{}
a:active{}
```

### Media styling

- image, video
  - box model 적용
  - 위치 적용

### Layout styling

- Element 영역
  - Block, Inline Element
- Element 영역 styling
  - Box Model
- Element 배치
  - 배치 지정
    - 인접해 있는 박스들의 관계
    - 인접해 있는 박스들 사이에 영향
  - 위치 지정
    - 박스의 위치를 단독으로 지정

#### Box Model

- Box Model 구성요소

  - content(width/height), padding, border, margin

- inline 요소에 box model 적용
  - width/height 적용 안됨
  - margin: 위아래 적용 안됨, 좌우는 적용 됨

##### width/height

- block 요소
  - width는 부모요소에 채워짐
  - height는 contents 또는 자식요소에 맞춰짐
- px
  - 수치값으로 크기 고정
- %
  - 부모요소를 기준으로 일정 비율 크기 만클 지정
  - height는 적용되지 않음
- auto
  - width/height 자동으로 크기 지정
  - width/height의 원래 특성으로 적용

##### padding

- 안쪽여백

```
padding-top
padding-right
padding-bottom
padding-left
(**방향순서: top을 기준으로 시계방향 순서)
padding:10px 20px 30px 40px; 4방향 각각 적용
padding:10px 20px 30px; (2번째값: 좌우 공통적용)
padding:10px 20px; (1번째값: 위아래 공통적용, 2번째값: 좌우 공통적용)
padding:10px;  4방향 공통 적용
```

##### margin

- margin 사용 방법은 padding과 동일함
- margin collapse(겹칩/상쇄)
  - 위아래 인접한 박스의 margin이 상쇄 되는 현상
  - 두 여백중 큰 쪽 여백만 적용
  - 좌우로 인접한 박스는 양쪽의 margin이 모두 적용되어 합쳐짐

##### Border

- 굵기, 모양, 색

```
border: 1px solid red;

border-top: 1px solid red;
border-right:
border-bottom:
border-left:
```

##### background

- 배경색, 배경 이미지
- 배경은 box model 요소중 content, padding요소까지 적용

```
background-color:red;

background-image:url(이미지파일);
background-repeat:no-repeat;
background-position:10px 20px;
background-attachment:fixed;

```

- background-repeat

  - repeat(default), repeat-x, repeat-y, no-repeat

- background-position

  - px
  - left, center, right
  - top, center, bottom
  - 배경 이미지의 위치 지정은 이미지 반복이 안될 때 적용

- background-attachment
  - 배경 이미지 고정
  - fixd

#### display

- 박스의 표시 속성을 변경해서 표시

```
display:inline; /* block 요소가 inline요소의 특성으로 화면에 표시 */
display:block; /* inline 요소가 block요소의 특성으로 화면에 표시 */
display:inline-block; /* inline과 block의 특성을 모두 표시: 나란히 표시, 박스모델 */
```

### layout 배치

- float
- flex
- grid

#### flexbox
