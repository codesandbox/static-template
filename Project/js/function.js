let gnbListLink = document.querySelectorAll('.gnb-list-link');
let gnbDepth2 = document.querySelectorAll('.gnb-depth2');
let gnb = document.querySelector('.gnb');



for(let i=0; i<gnbListLink.length;i++){
  gnbListLink[i].addEventListener('mouseenter', function(){
    gnbDepth2[i].classList.add('active')

  });

  gnbListLink[i].addEventListener('mouseleave', function(){
    gnbDepth2[i].classList.remove('active')

  });
}