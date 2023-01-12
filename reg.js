function validateForm() {
var Firstname = document.myform.firstname.value;
var Lastname = document.myform.lastname.value;
var Email = document.myform.email.value;
var Mobile = document.myform.mobile.value;
var Gender = document.myform.male.value;
var Gender = document.myform.female.value;
var Password = document.myform.pwd.value;
var Confimpassword = document.myform.cpwd.value;

//cheking the inputs 
if(Firstname == "" || Firstname == null){
    alert("Please enter your first name");
    return false;
}
if(!isNaN(Firstname)){
    alert("Please use alphabets for yor fitst name");
    return false;
}

if(Lastname == "" || Lastname == null){
    alert("Please enter your last name");
    return false;
}
if(!isNaN(Lastname)){
    alert("Please use alphabets for yor last name");
    return false;
}

if(Email == "" || Email == null){
    alert("Please enter your email");
    return false;
}

}