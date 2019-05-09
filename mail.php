<?php
require_once './PHPMailer/PHPMailerAutoload.php';
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = "ssl://smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "tolevelhost@gmail.com";
$mail->Password = "543bf72a1";

// От кого
$mail->setFrom('tolevelhost@gmail.com', 'sepayr.ru');

// Кому
$mail->addAddress('info@sepayr.ru', 'Павел Александрин');

// Тема письма
$mail->Subject = 'Заказ услуги с сайта Sepayr.ru';

// Тело письма
$body = 'Пользователь оставил заявку <br>
      Имя: ' . $name . ', <br>
      Телефон: ' . $phone;
$mail->msgHTML($body);

// Приложение
$mail->addAttachment(__DIR__ . '/image.jpg');

if (!$mail->send()) {
  return false;
} else {
  return true;
}
