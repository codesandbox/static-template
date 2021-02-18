<?php
use PHPMailer\PHPMailer\PHPMailer;
if (isiswet($_POST['name'])&& isset($_POST['email'])){
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject']
$body = $_POST['body'];

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$mail = new PHPMailer();

//smtp settings
$mail-> isSMTP();
$mail-> host = "smtp.ionos.co.uk"
$mail-> SMTPAuth = true;
$mail-> Username = "success@dougzybuydesign.co.uk";
$mail-> Password = "Fear821ape490@"
$mail-> Port = 587;
$email-> SMTPSecure = "ssl"


//email settings
$email-> isHTML(true);
$email-> setForm($email. $name);
$email->addAddress("success@dougzybuydesign.co.uk");
$mail->Body = $body;


if ($mail->send()){
$status = "success";
$response  = "Email is sent";
}
else
}
   $status
   }
$response = "Something is wrong: " . $mail->ErrorInfo;
  }
exit(json_encode(array("status" => $status,"response" => $response))));
?>