/* Keystone — app.js */
(function(){
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* menu */
var nav=document.getElementById('navigation'),mb=document.querySelector('.menu');
if(nav&&mb){
 var x=nav.querySelector('.x');
 function setNav(o){nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
 mb.addEventListener('click',function(){setNav(true)});
 if(x)x.addEventListener('click',function(){setNav(false)});
 nav.addEventListener('click',function(e){if(e.target.tagName==='A')setNav(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')setNav(false)});
}

/* reveal */
if('IntersectionObserver' in window&&!RM){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
 document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
}else document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});

/* mobile callbar */
var cb=document.querySelector('.callbar');
if(cb){addEventListener('scroll',function(){cb.classList.toggle('show',scrollY>innerHeight*.8)},{passive:true})}

/* home hero story */
var hero=document.getElementById('story');
if(hero){
 var D=JSON.parse(hero.getAttribute('data-slides')),words=hero.querySelectorAll('.l3 b'),btns=hero.querySelectorAll('.chips button'),
     imgs=hero.querySelectorAll('.right img'),bars=hero.querySelectorAll('.bars i'),left=hero.querySelector('.left'),
     f={site:hero.querySelector('[data-f=site]'),t1:hero.querySelector('[data-f=t1]'),t2:hero.querySelector('[data-f=t2]'),time:hero.querySelector('[data-f=time]')},
     N=D.length,DUR=3400,cur=0,timer,paused=false;
 hero.style.setProperty('--dur',DUR+'ms');
 function go(i){
  cur=(i+N)%N;
  words.forEach(function(b){b.style.transform='translateY('+(-100*cur)+'%)'});
  btns.forEach(function(b,k){b.setAttribute('aria-pressed',k===cur)});
  imgs.forEach(function(m,k){m.classList.toggle('on',k===cur)});
  var d=D[cur];f.site.textContent=d.site;f.t1.textContent=d.t1;f.t2.textContent=d.t2;f.time.textContent=d.time;left.style.background=d.bg;
  bars.forEach(function(b,k){b.className=k<cur?'done':'';void b.offsetWidth;if(k===cur&&!paused&&!RM)b.className='run'});
  var row=btns[cur].parentElement;if(row.scrollWidth>row.clientWidth)row.scrollTo({left:btns[cur].offsetLeft-16,behavior:RM?'auto':'smooth'});
  clearTimeout(timer);if(!paused&&!RM)timer=setTimeout(function(){go(cur+1)},DUR);
 }
 btns.forEach(function(b,k){
  b.addEventListener('click',function(){go(k)});
  b.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches){paused=true;go(k)}});
  b.addEventListener('mouseleave',function(){paused=false;go(cur)});
 });
 hero.querySelectorAll('.tapz').forEach(function(z){z.addEventListener('click',function(){go(cur+(+z.getAttribute('data-d')))})});
 var sx=null;
 hero.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
 hero.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>45)go(cur+(dx<0?1:-1));sx=null});
 document.addEventListener('visibilitychange',function(){if(document.hidden)clearTimeout(timer);else go(cur)});
 go(0);
}

/* scope builder */
var sb=document.getElementById('scope-form');
if(sb){
 var LIB=JSON.parse(sb.getAttribute('data-lib')),out=document.getElementById('js-list'),
     mS=document.getElementById('js-sector'),mZ=document.getElementById('js-size'),mF=document.getElementById('js-freq'),mT=document.getElementById('js-time'),link=document.getElementById('js-send');
 function val(n){var c=sb.querySelector('input[name='+n+']:checked');return c?c.value:''}
 function lab(n){var c=sb.querySelector('input[name='+n+']:checked');return c?c.nextElementSibling.textContent:''}
 function build(){
  var s=val('sector'),fq=val('freq'),L=LIB[s];
  var items=L.base.slice();
  items=items.concat(L.big.slice(0,1));
  if(fq==='5'||fq==='7')items.push(['Daily bins, liners + restock','Every visit']);
  items.push(['Sign-off logged + photo of finish','Every visit']);
  out.innerHTML='';
  items.forEach(function(it,i){var li=document.createElement('li');li.style.animationDelay=(i*40)+'ms';li.innerHTML='<span>'+it[0]+'<small>'+it[1]+'</small></span>';out.appendChild(li)});
  mS.textContent=lab('sector');mF.textContent=lab('freq');mT.textContent=L.time;
  link.href=link.getAttribute('data-base')+'?sector='+encodeURIComponent(lab('sector'))+'&freq='+encodeURIComponent(lab('freq'));
 }
 sb.addEventListener('change',build);build();
}

/* form error */
if(/[?&]error=/.test(location.search)){var fe=document.getElementById('form-error');if(fe)fe.hidden=false}
/* form prefill + submit state */
var fm=document.getElementById('walkthrough');
if(fm){
 var q=new URLSearchParams(location.search);
 [['sector','sector'],['size','size'],['freq','frequency']].forEach(function(p){
  var v=q.get(p[0]),el=fm.querySelector('[name='+p[1]+']');if(!v||!el)return;
  for(var i=0;i<el.options.length;i++){if(el.options[i].text===v){el.selectedIndex=i}}
 });
 if(q.get('sector')){var n=fm.querySelector('[name=notes]');var h=document.getElementById('prefilled');if(h)h.hidden=false}
}
})();
