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
numberHorloge[0].style.color = "#ffd500";
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
    numberHorloge.forEach(element => {
      element.removeAttribute("style");
    });
    element.style.color = "#ffd500";
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

/* Boule Animation */
const boule = document.querySelector('#boule');

boule.addEventListener("click", () => {
  if(boule.classList.contains('animB')){
    boule.classList.remove("animB");
  }else{
    boule.classList.add("animB");
    setTimeout(function(){
      boule.classList.remove("animB");
    }, 1000);
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
/*const width = canvas.width = fenetre.offsetWidth;
const height = canvas.height = fenetre.offsetHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#f2f2f2';
ctx.fillRect(0,0,width,height);*/


function responsiveCanvas(tailleTelephone, tailleTablette) {
  if (tailleTelephone.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
    dataPersos.style.margin = "0";

    fenetre.style.width = "375px";

    fenetre.style.marginLeft = "auto";
    fenetre.style.marginRight = "auto";

    
    width = canvas.width = fenetre.offsetWidth;
    height = canvas.height = fenetre.offsetHeight;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0,0,width,height);


    basePoint = 597;
    xPoint = 40.5;
    multiplicateurPoint = 12;
    ajoutxPoint = 35.7;

    xGrilleVertical = 40.5;
    baseGrilleVertical = 607;
    finGrilleVertical = 67;
    lineWidthGrilleVertical = 0.25;
    ajoutxGrilleVertical = 35.7;

    yGrilleHorizontal = 607;
    baseGrilleHorizontal = 45.5;
    finGrilleHorizontal=362.2;
    lineWidthGrilleHorizontal = 0.25;
    ajoutyGrilleHorizontal = 60;

    yAbsisse = 607;
    baseAbsisse = 45.5;
    finAbsisse = 362.2;
    lineWidthAbsisse = 1.5;
    ajoutfinAbsisse = 10;

    xOrdonnee = 40.5;
    baseOrdonnee = 607;
    finOrdonnee = 67;
    lineWidthOrdonnee = 1.5;
    ajoutxOrdonnee = 10;

    xUniteAbcisse = 40.5;
    baseUniteAbcisse = 607;
    lineWidthUniteAbcisse = 2;
    ajoutbaseUniteAbcisse = 10;
    ajoutxUniteAbcisse = 35.7;

    xUniteOrdonnee = 40.5;
    baseUniteOrdonnee=607;
    lineWidth1UniteOrdonnee = 2;
    lineWidth2UniteOrdonnee = 1;
    ajoutbaseUniteOrdonnee = 12;
    ajoutx1UniteOrdonnee = 10;
    ajoutx2UniteOrdonnee = 5;

    xNumberOrdonnee = 15;
    baseNumberOrdonnee = 612;
    lineWidthNumberOrdonnee = 1.1;
    ajoutbaseNumberOrdonnee = 60;

    xNumberAbcisse = 35.5;
    baseNumberAbcisse = 630;
    lineWidthNumberAbcisse = 1.1;
    ajoutx1NumberAbcisse = 34;
    ajoutx2NumberAbcisse = 35.7;  

    lineWidthtitre = 1;
    xtitre = 20;
    ytitre = 35;
    ctxfontitre = 18;
    texttitre1 = "Evolution de la quantité de “Oh My God” au fil";
    texttitre2 = "des saisons pour chaque personnage";

    lineWidthsaison = 1;
    xsaison = 313.75;
    ysaison = 645;
    ctxfontsaison = 16;
    
    lineWidthquantite = 1;
    xquantite = -20;
    yquantite = 0;
    translatexquantite = -200;
    translateyquantite = 12;
    ctxfontquantite = 16;





  }else if(tailleTablette.matches) {
    document.body.style.backgroundColor = "blue";

    fenetre.style.width = "425px";

    width = canvas.width = fenetre.offsetWidth;
    height = canvas.height = fenetre.offsetHeight;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0,0,width,height);


    basePoint = 597;
    xPoint = 51.8;
    multiplicateurPoint = 12;
    ajoutxPoint = 37.5;

    xGrilleVertical = 51.8;
    baseGrilleVertical = 607;
    finGrilleVertical = 67;
    lineWidthGrilleVertical = 0.25;
    ajoutxGrilleVertical = 37.5;

    yGrilleHorizontal = 607;
    baseGrilleHorizontal = 51.8;
    finGrilleHorizontal=389.3;
    lineWidthGrilleHorizontal = 0.25;
    ajoutyGrilleHorizontal = 60;

    yAbsisse = 607;
    baseAbsisse = 51.8;
    finAbsisse = 389.3;
    lineWidthAbsisse = 1.5;
    ajoutfinAbsisse = 10;

    xOrdonnee = 51.8;
    baseOrdonnee = 607;
    finOrdonnee = 67;
    lineWidthOrdonnee = 1.5;
    ajoutxOrdonnee = 10;

    xUniteAbcisse = 51.8;
    baseUniteAbcisse = 607;
    lineWidthUniteAbcisse = 2;
    ajoutbaseUniteAbcisse = 10;
    ajoutxUniteAbcisse = 37.5;

    xUniteOrdonnee = 51.8;
    baseUniteOrdonnee=607;
    lineWidth1UniteOrdonnee = 2;
    lineWidth2UniteOrdonnee = 1;
    ajoutbaseUniteOrdonnee = 12;
    ajoutx1UniteOrdonnee = 10;
    ajoutx2UniteOrdonnee = 5;

    xNumberOrdonnee = 27;
    baseNumberOrdonnee = 612;
    lineWidthNumberOrdonnee = 1.1;
    ajoutbaseNumberOrdonnee = 60;

    xNumberAbcisse = 48;
    baseNumberAbcisse = 630;
    lineWidthNumberAbcisse = 1.1;
    ajoutx1NumberAbcisse = 35.7;
    ajoutx2NumberAbcisse = 37.45;  

    lineWidthtitre = 1;
    xtitre = 45;
    ytitre = 35;
    ctxfontitre = 18;
    texttitre1 = "Evolution de la quantité de “Oh My God” au fil";
    texttitre2 = "des saisons pour chaque personnage";

    lineWidthsaison = 1;
    xsaison = 343.75;
    ysaison = 645;
    ctxfontsaison = 16;
    
    lineWidthquantite = 1;
    xquantite = 0;
    yquantite = 10;
    translatexquantite = -200;
    translateyquantite = 12;
    ctxfontquantite = 16;

  } else {
    document.body.style.backgroundColor = "pink";
    
    
    
    width = canvas.width = fenetre.offsetWidth;
    height = canvas.height = fenetre.offsetHeight;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0,0,width,height);


    basePoint = 577;
    xPoint = 60;
    multiplicateurPoint = 12;
    ajoutxPoint = 84;

    xGrilleVertical = 60;
    baseGrilleVertical = 587;
    finGrilleVertical = 47;
    lineWidthGrilleVertical = 0.25;
    ajoutxGrilleVertical = 84;  

    yGrilleHorizontal = 587;
    baseGrilleHorizontal = 60;
    finGrilleHorizontal=816;
    lineWidthGrilleHorizontal = 0.25;
    ajoutyGrilleHorizontal = 60;  

    yAbsisse = 587;
    baseAbsisse = 60;
    finAbsisse = 816;
    lineWidthAbsisse = 1.5;
    ajoutfinAbsisse = 10;

    xOrdonnee = 60;
    baseOrdonnee = 587;
    finOrdonnee = 47;
    lineWidthOrdonnee = 1.5;
    ajoutxOrdonnee = 10;

    xUniteAbcisse = 60;
    baseUniteAbcisse = 587;
    lineWidthUniteAbcisse = 2;
    ajoutbaseUniteAbcisse = 10;
    ajoutxUniteAbcisse = 84;

    xUniteOrdonnee = 60;
    baseUniteOrdonnee=587;
    lineWidth1UniteOrdonnee = 2;
    lineWidth2UniteOrdonnee = 1;
    ajoutbaseUniteOrdonnee = 12;
    ajoutx1UniteOrdonnee = 10;
    ajoutx2UniteOrdonnee = 5;

    xNumberOrdonnee = 32.5;
    baseNumberOrdonnee = 592;
    lineWidthNumberOrdonnee = 1.1;
    ajoutbaseNumberOrdonnee = 60;

    xNumberAbcisse = 57;
    baseNumberAbcisse = 610;
    lineWidthNumberAbcisse = 1.1;
    ajoutx1NumberAbcisse = 80;
    ajoutx2NumberAbcisse = 83.9;  

    lineWidthtitre = 1;
    xtitre = 100;
    ytitre = 30;
    ctxfontitre = 20;
    texttitre1 = "Evolution de la quantité de “Oh My God” au fil des saisons pour chaque personnage";
    texttitre2 = ""

    lineWidthsaison = 1;
    xsaison = 770;
    ysaison = 630;
    ctxfontsaison = 16;
    
    lineWidthquantite = 1;
    xquantite = 0;
    yquantite = 10;
    translatexquantite = -200;
    translateyquantite = 12;
    ctxfontquantite = 16;




  }
}


