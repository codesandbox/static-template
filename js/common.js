// Sử dụng proxy JSON được xây dựng
const URLPROXY = "https://jsonp.dllca.cn/?url=";

// Mã Hóa Url
const encode = function (url) {
  return encodeURIComponent(url);
};

/* Di Chuyển Chuột Để Hiển Thị Menu */
$("#show-allMenu").mouseover(function () {
  $(".menu-list").css("display", "block");
});
$(".menu-list").mouseout(function () {
  $(this).css("display", "none");
});
$(".menu-list").mouseover(function () {
  $(this).css("display", "block");
});

/* Hộp Đăng Nhập  */
function login(event) {
  this.id = $(event).attr("id");
  if (this.id === "login") {
    $(".login").css("display", "block");
    $('.login-box input[type="submit"]').attr("value", "登录");
    $(".tips p")[0].childNodes[0].nodeValue = "登录即代表同意";
  } else {
    // 注册事件
    $(".login").css("display", "block");
    $('.login-box input[type="submit"]').attr("value", "注册");
    $(".tips p")[0].childNodes[0].nodeValue = "注册即代表同意";
    // $('.tips p').text($('.tips p').text().replace("登录","注册"))
  }
}

// Chăn Sự Kiện Mặt Định Của Hộp Tìm Kiếm
$(document).on("keypress", ".search-wrap form", function (event) {
  return event.keyCode != 13;
});
// Nhập Nút Tìm Kiếm Liên Kết
function search() {
  if (event.keyCode == 13) {
    $("#search-btn").click();
  }
}

// Đóng Hộp Đăng Nhập
$(".close").click(function () {
  $(".login").css("display", "none");
});

// box Đăng Nhập
$("#login_btn").click(function (event) {
  event.preventDefault();
  var username = $("#username").val();
  var password = $("#userpwd").val();
  var btn = event.currentTarget.value;
  if (username != "" && password != "") {
    var reg = /^[A-z]\w{5,8}/g;
    if (!reg.test(password)) {
      alert("密码必须以字母开头,长度6-8位！");
      return;
    }
    alert(btn + "成功！");
    $(".login").css("display", "none");
    $(".user-message,.user-avatar").css("display", "block");
    $(".user-wrap p").css("display", "none");
  } else {
    alert("用户名或密码不许为空！");
  }
});

// ID Và Tên Danh Mục
$.get(
  `${URLPROXY}http://admin.iqingtun.com/web/bookroom/bookcategory`,
  (data) => {
    $.each(data.data, (i, value) => {
      if (i >= 8) {
        return false;
      }
      $(".header-nav .menu-list ul").append(`
					<li><a href="./bookAll.html?class_id=${value.id}">${value.title}</a></li>
				`);
    });
    // Phân Loại Trang，Điềều Kiện Phân Loai
    if ($(".books-classify").length != 0) {
      $.each(data.data, (i, value) => {
        $(".books-classify .tags").eq(0).append(`
						<span id=${value.id} class=${i == 0 ? "active" : ""}>${value.title}</span>
					`);
      });
    }
  }
);

/**
 * 获取URL参数
 	参考 https://blog.csdn.net/suyu_happy/article/details/78643005
 */
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURI(r[2]);
  return null; //返回参数值
}

// 蒙版显示隐藏
function setMask(state = "block") {
  $(".mask").css("display", state);
}

// 点击搜索按钮
$("#search-btn").click(function () {
  window.open("./bookAll.html?search=" + $("#search-input").val(), "_self");
});

// 更改主样式颜色
// $(":root").css('--main-color','pink')
