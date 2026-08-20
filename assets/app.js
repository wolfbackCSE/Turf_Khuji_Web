(function(){
  const path=location.pathname;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(path===a.getAttribute('href')||path.startsWith(a.getAttribute('href')+'/'))a.classList.add('active-nav')});
  document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',()=>alert(el.getAttribute('data-demo')||'Demo action')));
})();
