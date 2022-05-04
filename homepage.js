//Scroll up
/**
 * Kompletní skript včetně změn pro abecední rejstřík
 * Přidány byly řádky 25 - 47 a 69 - 82
 */
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById('scrollUp').style.display = 'block';
  } else {
    document.getElementById('scrollUp').style.display = 'none';
  }
}

function topFunction() {
  $('body,html').animate({
    scrollTop: 0
  });
}

$('document').ready(function () {
  changeAbc();
  $('.dropdown-menu').on('click', function (e) {
    if ($(this).hasClass('dropdown-menu-form')) {
      e.stopPropagation();
    }
  });
  if (document.getElementById('divPZ')) {
    $('#divPZ').scrollToFixed({
      marginTop: 0
    });
    $('#divPZ').scrollToFixed({
      preFixed: function () {
        $(this).addClass('divFixedEffect');
      },
      postFixed: function () {
        $(this).removeClass('divFixedEffect');
      }
    });
  }
});
$(window).on('resize', function () {
  changeAbc();
});

function openLeftSlide() {
  document.getElementById('LeftSlide').style.width = '250px';
  document.getElementById('LeftCloseBtn').style.display = 'block';
}

function openRightSlide() {
  document.getElementById('RightSlide').style.width = '250px';
  document.getElementById('RightCloseBtn').style.display = 'block';
}

function closeLeftSlide() {
  document.getElementById('LeftSlide').style.width = '0';
  document.getElementById('LeftCloseBtn').style.display = 'none';
}

function closeRightSlide() {
  document.getElementById('RightSlide').style.width = '0';
  document.getElementById('RightCloseBtn').style.display = 'none';
}

function changeAbc() {
  const abcToolbar = $('#abc-btn-toolbar');
  const abcGroup = $('#abc-btn-group');
  if ($(window).width() < 1170) {
    abcToolbar.removeClass('btn-toolbar');
    abcGroup.removeClass('btn-group');
    abcGroup.removeClass('margin-auto');
  } else {
    abcToolbar.addClass('btn-toolbar');
    abcGroup.addClass('btn-group');
    abcGroup.addClass('margin-auto');
  }
}
