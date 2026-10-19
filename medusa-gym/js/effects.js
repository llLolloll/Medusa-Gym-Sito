/* Effetti MedusA Gym: decide dove usare la rifrazione e ferma l'aurora fuori schermo. */
(function(){
  var d = document.documentElement, mm = window.matchMedia;
  var reduce = mm && mm('(prefers-reduced-motion: reduce)').matches;
  var ua = navigator.userAgentData;
  var chromium = !!(ua && ua.brands && ua.brands.some(function(b){ return /Chromium/.test(b.brand); }));
  var strong = (navigator.hardwareConcurrency || 0) >= 6 && (navigator.deviceMemory === undefined || navigator.deviceMemory >= 4);
  var fine = !!(mm && mm('(pointer: fine)').matches);
  var saver = !!(navigator.connection && navigator.connection.saveData);
  if (chromium && strong && fine && !reduce && !saver) d.classList.add('glass-refract');

  var secs = document.querySelectorAll('.bp,.hero');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ e.target.classList.toggle('aur-on', e.isIntersecting); });
    }, {rootMargin: '120px 0px'});
    secs.forEach(function(s){ io.observe(s); });
  } else {
    secs.forEach(function(s){ s.classList.add('aur-on'); });
  }
})();
