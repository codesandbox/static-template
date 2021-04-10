const app = new Vue({
  el: '#root', 
  data: {
    projects:[
       {index: 1,title:"sign up/login form",done: false},  
       {index: 2,title:"hover animation",done: false},      
       {index: 3,title:"css loader",done: false},             
       {index: 4,title:"gradient background",done: false},       
       {index: 5,title:"hide scrolls",done: false},       
       {index: 6,title:"picture cover",done: false},        
    ]
  }
});

  $(document).ready(function(){
    $('.tabs').tabs();
  }); 