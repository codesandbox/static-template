# frontend_start

## 참고링크

https://www.w3schools.com/default.asp

https://codesandbox.io/dashboard/all/

https://github.com/edu-ministori/frontend_08
강사님 github link

## HTML

### Introduction

https://www.w3schools.com/html/html_intro.asp

> 웹 페이지 구조 표시

> 웹 페이지 콘텐츠 표시
>
> - 텍스트 콘텐츠
> - 멀티미디어 콘텐츠 : 이미지 . 비디오 , 오디오

### HTML Elements

https://www.w3schools.com/html/html_elements.asp

`=(backtick)

```
<tagname> Contents </tagname>
* 시작태그만 있는 경우 : Empty Element 라고 부른다

```

> 포함관계 = (nested)

```
<html>
  <body>
    <h1> Heading </h1>
  </body>
</html>

```

> html-body-h1 관계
>
> html : body 와의 관계 - 부모요소 / h1 과의 관계 - 조상요소
>
> body : h1과의 관계 - 부모요소 / html 과의 관계 - 자식요소
>
> h1 : body 와의 관계 - 자식요소 / html 과의 관계 - 자손요소

### HTML Attribute

https://www.w3schools.com/html/html_attributes.asp

### HTML Headings

https://www.w3schools.com/html/html_headings.asp

h1 ~ h6 " 제목태그 ( h -> heading)

### HTML Paragraph

https://www.w3schools.com/html/html_paragraphs.asp

### HTML Link

https://www.w3schools.com/html/html_links.asp

a : anchor

> URL(Uniform Resource Locator) : 파일식별자 (위치표시) , 가장 넓은 의미의 인터넷 주소를 의미
> 인터넷 주소
> IP (Internet Protocol) " 숫자로 구성된 주소(192.168.0.1)  
> Domain Name : www.naver.com DNS(Domain Name Server)
> Ex) blog.naver.com/blog/1234 => URL

### HTML File 경로

https://www.w3schools.com/html/html_filepaths.asp

절대 vs 상대

- 경로 위치 표시 방식
- 경로 표시 기준의 변경 여부

- 절대 경로 방식
- Ex) 대한민국 서울특별시 ~~ 대호 빌딩 8층
- 출발지 위치에 상관없이 항상 찾아갈 수 있도록 표시
- Ex) 도메인주소 / 상세경로 => https://www.naver.com/blog/image.jpg

- 상대 경로 방식
- Ex) 강남역 11번 출구에서 3분 걸어오면 대호빌딩
- 출발지 위치를 기준으로 표시
- Ex) 상세경로 => /blog/image.jpg || image.jpg

### HTML List

https://www.w3schools.com/html/html_lists.asp

> 중첩목록(Nested List)

### HTML Table

https://www.w3schools.com/html/html_tables.asp

table generator: https://www.tablesgenerator.com/html_tables

### HTML Images

https://www.w3schools.com/html/html_images.asp

alt = alternative

### HTML Video

https://www.w3schools.com/html/html5_video.asp

video attribute
controls = 재생 일시정지 기능
autoplay = 자동재생
muted = 소리 없앰
loop = 반복

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp

### HTML Block & inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계
> 블럭요소 = 다른 블럭요소 , 인라인 요소 , 콘텐츠 포함 가능
> 인라인요소 : 다른 인라인 요소 , 콘텐츠 포함 가능 , 블럭요소는 포함 불가능
> 예외 - a태그 인라인 요소이지만 블럭요소 포함가능

### HTML ID& Class

https://www.w3schools.com/html/html_id.asp

https://www.w3schools.com/html/html_classes.asp

> ID attribute
>
> - id로 붙여주는 이름은 한HTML 문서 내에서 고유해야함
> - id - 한 대상의 HTML Element에 하나의 이름만 지정할 수 있음

> class attribute
>
> - class로 붙여주는 이름은 한 HTML 문서내에서 여러번 중복 사용할 수 있음
> - class는 한 대상의 HTML Element에 여러개의 이름을 지정할 수 있음

<ul class="ulist">
 <ol class="ulist">
  ul ol태그 숫자 점 없애기

https://freebiesbug.com/psd-freebies/piroll-design-template-agencypersonal-portfolio/
https://www.photopea.com/
