// charts.js - initializes a simple canvas-based donut as a lightweight fallback
(function(){
  function init(){
    try{
      var canvas = document.getElementById('skillsCanvas');
      if(!canvas) return;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      var total = 100;
      var segments = [40,35,25];
      var colors = ['#00FFF0','#00BFB2','#3A506B'];
      var start = -0.5 * Math.PI;
      var radius = Math.min(canvas.width, canvas.height) / 3;
      var cx = canvas.width/2, cy = canvas.height/2;
      var a = start;
      for(var i=0;i<segments.length;i++){
        var portion = segments[i]/total * Math.PI*2;
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.fillStyle = colors[i];
        ctx.arc(cx,cy,radius,a,a+portion);
        ctx.closePath();
        ctx.fill();
        a += portion;
      }
      ctx.fillStyle = '#071826';
      ctx.beginPath();
      ctx.arc(cx,cy,radius*0.6,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = '#dff';
      ctx.font = '14px Inter, Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Skills', cx, cy+6);
    }catch(e){console.warn('charts init failed',e);}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();