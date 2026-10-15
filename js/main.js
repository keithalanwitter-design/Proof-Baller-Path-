/* BALLER PATH · PROOF INSIDE — interactions */
(function(){
  "use strict";

  /* scroll reveals (also triggers transfer bars via .in) */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* loop demo tabs */
  var tabs = document.querySelectorAll('.loop-tab');
  var panels = document.querySelectorAll('.loop-panel');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      var day = tab.getAttribute('data-day');
      tabs.forEach(function(t){ t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      panels.forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      var panel = document.querySelector('.loop-panel[data-panel="'+day+'"]');
      if(panel){ panel.classList.add('active'); }
    });
  });
  /* auto-advance the loop demo until the user interacts */
  var autoIdx = 0, autoTimer = null, userTouched = false;
  function autoAdvance(){
    if(userTouched || document.hidden) return;
    autoIdx = (autoIdx + 1) % tabs.length;
    tabs[autoIdx].click();
  }
  document.querySelector('.loop-demo').addEventListener('pointerdown', function(){
    userTouched = true; if(autoTimer) clearInterval(autoTimer);
  }, {once:true});
  autoTimer = setInterval(autoAdvance, 5000);

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q'), a = item.querySelector('.faq-a');
    q.addEventListener('click', function(){
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){
        o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!open){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  /* smooth anchor offset for fixed nav */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(ev){
      var t = document.querySelector(a.getAttribute('href'));
      if(!t) return;
      ev.preventDefault();
      window.scrollTo({top: t.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth'});
    });
  });
})();
