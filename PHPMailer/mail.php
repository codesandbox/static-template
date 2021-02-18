<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['emailaddress'];
$message= $_POST['message'];
$number= $_POST['message'];
$to = "success@dougzybuydesign.co.uk";
$subject = "Mail From DougzyBuyDesign";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message ."\r\n Mobile number =". $number;
$headers = "From: noreply@dougzybuydesign.co.uk . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>