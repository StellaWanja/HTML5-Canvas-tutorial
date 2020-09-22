const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

c.fillStyle = '#00adb5';
c.fillRect(250, 300, 100, 100);
c.fillStyle = '#9fc131';
c.fillRect(100, 150, 100, 100);
c.fillStyle = '#393e46';
c.fillRect(700, 50, 100, 100);

//line
c.beginPath();
c.moveTo(150,400);
c.lineTo(600, 400);
c.lineTo(600,250);
c.strokeStyle = '#222831';
c.stroke();

//arc/circle
c.beginPath();
c.arc(400,500,30,0,Math.PI * 2, false);
c.stroke();

for (let i=0; i<100; i++){
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
    c.stroke();
}