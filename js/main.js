const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = 600;

const ctx = canvas.getContext('2d');

ctx.fillRect(100, 200, 400, 150);

const bird1 = new Image();
bird1.src = '../img/ptah.svg';
bird1.onload = function(){
  ctx.drawImage(bird1, 500, 20);
};
