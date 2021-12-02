for (var i = 0; i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var sounds = this.innerHTML;
    console.log(sounds);
    handleClick(sounds);
} );
}
var obj = {
    "B": "sounds/tom-1.mp3",
    "H": "sounds/tom-2.mp3",
    "A": "sounds/tom-3.mp3",
    "J": "sounds/tom-4.mp3",
    "A": "sounds/snare.mp3",
    "'": "sounds/crash.mp3",
    "S": "sounds/kick-bass.mp3"
}
const audio = new Audio("sounds/tom-1.mp3")
const audio1 = new Audio("sounds/kick-bass.mp3")
function handleClick(sounds){
    let audio = new Audio(obj[sounds]);
    audio.play();
}