var tailleTelephone = window.matchMedia("(max-width: 425px)")
var tailleTablette = window.matchMedia("(max-width: 1024px)")
responsiveCanvas(tailleTelephone, tailleTablette) // Call listener function at run time
tailleTelephone.addListener(responsiveCanvas) // Attach listener function on state changes
tailleTablette.addListener(responsiveCanvas) // Attach listener function on state changes


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
  var base = basePoint;
  var x = xPoint;
  ctx.moveTo(x,base - points[0]*multiplicateurPoint);
  for(let z = 0; z<points.length; z++){
    ctx.lineTo(x, base - points[z]*multiplicateurPoint);
    x = x+ajoutxPoint;
  }
  ctx.stroke();
}



/*Trace les lignes vertical du graphe*/
function GrilleVertical(){
  var x = xGrilleVertical;
  var base = baseGrilleVertical;
  var fin = finGrilleVertical;
  for(let z = 0; z<10;z++){
    ctx.beginPath();
    ctx.lineWidth = lineWidthGrilleVertical.toString();
    ctx.strokeStyle="black";
    ctx.moveTo(x,base);
    ctx.lineTo(x,fin);
    ctx.stroke();
    x = x + ajoutxGrilleVertical;
  }
}


/*Trace les lignes horizontal du graphe*/
function GrilleHorizontal(){
  var y = yGrilleHorizontal;
  var base = baseGrilleHorizontal;
  var fin = finGrilleHorizontal
  for(let z = 0; z<10; z++){
    ctx.beginPath();
    ctx.lineWidth = lineWidthGrilleHorizontal.toString();
    ctx.strokeStyle="black";
    ctx.moveTo(base,y);
    ctx.lineTo(fin,y);
    ctx.stroke();
    y = y - ajoutyGrilleHorizontal;
  }
}




