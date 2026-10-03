const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const nav=$('#nav');window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50));
const menu=$('#mobileMenu');$('#menuBtn').onclick=()=>menu.classList.toggle('open');$$('.mobile-nav a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
$$('.filter').forEach(btn=>btn.onclick=()=>{ $$('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;$$('.destination').forEach(c=>c.style.display=f==='all'||c.dataset.region===f?'block':'none'); });
$$('.heart').forEach(b=>b.onclick=e=>{e.stopPropagation();b.classList.toggle('loved');b.textContent=b.classList.contains('loved')?'♥':'♡';});
const searchModal=$('#searchModal');$('#searchOpen').onclick=()=>searchModal.classList.add('open');$('#searchClose').onclick=()=>searchModal.classList.remove('open');searchModal.querySelector('.backdrop').onclick=()=>searchModal.classList.remove('open');
$$('.chips button').forEach(b=>b.onclick=()=>$('#modalSearch').value=b.dataset.query);
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function search(q){if(!q.trim())return toast('Type a destination to discover ✦');searchModal.classList.remove('open');$('#destinationInput').value=q;$('#destinations').scrollIntoView({behavior:'smooth'});toast(`Discovering sacred places for “${q}” ✦`)}
$('#modalSearchBtn').onclick=()=>search($('#modalSearch').value);$('#searchBtn').onclick=()=>search($('#destinationInput').value||'India');$('#destinationInput').onkeydown=e=>{if(e.key==='Enter')search(e.target.value)};
const booking=$('#bookingModal');$$('.book-btn').forEach(b=>b.onclick=()=>{$('#bookingTitle').textContent=b.dataset.package;booking.classList.add('open')});$('#bookingClose').onclick=()=>booking.classList.remove('open');booking.querySelector('.backdrop').onclick=()=>booking.classList.remove('open');$('#submitBooking').onclick=()=>{booking.classList.remove('open');toast('Journey request received — Aaradhya will take it from here ✦')};
const slider=$('#storySlider');$('#nextStory').onclick=()=>slider.scrollBy({left:slider.clientWidth*.85,behavior:'smooth'});$('#prevStory').onclick=()=>slider.scrollBy({left:-slider.clientWidth*.85,behavior:'smooth'});$('#storyBtn').onclick=()=>toast('Aaradhya story film coming soon ✦');
window.onkeydown=e=>{if(e.key==='Escape'){searchModal.classList.remove('open');booking.classList.remove('open')}};
