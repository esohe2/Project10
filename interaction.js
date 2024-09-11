const loginpage = document.querySelector('.loginpage');
const profile = document.querySelector('.profile');
const emailText = document.querySelector('.email-field');
const emailError = document.querySelector('.error');
const userName = document.querySelector('.username');
const helloBtn = document.querySelector('#hello');
let myUserName = document.querySelector('.myName');
let myMail = document.querySelector('.mail');
const uname = document.querySelector('.name')

helloBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let userText = userName.value;
    let validate = userText.length < 1 || userText == " " || userText == null
    result = emailText.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if (validate) {
        loginpage.style.display = 'flex';
        profile.style.display = 'none';
        uname.innerHTML = 'Input a username';
    } 
    // if (result) {
    //     loginpage.style.display = 'flex';
    //     profile.style.display = 'none';
    //     emailError.innerHTML = 'Input a valid email';
    // }
    // else {
    //     loginpage.style.display = 'none';
    //     profile.style.display = 'flex';
    //     myUserName.innerHTML = userName.value
    //     myMail.innerHTML = emailText.value
    // }

    if(result){
        loginpage.style.display = 'none';
        profile.style.display = 'flex';
        myUserName.innerHTML = userName.value
        myMail.innerHTML = emailText.value
    }else{
        loginpage.style.display = 'flex';
        profile.style.display = 'none';
        emailError.innerHTML = 'Input a valid email'
    }

})