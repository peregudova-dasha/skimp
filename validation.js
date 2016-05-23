function validateForm() {
  var name =  document.forms["contact_form"]["name"].value;
  var email =  document.forms["contact_form"]["email"].value;
  var dot = email.indexOf("@");
  var at = email.indexOf(".");
    
  
  if (name == null || name == ""  ) {   document.getElementById('name_false').innerHTML='*введите Вашe имя';
    return false;
  }
  
  if (email == null || email == "" ) {   document.getElementById('email_false').innerHTML='*введите Ваш email';
    return false;
  }

   if (dot < 0 || at < 0) 
  {  document.getElementById('email_false').innerHTML='*Вы ввели неправильный email';
    return false;
  }
  
   if (name == null || name == "" && email == null || email == "") {   document.getElementById('name_false').innerHTML='*введите Вашe имя';                                                          document.getElementById('email_false').innerHTML='*введите Ваш email';
    return false;
  } 
  
}
 

