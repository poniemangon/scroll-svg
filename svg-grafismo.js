var svgGrafismos = document.getElementsByClassName("svgGrafismo");

Array.prototype.forEach.call(svgGrafismos, function(svgGrafismo) {
  var length = svgGrafismo.getTotalLength();
  
  svgGrafismo.style.strokeDasharray = length;
  svgGrafismo.style.strokeDashoffset = length;
  
  function drawsvgGrafismo() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var draw = length * scrollpercent * 4;
    
    if (draw > length) {
      draw = length;
    }
    
    svgGrafismo.style.strokeDashoffset = length - draw;
  }
  
  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", drawsvgGrafismo);
      } else {
        window.removeEventListener("scroll", drawsvgGrafismo);
      }
    });
  }
  
  let observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
  observer.observe(svgGrafismo);
});

