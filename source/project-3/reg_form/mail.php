<?php

   $name = $_POST['name']; 
   $email = $_POST['email'];
   $country = $_POST['country'];
   $phone = $_POST['phone']; 
   $message = $_POST['message']; 

   $subject = "=?utf-8?B?".base64_encode("VENTURION - Повідомлення від клієнта!")."?=";
   $headers = "From: Venturion-Client\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

   $message = "Ім'я:".$name."\r\n"."<br> Email: ".$email."\r\n"."<br> Країна: ".$country."\r\n"."<br> Телефон: ".$phone."\r\n"."<br> Деталі заявки: <br>".$message."\r\n";
   $to = 'venturionlawyer@gmail.com';

   $success = mail($to, $subject, $message, $headers);
   echo $success;

?>