/*Trace la ligne des abcisses du graphe*/
function Absisse(){
  var y = yAbsisse;
  var base = baseAbsisse;
  var fin = finAbsisse;
  ctx.beginPath();
  ctx.lineWidth = lineWidthAbsisse.toString();
  ctx.strokeStyle="black";
  ctx.moveTo(base,y);
  ctx.lineTo(fin,y);
  ctx.stroke();
  ctx.moveTo(fin, y);
  ctx.lineTo(fin - ajoutfinAbsisse, y - ajoutfinAbsisse);
  ctx.moveTo(fin, y);
  ctx.lineTo(fin - ajoutfinAbsisse, y + ajoutfinAbsisse);
  ctx.stroke();
}



/*Trace la ligne des ordonnées du graphe*/
function Ordonnee(){
  var x = xOrdonnee;
  var base = baseOrdonnee;
  var fin = finOrdonnee;
  ctx.beginPath();
  ctx.lineWidth = lineWidthOrdonnee.toString();
  ctx.strokeStyle="black";
  ctx.moveTo(x,base);
  ctx.lineTo(x,fin);
  ctx.stroke();
  ctx.moveTo(x, fin);
  ctx.lineTo(x - ajoutxOrdonnee, fin + ajoutxOrdonnee);
  ctx.stroke();
  ctx.moveTo(x, fin);
  ctx.lineTo(x + ajoutxOrdonnee, fin + ajoutxOrdonnee);
  ctx.stroke();
}




/*Trace les unités de la ligne des abcisses du graphe*/
function UniteOrdonnee(){
  var x = xUniteOrdonnee;
  var base = baseUniteOrdonnee;
  for(let z = 0; z<45; z++){
    if(z%5 == 0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidth1UniteOrdonnee.toString();;
      ctx.moveTo(x, base);
      ctx.lineTo(x-ajoutx1UniteOrdonnee, base);
      ctx.stroke();
      base = base - ajoutbaseUniteOrdonnee;
    }else{
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidth2UniteOrdonnee.toString();
      ctx.moveTo(x, base);
      ctx.lineTo(x-ajoutx2UniteOrdonnee, base);
      ctx.stroke();
      base = base - ajoutbaseUniteOrdonnee;
    }

  }

}




