// main.js

// 제품정보목록 출력
function show_product(data, _key) {
  var $product_list = $(".product_list");
  var product = data.product;
  var $li = "";

  // 목록 초기화
  $product_list.empty();
  console.log("keyword: " + _key);

  for (var i in product) {
    if (getHanF(product[i].title) === _key || _key === "") {
      var getHan = getHanF(product[i].title);
      console.log("title=> ", i + ", " + getHan);
      $li += "<li><a href='#'>";
      $li += "<img src='" + product[i].img_url + "'>";
      $li += "<div class='cat'>" + product[i].cat + "</div>";
      $li += "<div class='title'>" + product[i].title + "</div>";
      $li += "<p class='text'>" + product[i].text + "</p>";
      $li += "</li>";
    }
  }
  $product_list.append($li);
}

// 카테고리 탭 선택시 제품정보목록 출력
function show_product_cat(data, _key) {
  var $product_list = $(".product_list");
  var product = data.product;
  var $li = "";

  // 목록 초기화
  $product_list.empty();
  console.log("keyword: " + _key);

  for (var i in product) {
    if (product[i].cat === _key) {
      $li += "<li><a href='#'>";
      $li += "<img src='" + product[i].img_url + "'>";
      $li += "<div class='cat'>" + product[i].cat + "</div>";
      $li += "<div class='title'>" + product[i].title + "</div>";
      $li += "<p class='text'>" + product[i].text + "</p>";
      $li += "</li>";
    }
  }
  $product_list.append($li);
}

var product_ui_info = [
  { tab_name: "일반의약품" },
  { tab_name: "전문의약품" },
  { tab_name: "건강기능식품" }
];

// 제품 데이터 로딩
function read_product_data(_keyword) {
  $.ajax({
    url: "js/data.json",
    dataType: "json",
    success: function(res) {
      console.log(res);
      if (
        _keyword !== product_ui_info[0].tab_name &&
        _keyword !== product_ui_info[1].tab_name &&
        _keyword !== product_ui_info[2].tab_name
      ) {
        show_product(res, _keyword);
      } else {
        show_product_cat(res, _keyword);
      }
    },
    error: function(err) {
      console.log("server error " + err);
      alert("server error!");
    }
  });
}

$(function() {
  // 전체 목록
  read_product_data("");

  // 카테고리별 보기
  $(".category-list a").on("click", function() {
    var cat_name = $(this).text();
    console.log(cat_name);
    // 전체 카테고리 읽기
    if (cat_name === "전체") {
      read_product_data("");
    } else {
      // 선택한 카테고리 읽기
      read_product_data(cat_name);
    }
    return false;
  });

  // 가나다... 상품 검색
  $(".sh-list li a").on("click", function() {
    // keyword: 검색할 단어
    var keyword = $(this).text();
    console.log(keyword);
    // 한글 키워드 검색
    read_product_data(keyword);
    return false;
  });
}); // end$()
