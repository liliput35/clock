
setInterval(()=>{
    const time = document.getElementById('maintime');
    let date = new Date
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let daynight = 'AM';
    
    if(hours > 12){
        daynight = 'PM'
        hours = hours - 12;
    }
    if(hours === 12 && minutes > 0){
        daynight = 'PM'
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }
    

    time.textContent = hours + ':' + minutes + ':' + seconds ;
    time.innerHTML += `<span id="ampm"> ${daynight}</span>`;

})

const bluebtn = document.querySelector('#blue');
const greenbtn = document.querySelector('#green');
const redbtn = document.querySelector('#red');
const graybtn = document.querySelector('#gray');
const body = document.querySelector('body')

bluebtn.addEventListener('click', changeBg)
greenbtn.addEventListener('click', changeBgg)
redbtn.addEventListener('click', changeBgr)
graybtn.addEventListener('click', changeBggr)

function changeBg(){
   body.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
}
function changeBgg(){
   body.style.background = 'linear-gradient(90deg, rgba(16,99,9,1) 0%, rgba(28,136,64,1) 35%, rgba(77,208,198,1) 100%)'
}
function changeBgr(){
   body.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
}
function changeBggr(){
   body.style.background = '#1e1e1e'
}


const buttonContainer = document.querySelector('.secondcontainer')
let buttons = document.querySelector('.buttoncontainer')
const arrow = document.querySelector('#arrow')
const arrowExit = document.querySelector('#arrow1')


function togglemenu(){
    buttons.style.display = 'block';
    arrow.style.display = 'none'
    arrowExit.style.display = 'block'
}


function closemenu(){
    buttons.style.display = 'none';
    arrowExit.style.display = 'none'
    arrow.style.display = 'block'
}