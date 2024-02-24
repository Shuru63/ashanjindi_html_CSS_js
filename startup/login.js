let signup=document.getElementById("inform");
let buttonup=document.getElementById("sign");
let loginbtn=document.getElementById("log");
function opensign(){
    signup.classList.add("open-sign");
    buttonup.classList.add("sign-off");
    loginbtn.classList.add("log-off");
   
}

function closesign(){
    signup.classList.remove("open-sign");
    buttonup.classList.remove("sign-off");
    loginbtn.classList.remove("log-off");
   
}

let login=document.getElementById("loginform");
let bottonin=document.getElementById("log");
let signupbtn=document.getElementById("sign");

function openlog(){
    login.classList.add("open-log");
    bottonin.classList.add("sign-off");
    signupbtn.classList.add("log-off");
}

function closelog(){
    login.classList.remove("open-log");
    bottonin.classList.remove("sign-off");
    signupbtn.classList.remove("log-off");
}
// form validation
let form=document.getElementById("form");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let number=document.getElementById("number");
let password=document.getElementById("password");
let zipcode=document.getElementById(" zipcode");
let logemail=document.getElementById("logemail");
let logpassword=document.getElementById("logpassword");
//  add event
form.addEventListener('submit',(event)=>{
event.preventDefault();
validate();
})
let isEmail=(emailvalue)=>{
    let atSymbol=emailvalue.indexOf("@");
    if(atSymbol<1) return false;
    let dot=emailvalue.lastIndexOf('.');
    if(dot<=atSymbol+2) return false;
    if(dot=emailvalue.length-1) return false;
    return true;
}
// define validate function
let validate=()=>{
let fnamevalue= fname.value.trim();
let lnamevalue= lname.value.trim();
let emailvalue= email.value.trim();
let numbervalue= number.value.trim();
let passwordvalue= password.value.trim();
// let zipcodevalue= zipcode.value.trim();
let logemailvalue= logemail.value.trim();
let logpasswordvalue= logpassword.value.trim();




// validtae username
if(fnamevalue=" "){
    setErrorMsg(fname,'fullname cannot be blank')
}
else if(fnamevalue.length<=2) {
    setErrorMsg(fname,'fullname minimum 3 char')
}
else{
    setSuccesMsg(fname)
}
// validtae username
if(lnamevalue=" "){
    setErrorMsg(lname,'fullname cannot be blank')
}
else if(lnamevalue.length<=2) {
    setErrorMsg(lname,'fullname minimum 3 char')
}
else{
    setSuccesMsg(lname)
}
// email
if(emailvalue=" "){
    setErrorMsg(email,'Email cannot be blank')
}
else if(!isEmail(emailvalue)) {
    setErrorMsg(email,'Email not valid')
}
else{
    setSuccesMsg(email)
}
// phone number
if(numbervalue=" "){
    setErrorMsg(number,'number cannot be blank')
}
else if(numbervalue.length<=9) {
    setErrorMsg(number,'number minimum 10 digit')
}
else{
    setSuccesMsg(number)
}
// password
if( passwordvalue=" "){
    setErrorMsg(password,'password cannot be blank')
}
else if( passwordvalue.length<=4) {
    setErrorMsg(password,'password too short')
}
else{
    setSuccesMsg(password)
}
// log in email
if(logemailvalue=" "){
    setErrorMsg(logemail,'Email cannot be blank')
}
else if(!isEmail(emailvalue)) {
    setErrorMsg(logemail,'Email not valid')
}
else{
    setSuccesMsg(logemail)
}
// log password
if(logpasswordvalue=" "){
    setErrorMsg(logpassword,'password cannot be blank')
}
else if( logpasswordvalue.length<=4) {
    setErrorMsg(logpassword,'password too short')
}
else{
    setSuccesMsg(logpassword)
}
}
function setErrorMsg(input,erroermsg){
    let formControl=input.parentElement;
    formControl.className="form-control error";
    let small=formControl.querySelector('small');
    small.innerText=erroermsg;
}