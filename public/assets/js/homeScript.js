//Récuperation du JSON
const test = document.getElementById('test').value;
const data = JSON.parse(test);
console.log(data);

/* Interphone */
const interphone = document.querySelector('#interphone');
const burger = document.querySelector('#burger');
let bars = burger.querySelectorAll('.bar');

let displayMenu = false;

burger.addEventListener('click', () => {
  if(displayMenu == false){
    interphone.style.left = "0%";
    bars[0].style.transform = "rotateZ(45deg)";
    bars[0].style.width = "31px";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotateZ(-45deg)";
    bars[2].style.width = "31px";
    displayMenu = true;
    document.body.classList.add('bodyStopScroll');
  }else if (displayMenu == true){
    interphone.style.left = "-100%";
    bars[0].style.transform = "rotateZ(0deg)";
    bars[0].style.width = "40px";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotateZ(0deg)";
    bars[2].style.width = "40px";
    displayMenu = false;
    document.body.classList.remove('bodyStopScroll');
  }
});

const grillesContainer = document.querySelector('#grillesContainer');
let nbrGrilles = grillesContainer.offsetHeight / 15;
for(let i = 0; i < nbrGrilles - 5; i++){
  creaGrille();
}

function creaGrille(){
  let grille = document.createElement("div");
  grille.className = "grille";
  grillesContainer.appendChild(grille);
}

/* Cadre */
const cadre = document.querySelector('#cadre');
const player = document.querySelector('#player');
const video = player.querySelector('.viewer');
const pause = document.querySelector('#pause');

pause.style.display = "flex";

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  const rep = (pause.style.display === 'none') ? 'flex' : 'none';
  video[method]();
  pause.style.display = rep;
}

cadre.addEventListener('click', togglePlay);

/* Horloge */
const line = document.querySelectorAll('.line');
let deg = 18;

line.forEach(element => {
  element.style.transform = "rotateZ(" + deg + "deg)";
  deg += 36;
})

const numberHorloge = document.querySelectorAll('.numberHorloge');
const aiguille = document.querySelector('#aiguille');
const horlogeData = document.querySelectorAll('.horlogeData');

numberHorloge.forEach(element => {
  element.addEventListener('click', () => {
    aiguille.style.transform = "rotateZ(" + 36 * (element.textContent.substr(1) - 1) + "deg)";
    horlogeData[0].textContent = data["audienceSeason"][element.textContent.substr(1) - 1][element.textContent.substr(1)];
    horlogeData[1].textContent = data["qteOmgBooks"][element.textContent.substr(1) - 1][1993 + parseInt(element.textContent.substr(1))];
    horlogeData[2].textContent = data["omgSaison"][element.textContent.substr(1) - 1][element.textContent.substr(1)];
  })
});

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



/*OMG Book/Serie*/

const tableau = document.querySelector('#dataBooks');
const curseur = document.querySelector('#curseurDataBooks');
const cursorValue = document.querySelector('#valeur_cursor');
const cursor = document.querySelector('#curseur');

const OMGWidth = tableau.width = tableau.offsetWidth;
const OMGHeight = tableau.height = tableau.offsetHeight;

const OMGContainer = document.querySelector("#OMGContainer");



function generateOMG(amount, type){
  for(let z =0; z<amount; z++){
    let OMG = document.createElement("span");
    if(type == "book"){
      OMG.style.color = "#B8B8B8";
      OMG.style.fontFamily = "Times New Roman";
      OMG.style.fontSize = "36px";
    }else if(type == "serie"){
      OMG.style.color = "#434343";
      OMG.style.fontFamily = "Rock Salt";
      OMG.style.fontSize = "24px";
    }
    OMG.innerText = "OMG";
    OMG.style.position ="absolute";
    OMG.style.bottom = getRandomInt(OMGHeight * 0.79).toString() + "px";
    OMG.style.left=getRandomInt(OMGWidth * 0.84).toString() + "px";
    OMG.classList.toggle("OMGspan");
    OMGContainer.appendChild(OMG);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

generateOMG(10, "book");
generateOMG(10, "serie");


cursor.oninput = (()=>{
  let value = cursor.value;
  cursorValue.textContent = "Saison " + value;
  cursorValue.style.left = "10%"; /*  <--   Sélectionner postion curseur pour être la même que la <span>*/
  console.log(value);
  let suppr = document.getElementsByClassName('OMGspan')
  switch(value){
    case "1":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "2":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "3":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "4":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "5":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "6":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "7":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "8":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "9":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    case "10":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      generateOMG(10, "book");
      generateOMG(10, "serie");
      break;
    default:
      break;
    
  }

})

function elementPosition (a) {
  let b = a.getBoundingClientRect();
  return {
    clientX: a.offsetLeft,
    clientY: a.offsetTop,
    viewportX: (b.x || b.left),
    viewportY: (b.y || b.top)
  }
}
