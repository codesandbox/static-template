const navslide = () => {
  const burger = document.querySelector('.burger') ;
  const nav1 = document.querySelector('.nav-links') ;
  const navlinks = document.querySelectorAll('.nav-links li'); 
  
  burger.addEventListener('click' , () => {
    nav1.classList.toggle('nav-active');
  });
  //animate 

  navlinks.forEach((link , index ) => {
    link.style.animation  =  'navlinksfade 0.5s ease forwards'; 
    //console.log(index / 7);
  });
}

navslide() ;

