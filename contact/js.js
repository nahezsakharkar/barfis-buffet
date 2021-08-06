document.getElementById("sendBut").disabled = true;
function validate(){
    var emailText = document.getElementById("cEmail").value;
    var nameText = document.getElementById("cName").value;
    if((nameText == '') && (emailText == ''))
    {
        alert("Please Enter Your Name And Email To Contact Barfi.");
    }
    else if(nameText == '')
    {
        alert("Please Enter Your Name To Contact Barfi.");
    }
    else if(emailText == '')
    {
        alert("Please Enter Your Email To Contact Barfi.");
    }
    else
    {
        document.getElementById("sendBut").disabled = false;
    }
}
// function contactInfo(){
//     var name = document.getElementById("cName").value;
//     var email = document.getElementById("cEmail").value;
//     var sub = document.getElementById("cSub").value;
//     localStorage.setItem("ContactName",name);
//     localStorage.setItem("ContactEmail",email);  
//     localStorage.setItem("ContactSub",sub);
//     document.getElementById("cName").value = "";
//     document.getElementById("cEmail").value = "";
//     document.getElementById("cSub").value = "";
//     document.getElementById("cMsg").value = "";
// }
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('sent');
    popup.classList.toggle('active');
}