/* ===== GRUPO STERK — Shared JS ===== */

// Scroll Reveal
function initReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})
  },{threshold:.08,rootMargin:'-30px'});
  document.querySelectorAll('.sr:not(.visible)').forEach(el=>obs.observe(el));
}

// Navbar scroll (only on home with transparent nav)
function initNavScroll(){
  const nav=document.getElementById('navbar');
  const logo=document.getElementById('nav-logo');
  if(!nav||nav.classList.contains('nav--solid'))return;
  window.addEventListener('scroll',()=>{
    if(window.scrollY>60){
      nav.classList.add('scrolled');
      if(logo)logo.src='/web-assets/Logo_Color.svg';
    }else{
      nav.classList.remove('scrolled');
      if(logo)logo.src='/web-assets/Logo_Blanco.svg';
    }
  },{passive:true});
}

// Mobile menu
function initMobile(){
  const toggle=document.getElementById('mobile-toggle');
  const menu=document.getElementById('mobile-menu');
  const close=document.getElementById('mobile-close');
  if(!toggle||!menu)return;
  toggle.addEventListener('click',()=>menu.classList.add('open'));
  if(close)close.addEventListener('click',()=>menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
}

// FAQ accordion
function initFAQ(){
  document.querySelectorAll('.faq__q').forEach(q=>{
    q.addEventListener('click',()=>q.closest('.faq__item').classList.toggle('open'));
  });
}

// Init
document.addEventListener('DOMContentLoaded',()=>{
  initReveal();
  initNavScroll();
  initMobile();
  initFAQ();
});
