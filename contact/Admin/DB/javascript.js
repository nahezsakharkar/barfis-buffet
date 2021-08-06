var name = localStorage.getItem('ContactName');
var email = localStorage.getItem('ContactEmail');
var sub = localStorage.getItem('ContactSub');
document.getElementById("pName").value = name;
document.getElementById("pEmail").value = email;
document.getElementById("pSub").value = sub;
var resetValue = "";
localStorage.setItem("ContactName",resetValue);
localStorage.setItem("ContactEmail",resetValue);  
localStorage.setItem("ContactSub",resetValue);

