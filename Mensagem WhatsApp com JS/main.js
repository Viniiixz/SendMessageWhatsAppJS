function Enviar() {
 
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    var fone = document.getElementById("foneid");
    var mensagem = document.getElementById("msgid");


    /*Coloque seu número na váriavel num*/
    var num = "coloque seu número aqui";

   
   
    if (nome.value != "" && email.value != "") {
        window.open('https://wa.me/'+num+'?text=*Olá,%20eu%20sou:*%20'+nome.value + '%20*Email:*%20' + email.value + '%20*Telefone:*%20' + fone.value + '%20*Mensagem:*%20'+ mensagem.value);
    }
    else{
        document.getElementById('nomeid').value='';
        document.getElementById('emailid').value='';
        document.getElementById('foneid').value='';
        document.getElementById('msgid').value='';

        
        

        alert("Erro! Preencha novamente!");
    }
   
   }