/* Get Our Elements */
const cadre = document.querySelector('#cadre');
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Hook up the event listeners */
cadre.addEventListener('click', togglePlay);


/* Horloge */
const line = document.querySelectorAll('.line');
let deg = 18;

line.forEach(element => {
  element.style.transform = "rotateZ(" + deg + "deg)";
  console.log(line);
  deg += 36;
})

/*Canvas Perso*/
const canvas = document.querySelector('#myCanvas');
const fenetre = document.querySelector('#dataPersos');
const width = canvas.width = fenetre.offsetWidth;
const height = canvas.height = fenetre.offsetHeight;
const ctx = canvas.getContext('2d');


ctx.fillStyle = '#f2f2f2';
ctx.fillRect(0,0,width,height);




function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

function unite(point) {
  return point * 10;
}

function courbe(courbe){
  ctx.beginPath();
  ctx.moveTo(courbe.points.x[0], courbe.points.y[0])
  for(let z = 0; z<courbe.points.length  ; z++){
    unite(courbe.points.x[z], courbe.points.y[z]);
    ctx.lineTo(unite(courbe.points.x[z]),unite(courbe.points.y[z]));
  }
}

points_y = [12, 45, 63, 24, 35, 57, 88, 7, 17, 75];


function testpoint(points){
  ctx.beginPath();
  ctx.lineWidth = "3";
  ctx.strokeStyle="red";
  var base = 577;
  var x = 50;
  ctx.moveTo(x,base - points[0]*10);
  for(let z = 0; z<points.length; z++){
    ctx.lineTo(x, base - points[z]*10);
    x = x+83.33;
  }
  ctx.stroke();
}

function testGrilleVertical(){
  var x = 50;
  var base = 577;
  var fin = 50;
  for(let z = 0; z<10;z++){
    ctx.beginPath();
    ctx.lineWidth = "0.5";
    ctx.strokeStyle="black";
    ctx.moveTo(x,base);
    ctx.lineTo(x,fin);
    ctx.stroke();
    x = x +83.33;
  }
}

function testGrilleHorizontal(){
  var y = 577;
  var base = 50;
  var fin = 800
  for(let z = 0; z<10; z++){
    ctx.beginPath();
    ctx.lineWidth = "0.5";
    ctx.strokeStyle="black";
    ctx.moveTo(base,y);
    ctx.lineTo(fin,y);
    ctx.stroke();
    y = y - 83.33;
  }
}

function testAbsisse(){
  var y = 577;
  var base = 50;
  var fin = 800;
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.strokeStyle="black";
  ctx.moveTo(base,y);
  ctx.lineTo(fin,y);
  ctx.stroke();
  ctx.moveTo(fin, y);
  ctx.lineTo(fin - 10, y - 10);
  ctx.moveTo(fin, y);
  ctx.lineTo(fin - 10, y + 10);
  ctx.stroke();
}

function testOrdonnee(){
  var x = 50;
  var base = 577;
  var fin = 50;
  ctx.beginPath();
  ctx.lineWidth = "1.5";
  ctx.strokeStyle="black";
  ctx.moveTo(x,base);
  ctx.lineTo(x,fin);
  ctx.stroke();
  ctx.moveTo(x, fin);
  ctx.lineTo(x - 10, fin + 10);
  ctx.stroke();
  ctx.moveTo(x, fin);
  ctx.lineTo(x + 10, fin + 10);
  ctx.stroke();
}

function testUniteOrdonnee(){
  var x = 50;
  var base = 577;
  for(let z = 0; z<32; z++){
    if(z%5 == 0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "2";
      ctx.moveTo(x, base);
      ctx.lineTo(x-10, base);
      ctx.stroke();
      base = base - 16.666;
    }else{
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "1";
      ctx.moveTo(x, base);
      ctx.lineTo(x-5, base);
      ctx.stroke();
      base = base - 16.666;
    }
    
  }

}

function testUniteAbcisse(){
  var x = 50;
  var base = 577;
  for(let z = 0; z<45; z++){
    if(z%5 == 0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "2";
      ctx.moveTo(x, base);
      ctx.lineTo(x, base+10);
      ctx.stroke();
      x = x + 16.666;
    }else{
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "1";
      ctx.moveTo(x, base);
      ctx.lineTo(x, base+5);
      ctx.stroke();
      x = x + 16.666;
    }
    
  }

}

function testNumberAbcisse(){
  var x = 47;
  var base = 600;
  var base2= 605;
  var x2 = 47;
  for(let z = 0; z<45; z++){
    if(z%5==0){
      x = x + 16.6;
    }else{
      text = z.toString();
      ctx.font = '12px serif';
      ctx.strokeText(text, x, base);
      x= x + 16.6;
    }
  }
  for(let z = 0; z<45; z++){
    if(z%5==0){
      text = z.toString();
      ctx.font = '16px serirf';
      ctx.strokeText(text, x2, base2);
      if(z<9){
        x2 = x2 + 82;
      }else{
        x2 = x2 + 83.1;
      }
    }
  }
}



testGrilleVertical();
testGrilleHorizontal();
testOrdonnee();
testAbsisse()
testUniteOrdonnee();
testUniteAbcisse();
testNumberAbcisse();
testpoint(points_y);