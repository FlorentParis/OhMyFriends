//Récuperation du JSON
const test = document.getElementById('test').value;
const data = JSON.parse(test);
console.log(data);

/* Interphone */
const interphone = document.querySelector('#interphone');
const burger = document.querySelector('#burger');
const btnInterphone = document.querySelectorAll('a');
let bars = burger.querySelectorAll('.bar');

let displayMenu = false;

function Menu(){
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
  };
};

burger.addEventListener('click', () => {
  Menu();
});

for(let i=0; i<=2; i++){
  btnInterphone[i].addEventListener('click', () => {
    Menu();
  });
};

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
  const rep = video.paused ? 'none' : 'flex';
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

horlogeData[0].textContent = data["audienceSeason"][numberHorloge[0].textContent.substr(1) - 1][numberHorloge[0].textContent.substr(1)];
horlogeData[1].textContent = data["qteOmgBooks"][numberHorloge[0].textContent.substr(1) - 1][1993 + parseInt(numberHorloge[0].textContent.substr(1))];
horlogeData[2].textContent = data["omgSaison"][numberHorloge[0].textContent.substr(1) - 1][numberHorloge[0].textContent.substr(1)];

numberHorloge.forEach(element => {
  element.addEventListener('click', () => {
    aiguille.style.transform = "rotateZ(" + 36 * (element.textContent.substr(1) - 1) + "deg)";
    horlogeData[0].textContent = data["audienceSeason"][element.textContent.substr(1) - 1][element.textContent.substr(1)];
    horlogeData[1].textContent = data["qteOmgBooks"][element.textContent.substr(1) - 1][1993 + parseInt(element.textContent.substr(1))];
    horlogeData[2].textContent = data["omgSaison"][element.textContent.substr(1) - 1][element.textContent.substr(1)];
  })
});

/* Verrou Animation */
const bouton = document.querySelector('#ovale');

bouton.addEventListener("click", () => {
  if(bouton.classList.contains('animO')){
    bouton.classList.remove("animO");
  }else{
    bouton.classList.add("animO");
    setTimeout(function(){
      bouton.classList.remove("animO");
    }, 3000);
  }
});

/* Cache Animation */
const cache = document.querySelector('#cache');

cache.addEventListener("click", () => {
  if(cache.classList.contains('animC')){
    cache.classList.remove("animC");
  }else{
    cache.classList.add("animC");
    setTimeout(function(){
      cache.classList.remove("animC");
    }, 3000);
  }
});

/*Canvas OMG Personnage*/
/*Initialisation des varaibles et récupérations des éléments*/
const canvas = document.querySelector('#myCanvas');
const fenetre = document.querySelector('#dataPersos');
const width = canvas.width = fenetre.offsetWidth;
const height = canvas.height = fenetre.offsetHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#f2f2f2';
ctx.fillRect(0,0,width,height);

/*Récupération de la data OMG pour chaque personnage en fonction des saisons */
Rachel = data['omgPersoSaison'][0]['nb_omg'];
Monica = data['omgPersoSaison'][1]['nb_omg'];
Phoebe = data['omgPersoSaison'][2]['nb_omg']
Ross =data['omgPersoSaison'][3]['nb_omg']
Chandler =data['omgPersoSaison'][4]['nb_omg']
Joey=data['omgPersoSaison'][5]['nb_omg']

