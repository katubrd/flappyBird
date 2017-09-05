window.onload = function(){
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = 600;

  const ctx = canvas.getContext('2d');

  const environment = new Environment(canvas, ctx);
  const bird = new Bird(100, 250, ctx);
  gameLoop();

  ctx.fillStyle = "#fff";
  function gameLoop(){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    environment.update();
    environment.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop);
  }

};
