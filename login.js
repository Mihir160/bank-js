
//step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step:2 get the email address inside the email input field
    //always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //  console.log(email);
    //step3:get password
    //3.a:set id on the html element
    //3.b: get the element
    //3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    //DANGER: Do Not verify email password on the client side
    //step:4 verify email and password
    if(email === 'mihir.roy266@gmail.com' && password ==='12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invaild user')
    }
})