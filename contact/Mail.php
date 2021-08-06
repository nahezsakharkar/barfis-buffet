<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['msg'];
$sub= $_POST['sub'];
$to = "nahezsakharkar@gmail.com";
$subject = "Mail From Barfi's Buffet";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Subject =" . $sub;
$headers = "From: noreply@barfibuffet.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>