const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
let timerId = null;


startBtn.addEventListener('click',getRandomBodyColor );
stoptBtn.addEventListener('click' , removeRandomBodyColor);
stoptBtn.disabled = true;




function getRandomBodyColor (){

    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    } , 1000)
    startBtn.disabled = true;
    stoptBtn.disabled = false;


}


function removeRandomBodyColor (){
 clearInterval(timerId);
 startBtn.disabled = false;
 stoptBtn.disabled = true;

}











function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
