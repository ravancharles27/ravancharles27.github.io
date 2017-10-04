function phonenumber()  
{  
  var phoneno = /^\d{10}$/;  
  if((inputtxt.value.match(phoneno))  
        ){
      return true;  
        }  
      else
        {  
        alert("Sorry, incorrect format.");  
        return false;  
        } }
