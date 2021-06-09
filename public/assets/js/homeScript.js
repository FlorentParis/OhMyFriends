/* Cadre */
const cadre = document.querySelector('#cadre');
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

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

Rachel = [18, 27, 23, 25, 31, 37, 35, 26, 17, 25];
Monica = [14,27,23,31,16,25,19,20,28,36];
Phoebe = [8,18,24,13,15,15,25,19,28,9];
Ross =[6,9,6,8,9,12,12,9,25,21];
Chandler = [9,3,7,7,11,18,8,7,4,5];
Joey=[3,6,4,4,5,9,4,13,9,7];

function testpoint(points, color){
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.strokeStyle=color;
  var base = 577;
  var x = 60;
  ctx.moveTo(x,base - points[0]*12);
  for(let z = 0; z<points.length; z++){
    ctx.lineTo(x, base - points[z]*12);
    x = x+84;
  }
  ctx.stroke();
}

function testGrilleVertical(){
  var x = 60;
  var base = 587;
  var fin = 47;
  for(let z = 0; z<10;z++){
    ctx.beginPath();
    ctx.lineWidth = "0.25";
    ctx.strokeStyle="black";
    ctx.moveTo(x,base);
    ctx.lineTo(x,fin);
    ctx.stroke();
    x = x + 84;
  }
}

function testGrilleHorizontal(){
  var y = 587;
  var base = 60;
  var fin = 816
  for(let z = 0; z<10; z++){
    ctx.beginPath();
    ctx.lineWidth = "0.25";
    ctx.strokeStyle="black";
    ctx.moveTo(base,y);
    ctx.lineTo(fin,y);
    ctx.stroke();
    y = y - 60;
  }
}

function testAbsisse(){
  var y = 587;
  var base = 60;
  var fin = 816;
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
  var x = 60;
  var base = 587;
  var fin = 47;
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
  var x = 60;
  var base = 587;
  for(let z = 0; z<45; z++){
    if(z%5 == 0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "2";
      ctx.moveTo(x, base);
      ctx.lineTo(x-10, base);
      ctx.stroke();
      base = base - 12;
    }else{
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "1";
      ctx.moveTo(x, base);
      ctx.lineTo(x-5, base);
      ctx.stroke();
      base = base - 12;
    }
    
  }

}

function testUniteAbcisse(){
  var x = 60;
  var base = 587;
  for(let z = 0; z<45; z++){
    if(z%5==0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "2";
      ctx.moveTo(x,base);
      ctx.lineTo(x, base + 10);
      ctx.stroke();
      x = x + 84;
    }
  }
}

function testNumberAbcisse(){
  var x = 57;
  base = 610;
  for(let z = 1; z<11; z++){
    if(z>8){
      text = z.toString();
      ctx.lineWidth="1.1";
      ctx.font = '16px serif';
      ctx.strokeText(text, x, base);
      x = x + 80;
    }else{
      text = z.toString();
      ctx.lineWidth="1.1";
      ctx.font = '16px serif';
      ctx.strokeText(text, x, base);
      x = x + 83.9;
    }
  }
}

function testNumberOrdonnee(){
  var x = 32.5;
  base = 592;
  for(let z = 0; z<45; z++){
    if(z%5==0){
      text = z.toString();
      ctx.lineWidth="1.1";
      ctx.font = '14px serif';
      ctx.strokeText(text,x,base);
      base = base - 60;
    }
    
  }
}



function titre(){
  ctx.font='20px serif';
  ctx.lineWidth="1";
  text = "Evolution de la quantité de “Oh My God” au fil des saisons pour chaque personnage"
  ctx.fillStyle="black";
  var x = 100;
  var y = 30;
  ctx.fillText(text,x,y);
}

function saison(){
  ctx.font='16px serif';
  ctx.lineWidth="1";
  text = "Saisons"
  ctx.fillStyle="black";
  var x = 770;
  var y = 630;
  ctx.fillText(text,x,y);
}

function quantite(){
  ctx.font='16px " serif';
  ctx.lineWidth="1";
  text = 'Quantité de "Oh my God"';
  ctx.fillStyle="black";
  ctx.rotate(-90* Math.PI / 180);
  var x =0;
  var y = 10;
  ctx.translate(-200,12);
  ctx.fillText(text,x,y);
}




testGrilleVertical();
testGrilleHorizontal();
testOrdonnee();
testAbsisse()
testUniteOrdonnee();
testUniteAbcisse();
testNumberAbcisse();
testNumberOrdonnee()
testpoint(Rachel, "#FF0000");
testpoint(Monica, "#0075FF");
testpoint(Phoebe, "#009F10");
testpoint(Ross, "#FFC700");
testpoint(Chandler, "#EB00FF");
testpoint(Joey, "#000AFF");
titre();
saison();
quantite();