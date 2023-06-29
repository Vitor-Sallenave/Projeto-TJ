<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

     // verificaçao se a variavel foi setada

$none = addslashes($_POST['name']); // pegando o mesmo nome das variaveis selecionadas no contact-us.html
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mesage']);



$to ="vitormilome@gmail.com"; // para quem será enviado os dados do usuário
$subject = "Contato - vitormilome" // assunto
$body = "Nome: ".$nome. "\n" // corpo da mensagem
        "Email: ".$email. "\n"
        "mensagem": $mensagem;
$header ="From: tejedor@gmail.com","\r\n"
."Reply-To:".$email."\r\n" // resposta ao email do usuário
."X-Mailer: PHP/".phpversion(); // informara a versao atual do php 
if(mail($to,$subject,$body,$header)){
    echo("Email enviado com sucesso!");
}
else{
    echp("ocorreu um erro com o envio do e-mail");
}


}
?>