/* Trace la courbe en fonction de la valeur des points donnés*/
function point(points, color){
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

/*Trace les lignes vertical du graphe*/
function GrilleVertical(){
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

/*Trace les lignes horizontal du graphe*/
function GrilleHorizontal(){
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

/*Trace la ligne des abcisses du graphe*/
function Absisse(){
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

/*Trace la ligne des ordonnées du graphe*/
function Ordonnee(){
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

/*Trace les unités de la ligne des abcisses du graphe*/
function UniteOrdonnee(){
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

/*Trace les unités de la ligne des ordonnées du graphe*/
function UniteAbcisse(){
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

/*Trace les valeurs des unités de la ligne des abcisses du graphe*/
function NumberAbcisse(){
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

/*Trace les valeurs des unités de la ligne des ordonnées du graphe*/
function NumberOrdonnee(){
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


/*Trace le titre du graphe*/
function titre(){
  ctx.font='20px serif';
  ctx.lineWidth="1";
  text = "Evolution de la quantité de “Oh My God” au fil des saisons pour chaque personnage"
  ctx.fillStyle="black";
  var x = 100;
  var y = 30;
  ctx.fillText(text,x,y);
}


/*Trace la grandeur variable : les saisons*/
function saison(){
  ctx.font='16px serif';
  ctx.lineWidth="1";
  text = "Saisons"
  ctx.fillStyle="black";
  var x = 770;
  var y = 630;
  ctx.fillText(text,x,y);
}

/*Trace la grandeur mesurées : la quantité de OMG*/
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




GrilleVertical();
GrilleHorizontal();
Ordonnee();
Absisse()
UniteOrdonnee();
UniteAbcisse();
NumberAbcisse();
NumberOrdonnee()
point(Rachel, "#FF0000");
point(Monica, "#0075FF");
point(Phoebe, "#009F10");
point(Ross, "#FFC700");
point(Chandler, "#EB00FF");
point(Joey, "#000AFF");
titre();
saison();
quantite();






/*OMG Book/Serie*/
/*Initialisation des varaibles et récupérations des éléments*/
const tableau = document.querySelector('#dataBooks');
const cursor = document.querySelector('#curseur');
const markS1 = document.querySelector('#markS1');
const markS2 = document.querySelector('#markS2');
const markS3 = document.querySelector('#markS3');
const markS4 = document.querySelector('#markS4');
const markS5 = document.querySelector('#markS5');
const markS6 = document.querySelector('#markS6');
const markS7 = document.querySelector('#markS7');
const markS8 = document.querySelector('#markS8');
const markS9 = document.querySelector('#markS9');
const markS10 = document.querySelector('#markS10');

const markALL = document.querySelectorAll('.marksaison');

const OMGWidth = tableau.width = tableau.offsetWidth;
const OMGHeight = tableau.height = tableau.offsetHeight;

const OMGContainer = document.querySelector("#OMGContainer");

const dataOMGSaison = [];

let year = 1994;

/*Récupération de la data de la quantité de OMG dans la série par saison et dans les livres par années*/
function dataRecup(){
  for(let x = 0; x< data['omgSaison'].length; x++){
    let temp = [];
    temp[0] =data['omgSaison'][x][x+1];
    temp[1] = "serie";
    temp[2] = data['qteOmgBooks'][x][year];
    temp[3] = "book";
    dataOMGSaison[x] = temp;
    year = year + 1
  }
}

/*Générateur de OMG en fonction du nombre donné */
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
      OMG.style.zIndex=2;
    }
    OMG.innerText = "OMG";
    OMG.style.position ="absolute";
    OMG.style.bottom = getRandomInt(OMGHeight * 0.75).toString() + "px";
    OMG.style.left=getRandomInt(OMGWidth * 0.82).toString() + "px";
    OMG.classList.toggle("OMGspan");
    OMGContainer.appendChild(OMG);
  }
}
/* Fonction pour sortir une valeur aléatoire, ensuite utilisée dans le placement des OMG générés */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*Initialisation du cas 1 pour qu'il y est quelque chose d'afficher avant l'interraction de l'utilisateur / éviter un cadre blanc au début */
function generateOMGS1(){
  generateOMG(dataOMGSaison[0][0], dataOMGSaison[0][1]);
  generateOMG(dataOMGSaison[0][2], dataOMGSaison[0][3]);
}


/*Changer le nombre de OMG affiché et la saison affichée en fonction de la saison sélectionner */
cursor.oninput = (()=>{
  let value = cursor.value;
  let suppr = document.getElementsByClassName('OMGspan')
  switch(value){
    case "1":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS1.style.opacity="100";
      generateOMG(dataOMGSaison[0][0], dataOMGSaison[0][1]);
      generateOMG(dataOMGSaison[0][2], dataOMGSaison[0][3]);
      break;
    case "2":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS2.style.opacity="100";
      generateOMG(dataOMGSaison[1][0], dataOMGSaison[1][1]);
      generateOMG(dataOMGSaison[1][2], dataOMGSaison[1][3]);
      break;
    case "3":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });      
      markS3.style.opacity="100";
      generateOMG(dataOMGSaison[2][0], dataOMGSaison[2][1]);
      generateOMG(dataOMGSaison[2][2], dataOMGSaison[2][3]);
      break;
    case "4":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS4.style.opacity="100";
      generateOMG(dataOMGSaison[3][0], dataOMGSaison[3][1]);
      generateOMG(dataOMGSaison[3][2], dataOMGSaison[3][3]);
      break;
    case "5":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS5.style.opacity="100";
      generateOMG(dataOMGSaison[4][0], dataOMGSaison[4][1]);
      generateOMG(dataOMGSaison[4][2], dataOMGSaison[4][3]);
      break;
    case "6":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS6.style.opacity="100";
      generateOMG(dataOMGSaison[5][0], dataOMGSaison[5][1]);
      generateOMG(dataOMGSaison[5][2], dataOMGSaison[5][3]);
      break;
    case "7":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS7.style.opacity="100";
      generateOMG(dataOMGSaison[6][0], dataOMGSaison[6][1]);
      generateOMG(dataOMGSaison[6][2], dataOMGSaison[6][3]);
      break;5
    case "8":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS8.style.opacity="100";
      generateOMG(dataOMGSaison[7][0], dataOMGSaison[7][1]);
      generateOMG(dataOMGSaison[7][2], dataOMGSaison[7][3]);
      break;
    case "9":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });
      markS9.style.opacity="100";
      generateOMG(dataOMGSaison[8][0], dataOMGSaison[8][1]);
      generateOMG(dataOMGSaison[8][2], dataOMGSaison[8][3]);
      break;
    case "10":
      while(suppr[0]){
        suppr[0].parentNode.removeChild(suppr[0]);
      };
      markALL.forEach(element =>{
        element.style.opacity = "0";
      });  
      markS10.style.opacity="100";
      generateOMG(dataOMGSaison[9][0], dataOMGSaison[9][1]);
      generateOMG(dataOMGSaison[9][2], dataOMGSaison[9][3]);
      break;
    default:
      break;
    
  }

})

dataRecup();
generateOMGS1();
