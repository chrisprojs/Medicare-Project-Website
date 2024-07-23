function regvalidate(){
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    let email = document.getElementById('email').value;

    if(password.length>=8 && password.search(/[0-9]/) != -1 && (password.search(/[a-z]/)!=-1 || password.search(/[A-Z]/) != -1)){
        alert("Hello " + email);
    }
    else{
        alert("Please make password minimum 8 characters atleast 1 numberic character and 1 alphabetic character");
    }
}