/*Trace les unités de la ligne des ordonnées du graphe*/
function UniteAbcisse(){
  var x = xUniteAbcisse;
  var base = baseUniteAbcisse;
  for(let z = 0; z<45; z++){
    if(z%5==0){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = lineWidthUniteAbcisse.toString();
      ctx.moveTo(x,base);
      ctx.lineTo(x, base + ajoutbaseUniteAbcisse);
      ctx.stroke();
      x = x + ajoutxUniteAbcisse;
    }
  }
}



/*Trace les valeurs des unités de la ligne des abcisses du graphe*/
function NumberAbcisse(){
  var x = xNumberAbcisse;
  var base = baseNumberAbcisse;
  for(let z = 1; z<11; z++){
    if(z>8){
      text = z.toString();
      ctx.lineWidth=lineWidthNumberAbcisse.toString();
      ctx.font = '16px serif';
      ctx.strokeText(text, x, base);
      x = x + ajoutx1NumberAbcisse;
    }else{
      text = z.toString();
      ctx.lineWidth=lineWidthNumberAbcisse.toString();
      ctx.font = '16px serif';
      ctx.strokeText(text, x, base);
      x = x + ajoutx2NumberAbcisse;
    }
  }
}

/*Trace les valeurs des unités de la ligne des ordonnées du graphe*/
function NumberOrdonnee(){
  var x = xNumberOrdonnee;
  base = baseNumberOrdonnee;
  for(let z = 0; z<45; z++){
    if(z%5==0){
      text = z.toString();
      ctx.lineWidth=lineWidthNumberOrdonnee.toString();
      ctx.font = '14px serif';
      ctx.strokeText(text,x,base);
      base = base - ajoutbaseNumberOrdonnee;
    }

  }
}




/*Trace le titre du graphe*/
function titre(){
  ctx.font=  ctxfontitre.toString() +'px serif';
  ctx.lineWidth=lineWidthtitre.toString();
  text1 = texttitre1;
  text2 = texttitre2;
  ctx.fillStyle="black";
  var x = xtitre;
  var y = ytitre;
  ctx.fillText(text1,x,y);
  ctx.fillText(text2,x + 30,y + 12);
}

/*Trace la grandeur variable : les saisons*/
function saison(){
  ctx.font= ctxfontsaison.toString() +'px serif';
  ctx.lineWidth=lineWidthsaison.toString();
  text = "Saisons"
  ctx.fillStyle="black";
  var x = xsaison;
  var y = ysaison;
  ctx.fillText(text,x,y);
}


/*Trace la grandeur mesurées : la quantité de OMG*/
function quantite(){
  ctx.font= ctxfontquantite.toString() +'px serif';
  ctx.lineWidth=lineWidthquantite.toString();
  text = 'Quantité de "Oh my God"';
  ctx.fillStyle="black";
  ctx.rotate(-90* Math.PI / 180);
  var x =xquantite;
  var y = yquantite;
  ctx.translate(translatexquantite,translateyquantite);
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



const OMGContainer = document.querySelector("#OMGContainer");

const dataOMGSaison = [];

let year = 1994;

function responsiveOMGGenerator(tailleTelephone, tailleTablette){
  if(tailleTelephone.matches) {
    tableau.style.width = "375px";
    tableau.style.margin = "0";
    tableau.style.padding = "0";
    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;

    console.log(OMGHeight);
    console.log(OMGWidth);
    console.log(tableau);

    ratioHeightGeneratorOMG = 0.73;
    ratioHWidthGeneratorOMG = 0.78; 

  }else if (tailleTablette.matches) {
    tableau.style.width = "425px";
    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;

    console.log(OMGHeight);
    console.log(OMGWidth);
    console.log(tableau);
    ratioHeightGeneratorOMG = 0.75;
    ratioHWidthGeneratorOMG = 0.82;
  }else{
    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;

    console.log(OMGHeight);
    console.log(OMGWidth);
    console.log(tableau);

    ratioHeightGeneratorOMG = 0.75;
    ratioHWidthGeneratorOMG = 0.82;
  }
  
}
responsiveOMGGenerator(tailleTelephone, tailleTablette) // Call listener function at run time
tailleTelephone.addListener(responsiveOMGGenerator) // Attach listener function on state changes
tailleTablette.addListener(responsiveOMGGenerator) // Attach listener function on state changes


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
    OMG.style.bottom = getRandomInt(OMGHeight * ratioHeightGeneratorOMG).toString() + "px";
    OMG.style.left=getRandomInt(OMGWidth * ratioHWidthGeneratorOMG).toString() + "px";
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
