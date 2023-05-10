<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email settings
    $to = 'youremail@example.com';
    $subject = 'New Message From Portfolio Website';
    $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Email content
    $email_content = 'Name: ' . $name . "\r\n" .
        'Email: ' . $email . "\r\n" .
        'Message: ' . $message;

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}

?>
