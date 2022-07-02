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
