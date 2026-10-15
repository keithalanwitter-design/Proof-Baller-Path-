/* PROOF — interactions */
(function(){
  "use strict";

  /* ---- nav scroll state + mobile menu ---- */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  function onScroll(){ nav.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open'); links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
  });

  /* ---- scroll reveals (staggered) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  revealEls.forEach(function(el, i){
    // subtle stagger for siblings
    var siblings = Array.prototype.slice.call(el.parentNode.children)
      .filter(function(c){ return c.classList && c.classList.contains('reveal'); });
    var idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = Math.min(idx * 90, 360) + 'ms';
  });
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('visible'); });
  }

  /* ---- animated counters ---- */
  function animateCount(el){
    var target = parseInt(el.getAttribute('data-count'), 10);
    var dur = 1300, start = null;
    function frame(t){
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll('.stat-num[data-count]');
  if ('IntersectionObserver' in window){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); }
      });
    }, {threshold:.4});
    counters.forEach(function(c){ cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- the weekly loop tabs ---- */
  var steps = [
    {
      title: "The week\u2019s work, designed.",
      body: "Varied, game-like assignments \u2014 about 20 minutes a day, calibrated to your player and load-managed. Not \u201cgo shoot 100 free throws.\u201d Designed work that transfers."
    },
    {
      title: "Proof of work, not promises.",
      body: "Midweek, your player sends a 30-second clip by text. No app to install, no login to remember. The work either happened or it didn\u2019t \u2014 and now there\u2019s proof."
    },
    {
      title: "The 1\u20132 things that matter.",
      body: "The coach responds with timestamped feedback on the key errors in the clip \u2014 bandwidth-style. Targeted correction beats every-rep nagging: for learning, and for surviving at 36 players."
    },
    {
      title: "The black box, opened.",
      body: "Sunday, you get the report: assigned, done, feedback given, next week. You\u2019ll never again wonder \u201cis this working?\u201d \u2014 you\u2019ll have the receipt."
    }
  ];
  var tabBtns = document.querySelectorAll('.loop-step');
  var loopTitle = document.getElementById('loopTitle');
  var loopBody = document.getElementById('loopBody');
  var loopDetail = document.getElementById('loopDetail');
  tabBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var i = parseInt(btn.getAttribute('data-step'), 10);
      tabBtns.forEach(function(b){
        b.classList.remove('active');
        b.setAttribute('aria-selected','false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      // quick fade swap
      loopDetail.style.opacity = '0';
      loopDetail.style.transform = 'translateY(8px)';
      setTimeout(function(){
        loopTitle.textContent = steps[i].title;
        loopBody.textContent = steps[i].body;
        loopDetail.style.transition = 'opacity .25s ease, transform .25s ease';
        loopDetail.style.opacity = '1';
        loopDetail.style.transform = 'none';
      }, 160);
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(other){
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
        other.querySelector('.faq-q').setAttribute('aria-expanded','false');
      });
      if (!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded','true');
      }
    });
  });
})();
