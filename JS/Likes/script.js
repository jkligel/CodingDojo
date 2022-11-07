let likeButtons = document.querySelectorAll(".like-btn");
let counters = document.querySelectorAll(".likes > span");
let likeElements = document.querySelectorAll(".likes");

for(let i = 0; i < likeButtons.length; ++i){
    likeButtons[i].onclick = function(){
        ++counters[i];
        likeElements[i].innerText = ++(counters[i].innerText) + " like(s)";
    }
}