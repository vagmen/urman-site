<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

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
echo $mailText;

if (mail("request-site@urman.planfix.ru", "Заявка с сайта", $mailText ,"From: direktor@urman.su \r\n"))
 {     echo "\n\nСообщение успешно отправлено"; 
} else { 
    echo "\n\nПри отправке сообщения возникли ошибки";
}

?>