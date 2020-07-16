<?php
/*
Programa desenvolvido por Marcio A. M. Reyes para
Imperium Digital Marketing Político
*/

$bkgImg     =    './arquivos/img'.$_POST['inBkgImg'];
$eventName  =    $_POST['inEventName'];
$headline   =    $_POST['inHeadline'];
$opening    =    $_POST['inOpening'];
$quote      =    $_POST['inQuote'];
$attrib     =    $_POST['inAttrib'];
$font1      =    $_POST['fonts1'];
$font2      =    $_POST['fonts2'];
$font3      =    $_POST['fonts3'];
$font4      =    $_POST['fonts4'];
$dateFr     =    $_POST['inFrDate'];
$dateTo     =    $_POST['inToDate'];
$textOffer1 =    $_POST['inOffer1'];
$addOffer1  =    $_POST['inAdditional1'];
$textOffer2 =    $_POST['inOffer2'];
$addOffer2  =    $_POST['inAdditional2'];
$qrSize     =    $_POST['inQrSize']; 
$qrData1    =    $_POST['inQrData1'];
$qrData2    =    $_POST['inQrData2'];

/* Checando os valores */
if($font1=="Sans"){
  $font1 = 'Questrial';
} else if($font1=="Serif"){
  $font1 = 'Oranienbaun';
} else if($font1=="Fancy"){
  $font1 = 'Dancing Script';
}

if($font2=="Sans"){
  $font2 = 'Questrial';
} else if($font2=="Serif"){
  $font2 = 'Oranienbaun';
} else if($font2=="Fancy"){
  $font2 = 'Dancing Script';
}

if($font3=="Sans"){
  $font3 = 'Questrial';
} else if($font3=="Serif"){
  $font3 = 'Oranienbaun';
} else if($font3=="Fancy"){
  $font3 = 'Dancing Script';
}

if($font4=="Sans"){
  $font4 = 'Questrial';
} else if($font4=="Serif"){
  $font4 = 'Oranienbaun';
} else if($font4=="Fancy"){
  $font4 = 'Dancing Script';
}

/* Aqui começa o gerador do perfil */
$strOut = 

'<html>'
'<head>'
'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'
'<style>'
'.card {'
' box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);'
' max-width: 300px;'
' margin: auto;'
' text-align: center;'
' font-family: arial;'
'}'

'.title {'
' color: grey;'
' font-size: 18px;'
'}'

'button {'
' border: none;'
' outline: 0;'
' display: inline-block;'
' padding: 8px;'
' color: white;'
' background-color: #000;'
' text-align: center;'
' cursor: pointer;'
' width: 100%;'
' font-size: 18px;'
'}'

'a {'
' text-decoration: none;'
' font-size: 22px;'
' color: black;'
'}'

'button:hover, a:hover {'
' opacity: 0.7;'
'}'
'</style>'
'</head>'
'<body>'

'<h2 style="text-align:center">Candidado a Vereador</h2>'

'<div class="card">'
' <img src="'. $bkgImg .'" alt="John" style="width:100%">'
' <h1>John Doe</h1>'
' <p class="title">CEO & Founder, Example</p>'
' <p>Harvard University</p>'
' <div style="margin: 24px 0;">'
'   <a href="#"><i class="fa fa-dribbble"></i></a>' 
'   <a href="#"><i class="fa fa-twitter"></i></a>'  
'   <a href="#"><i class="fa fa-linkedin"></i></a>'  
'   <a href="#"><i class="fa fa-facebook"></i></a>'
' </div>'
'  <p><button>Contact</button></p>'
'</div>'

'</body>'
'</html>'


?>