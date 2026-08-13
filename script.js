// OPENING
const openBtn=document.getElementById('openBtn');
const opening=document.getElementById('opening');
const mainContent=document.getElementById('mainContent');
const music=document.getElementById('bgMusic');

if(openBtn){
openBtn.addEventListener('click',async()=>{
opening.style.display='none';
mainContent.classList.remove('hidden');
try{
await music.play();
}catch(e){}
});
}

// COUNTDOWN
const birthday=new Date('2026-08-13T00:00:00');

function updateCountdown(){

const now=new Date();
const diff=birthday-now;

const days=Math.max(0,Math.floor(diff/(1000*60*60*24)));
const hours=Math.max(0,Math.floor((diff/(1000*60*60))%24));
const minutes=Math.max(0,Math.floor((diff/(1000*60))%60));
const seconds=Math.max(0,Math.floor((diff/1000)%60));

document.getElementById('days').textContent=days;
document.getElementById('hours').textContent=hours;
document.getElementById('minutes').textContent=minutes;
document.getElementById('seconds').textContent=seconds;

}

updateCountdown();
setInterval(updateCountdown,1000);

// ACCORDION (SATU CARD TERBUKA)
const accordions=document.querySelectorAll('.accordion');

accordions.forEach(button=>{

button.addEventListener('click',()=>{

const panel=button.nextElementSibling;

document.querySelectorAll('.panel').forEach(p=>{
if(p!==panel){
p.classList.remove('open');
}
});

panel.classList.toggle('open');

});

});

// HEARTS
const hearts=document.querySelector('.hearts');

function createHeart(){

const heart=document.createElement('div');

heart.className='heart';
heart.innerHTML='♡';

heart.style.left=Math.random()*100+'%';
heart.style.fontSize=(Math.random()*20+18)+'px';
heart.style.animationDuration=(Math.random()*4+6)+'s';

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,700);
