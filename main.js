document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === "mohon@gmail.com" && password == "mohon"){
        window.location.href = 'bank.html';
    }

    else{
        alert("Invaild. Try Again!!!");
    }
})


