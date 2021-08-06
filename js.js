function admin(){
    password = 'barfiboi';
    var pass = prompt('Enter Admin Password. Password : barfiboi', '');
    if (pass == password){
        window.open("Contact/Admin/Admin.html", '_blank');
        return false;
    }
    else if (pass == null){
        return;
    }
    else {
        alert('Incorrect Admin Password');
        pw();
    }
}