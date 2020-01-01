function password() {
    var count = 1;
    var pass1 = prompt('Password:',' ');
    //change to your password
    var password = "thisisnotsecure"
    //max attempts
    var maxattempt = 4
     
    while (count < 4) {
    if (!pass1)
    history.go(-1);
    if (pass1.toLowerCase() == password) {
    alert('Entering Next Page');
    window.open('preview.html');
    break;
    }
    count+=1;
    var pass1 =
    prompt('Access Denied - Password Incorrect, Please Try Again.');
    }
     
    if(count == maxattempt)
    {
    alert("Attempted 4 times")
    }
}

