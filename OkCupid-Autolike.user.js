// ==UserScript==
// Radom Liker for Okcupied
// Made by CombinE88 & Pr0xy-F0x

while(true){
    var desktopButton = document.getElementsByClassName("dt-action-buttons-button like")[0];
    (desktopButton).click();
    await new Promise(r => setTimeout(r, getRandomNumber()));

}

function getRandomNumber(){
    var multiplicator = Math.random()*3000;
    var number = Math.random();
    var outPut = Math.ceil(number*multiplicator);
    return outPut;
}
