function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]')
  }
refs.buttonStart.addEventListener('click',onClickBtnStart)
refs.buttonStop.addEventListener('click',onClickBtnStop)

let timerId = null;
function onClickBtnStart  (e) {
    timerId = setInterval(()=>{
    refs.body.style.backgroundColor = getRandomHexColor()
    },1000)

    refs.buttonStart.disabled = true;

     
}

function onClickBtnStop(e) {
  clearInterval(timerId)
  refs.buttonStart.disabled = false;
  
}