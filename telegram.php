<?php

/* https://api.telegram.org/bot1628387195:AAHJ1znNTLQmvn-9eTH6mr3Frs3IzkiODNY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы

session_start();


$name = $_POST['name']; 
$phone = $_POST['tel'];
$email = $_POST['email'];
$body = $_POST['body'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6273911916:AAHLTx2Uksi7CCSWjrh5VCtje05i48DeYpg";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-691194021";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'email:' => $email,
  'Telegram:' => $body
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//https://api.telegram.org/bot6273911916:AAHLTx2Uksi7CCSWjrh5VCtje05i48DeYpg/sendMessage?chat_id=-691194021&parse_mode=html&text=sfsdfsf

//Осуществляется отправка данных в переменной $sendToTelegram
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $url = $GLOBALS["website"]."/sendMessage?chat_id=".$chat_id."&text=".urlencode($msg);

header("Location: https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");

//header("Location: https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id2}&parse_mode=html&text={$txt}");


//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if (5==3) {
  echo "Thank you";
} else {
  echo "Error";
}
?>