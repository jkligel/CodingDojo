console.log("page loaded...");

let nameHeader = document.querySelector("#name");
let edit = document.querySelector("#edit");
let cardListIcon = document.querySelectorAll(".card-list-item .icon");
let acceptIcons = document.querySelectorAll(".card-list-item .icon[alt='accept']");
let close = document.querySelector(".card-list-item .icon[alt='close']");
let connectionsCounter = document.querySelector("#conn-badge");
let connCounter = connectionsCounter.innerText.slice(0, -1);

edit.onclick = function(){
    let input = window.prompt("Enter the full name here:");
    nameHeader.innerText = input;
}

for(let i = 0; i < cardListIcon.length; ++i){
    cardListIcon[i].onclick = function(){

        for(element of acceptIcons){
            if(this == element){
                connectionsCounter.innerText = ++connCounter + "+";
            }
        }

        connectionsCounter.innerText = --connCounter + "+"        
        this.parentElement.parentElement.remove();
    }
}