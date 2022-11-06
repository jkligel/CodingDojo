// Data Initialization

let loginBtn = document.getElementById("login-btn");
let addDefBtn = document.getElementById("add-def-btn");
let likeBtns = document.getElementsByClassName("likes-btn");

// Actions

loginBtn.onclick = function() {
    this.innerText = "Logout";
}

addDefBtn.onclick = function() {
    this.remove();
}

for(let i = 0; i < likeBtns.length; ++i){
    likeBtns[i].onclick = () => {
        window.alert("Ninja was liked");
    };
}