// Data Initialization
let donateBtn = document.querySelector("#donate-button");
let petBtns = document.querySelectorAll(".pet-button");
let petSelection = document.querySelector("#pet-selection");

// Donate Button Click Functionality

donateBtn.onclick = function(){
    let navLinksElem = document.querySelector("#nav-links")
    navLinksElem.style.width = "25%";
    this.parentElement.remove();
}

// Pet Buttons Click Functionality

function getPettingsNum(element){
    try{
        let matches = element.innerText.match(/(\d+)/);
        return matches[0];
    } catch(exception) {
        console.log(exception);
        console.log("Please use the correct element");
    }
}

for(let i = 0; i < petBtns.length; ++i){
    petBtns[i].onclick = function(){
        let pettingsTextElem = this.previousElementSibling;
        let pettingsNum = getPettingsNum(pettingsTextElem);
        pettingsNum++;
        pettingsTextElem.innerText = pettingsNum + " petting(s)"
    }
}

// Pet Selection Functionality

petSelection.onchange = function(){
    window.alert("You are looking for a: \n" + this.options[this.selectedIndex].innerText)
}