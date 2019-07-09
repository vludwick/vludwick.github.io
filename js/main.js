$(document).ready(function(){
  
    $("#login").submit(function(event){
      if($("#user").val() == "nanessinha" && $("#password").val() == "10/04"){
        alert("Te amo");
        event.preventDefault();
        $("#link").html("<a href='/login2.html'>Clique aqui para seguir para a outra página</a>");
        
      }
      else{
        alert("Login e/ou senha incorreta");
      }
    });
  });