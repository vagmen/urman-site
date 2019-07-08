<?php

// header('Content-type: application/json');
header('Content-Type: text/html; charset=utf-8');              
header('Access-Control-Allow-Origin: *');

$mailTo = 'vagmen27@gmail.com';
// $mailTo = 'request-site@urman.planfix.ru';
$mailFrom = 'direktor@urman.su';

parse_str($_SERVER['QUERY_STRING'], $output);
$name = htmlspecialchars($output['name']);
$phone = htmlspecialchars($output['phone']);
$email = htmlspecialchars($output['email']);
$comment = htmlspecialchars($output['comment']);
$pathname = htmlspecialchars($output['pathname']);
$formName = htmlspecialchars($output['formName']);
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$comment = urldecode($comment);
$pathname = urldecode($pathname);
$formName = urldecode($formName);
$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$comment = trim($comment);
$pathname = trim($pathname);
$formName = trim($formName);
$mailText = "Имя лида: ".$name."\nТелефон: ".$phone."\nEmail: ".$email."\nКоммент: ".$comment."\nЦелевая страница: ".$pathname."\nФорма: ".$formName;

$headers = "MIME-Version: 1.0\r\n";
$headers.= "From: direktor@urman.su\r\n";
$headers.= "Content-Type: text/plain;charset=utf-8\r\n";
$headers.= "X-Mailer: PHP/" . phpversion();
echo "234";




if (mail( "request-site@urman.planfix.ru", "Заявка с сайта", mb_convert_encoding($mailText, "UTF-8") ,$headers)){
  echo "\n\nСообщение успешно отправлено"; 
} else { 
    echo "\n\nПри отправке сообщения возникли ошибки";
}
$mailText = '';
// return 'true';

?>