<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

parse_str($_SERVER['QUERY_STRING'], $output);
$name = htmlspecialchars($output['name']);
$email = htmlspecialchars($output['email']);
$comment = htmlspecialchars($output['comment']);
$pathname = htmlspecialchars($output['pathname']);
$name = urldecode($name);
$email = urldecode($email);
$comment = urldecode($comment);
$pathname = urldecode($pathname);
$name = trim($name);
$email = trim($email);
$comment = trim($comment);
$pathname = trim($pathname);
$mailText = "Получен новый лид с сайта urman.su\n\nИмя лида: ".$name."\nКонтакт: ".$email."\nКоммент: ".$comment."\nЦелевая страница: ".$pathname;
echo $mailText;

if (mail("proekt@urman.su", "Заявка с сайта", $mailText ,"From: direktor@urman.su \r\n"))
 {     echo "\n\nСообщение успешно отправлено"; 
} else { 
    echo "\n\nПри отправке сообщения возникли ошибки";
}

?>