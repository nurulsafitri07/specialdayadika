const birthday=new Date('2026-08-13T00:00:00');
function updateCountdown(){
 const now=new Date(),diff=birthday-now;
 const vals=[
  Math.max(0,Math.floor(diff/86400000)),
  Math.max(0,Math.floor(diff/3600000)%24),
  Math.max(0,Math.floor(diff/60000)%60),
  Math.max(0,Math.floor(diff/1000)%60)
 ];
 ['days','hours','minutes','seconds'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=vals[i];});
}
setInterval(updateCountdown,1000);updateCountdown();

document.querySelectorAll('.accordion').forEach(btn=>{
 btn.addEventListener('click',()=>{
  const panel=btn.nextElementSibling;
  document.querySelectorAll('.panel').forEach(p=>{if(p!==panel)p.classList.remove('open');});
  panel.classList.toggle('open');
 });
});
