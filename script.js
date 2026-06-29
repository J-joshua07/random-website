console.log("script loaded");

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

async function createAccount(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("pass").value;

let confirmPassword =
document.getElementById("confirm").value;

if(email=="" || password==""){
alert("Fill all details ❌");
return;
}

if(password!==confirmPassword){
alert("Password not matching ❌");
return;
}

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

showToast("Account Created Successfully 🔥");

setTimeout(() => {

    window.location.href = "index.html";

}, 1500);

}
catch(error){

alert(error.message);

}

}





async function login(){

    console.log("Login button clicked");

let email =
document.getElementById("loginUser").value;

let password =
document.getElementById("loginPass").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

showToast("Login Successful 🔥");

setTimeout(() => {

    window.location.href = "home.html";

}, 1500);
}
catch(error){

    console.log(error);

    showToast(error.message,"#d50000");

}


}

async function logout(){

    await signOut(auth);

    showToast("Logged out successfully 👋");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1500);

}


function toggleMode(){


document.body.classList.toggle("dark");


let mode =
document.body.classList.contains("dark")
? "dark"
: "light";


localStorage.setItem("mode",mode);



let btn =
document.getElementById("modeBtn");


if(mode=="dark"){

btn.innerHTML="☀️ Light";

}

else{

btn.innerHTML="🌙 Dark";

}


}



window.onload=function(){


let savedMode =
localStorage.getItem("mode");


if(savedMode=="dark"){

document.body.classList.add("dark");


let btn =
document.getElementById("modeBtn");


if(btn){

btn.innerHTML="☀️ Light";

}

}


}

function loadProfile(){


let user =
JSON.parse(localStorage.getItem("userData"));



if(user){


document.getElementById("pUser").innerHTML =
user.username;


document.getElementById("pDob").innerHTML =
user.dob;


document.getElementById("pContact").innerHTML =
user.contact;


}



}





function editProfile(){


let user =
JSON.parse(localStorage.getItem("userData"));



let newName =
prompt(
"Enter new username",
user.username
);



let newContact =
prompt(
"Enter new contact",
user.contact
);



if(newName && newContact){


user.username=newName;

user.contact=newContact;



localStorage.setItem(
"userData",
JSON.stringify(user)
);



localStorage.setItem(
"loginUser",
newName
);



alert("Profile Updated 🔥");


location.reload();


}


}

window.createAccount = createAccount;
window.login = login;

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("createBtn");

  if(btn){
    btn.addEventListener("click", createAccount);
  }

});

window.createAccount = createAccount;
window.login = login;

window.createAccount = createAccount;
window.login = login;
window.toggleMode = toggleMode;
window.logout = logout;

window.toggleMode = toggleMode;
window.logout = logout;


onAuthStateChanged(auth, (user) => {

    if(user){

        let userSpan = document.getElementById("user");

        if(userSpan){

            let username = user.email.split("@")[0];

            userSpan.innerHTML = username;

        }

    }

});

function showToast(message,color="#00c853"){

    let toast = document.getElementById("toast");

    if(!toast){
        alert(message);
        return;
    }

    toast.innerHTML = message;
    toast.style.background = color;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    },3000);

}