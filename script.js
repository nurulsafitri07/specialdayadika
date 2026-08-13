// ===== Opening page =====
const openBtn = document.getElementById('openBtn');
const opening = document.getElementById('opening');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('bgMusic');

if(openBtn){
  openBtn.addEventListener('click', async () => {
    opening.style.display = 'none';
    mainContent.classList.remove('hidden');
    try{ await music.play(); }catch(e){}
  });
}

// ===== Countdown =====
// GANTI TANGGAL ULANG TAHUN DI SINI
const birthday = new Date('2026-08-13T00:00:00');

function updateCountdown(){
  const now = new Date();
  const diff = birthday - now;

  const days = Math.max(0, Math.floor(diff/(1000*60*60*24)));
  const hours = Math.max(0, Math.floor((diff/(1000*60*60))%24));
  const minutes = Math.max(0, Math.floor((diff/(1000*60))%60));
  const seconds = Math.max(0, Math.floor((diff/1000)%60));

  const d = document.getElementById('days');
  const h = document.getElementById('hours');
  const m = document.getElementById('minutes');
  const s = document.getElementById('seconds');

  if(d) d.textContent = days;
  if(h) h.textContent = hours;
  if(m) m.textContent = minutes;
  if(s) s.textContent = seconds;
}
updateCountdown();
setInterval(updateCountdown,1000);

// ===== Accordion (buka satu-satu) =====
const acc = document.querySelectorAll('.accordion');
acc.forEach((btn,index)=>{
  const panel = btn.nextElementSibling;
  if(index===0 && panel) panel.classList.add('open');

  btn.addEventListener('click',()=>{
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('open'));
    if(panel) panel.classList.add('open');
  });
});

// ===== Floating hearts =====
const hearts = document.querySelector('.hearts');
function createHeart(){
  if(!hearts) return;
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💗';
  heart.style.left = Math.random()*100 + '%';
  heart.style.fontSize = (Math.random()*18 + 16) + 'px';
  heart.style.animationDuration = (Math.random()*4 + 6) + 's';
  hearts.appendChild(heart);
  setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,500);
