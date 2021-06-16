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
    interphone.style.left = "-100vw";
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

horlogeData[0].textContent = Math.round(data["audienceSeason"][numberHorloge[0].textContent.substr(1) - 1][numberHorloge[0].textContent.substr(1)].substr(0, 2)) + "," + Math.round(data["audienceSeason"][numberHorloge[0].textContent.substr(1) - 1][numberHorloge[0].textContent.substr(1)].substr(2, 1)) + " M";
horlogeData[1].textContent = Math.round(data["qteOmgBooks"][numberHorloge[0].textContent.substr(1) - 1][1993 + parseInt(numberHorloge[0].textContent.substr(1))]) + " Livres";
horlogeData[2].textContent = data["omgSaison"][numberHorloge[0].textContent.substr(1) - 1][numberHorloge[0].textContent.substr(1)] + " OMG";

numberHorloge.forEach(element => {
  element.addEventListener('click', () => {
    aiguille.style.transform = "rotateZ(" + 36 * (element.textContent.substr(1) - 1) + "deg)";
    horlogeData[0].textContent = Math.round(data["audienceSeason"][element.textContent.substr(1) - 1][element.textContent.substr(1)].substr(0, 2)) + "," + Math.round(data["audienceSeason"][element.textContent.substr(1) - 1][element.textContent.substr(1)].substr(2, 1)) + " M";
    horlogeData[1].textContent = Math.round(data["qteOmgBooks"][element.textContent.substr(1) - 1][1993 + parseInt(element.textContent.substr(1))]) + " Livres";
    horlogeData[2].textContent = data["omgSaison"][element.textContent.substr(1) - 1][element.textContent.substr(1)] + " OMG";
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

    /*fenetre.style.width = "375px";

    
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
    ctxfontquantite = 16;*/

    fenetre.style.width = "375px";
    fenetre.style.height = "280px";
    fenetre.style.margin = "0 70px";

    width = canvas.width = fenetre.offsetWidth;
    height = canvas.height = fenetre.offsetHeight;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0,0,width,height);


    basePoint = 245.5;
    xPoint = 25.5;
    multiplicateurPoint = 5.1;
    ajoutxPoint = 35.7;

    xGrilleVertical = 25.5;
    baseGrilleVertical = 249.8;
    finGrilleVertical = 20;
    lineWidthGrilleVertical = 0.1;
    ajoutxGrilleVertical = 35.7;  

    yGrilleHorizontal = 249.8;
    baseGrilleHorizontal = 25.5;
    finGrilleHorizontal=347.2;
    lineWidthGrilleHorizontal = 0.1;
    ajoutyGrilleHorizontal = 25.5;  

    yAbsisse = 249.8;
    baseAbsisse = 25.5;
    finAbsisse = 347.2;
    lineWidthAbsisse = 0.6;
    ajoutfinAbsisse = 4.25;

    xOrdonnee = 25.5;
    baseOrdonnee = 249.8;
    finOrdonnee = 20;
    lineWidthOrdonnee = 0.6;
    ajoutxOrdonnee = 4.25;

    xUniteAbcisse = 25.5;
    baseUniteAbcisse = 249.8;
    lineWidthUniteAbcisse = 0.85;
    ajoutbaseUniteAbcisse = 4.25;
    ajoutxUniteAbcisse = 35.7;

    xUniteOrdonnee = 25.5;
    baseUniteOrdonnee=249.8;
    lineWidth1UniteOrdonnee = 0.85;
    lineWidth2UniteOrdonnee = 0.4;
    ajoutbaseUniteOrdonnee = 5.1;
    ajoutx1UniteOrdonnee = 4.25;
    ajoutx2UniteOrdonnee = 2.1;

    xNumberOrdonnee = 10;
    baseNumberOrdonnee = 251.9;
    lineWidthNumberOrdonnee = 0.5;
    ajoutbaseNumberOrdonnee = 25.5;
    ctxfontNumberOrdonnee = 10;

    xNumberAbcisse = 23;
    baseNumberAbcisse = 264;
    lineWidthNumberAbcisse = 0.5;
    ajoutx1NumberAbcisse = 34;
    ajoutx2NumberAbcisse = 35.7; 
    ctxfontNumberAbcisse = 12; 

    lineWidthtitre = 0.4;
    xtitre = 20;
    ytitre = 12.8;
    ctxfontitre = 10;
    texttitre1 = "Evolution de la quantité de “Oh My God” au fil des saisons pour chaque personnage";
    texttitre2 = ""

    lineWidthsaison = 0.4;
    xsaison = 327.7;
    ysaison = 272;
    ctxfontsaison = 10;
    
    lineWidthquantite = 0.4;
    xquantite = -30;
    yquantite = 4.25;
    translatexquantite = -85.1;
    translateyquantite = 5.1;
    ctxfontquantite = 10;




  }else if(tailleTablette.matches) {
    /*fenetre.style.width = "425px";
    fenetre.style.margin = "40px 70px";

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
    ctxfontquantite = 16;*/


    fenetre.style.width = "425px";
    fenetre.style.height = "320px";
    fenetre.style.margin = "40px 70px";

    width = canvas.width = fenetre.offsetWidth;
    height = canvas.height = fenetre.offsetHeight;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0,0,width,height);


    basePoint = 278.7;
    xPoint = 29;
    multiplicateurPoint = 5.8;
    ajoutxPoint = 40.6;

    xGrilleVertical = 29;
    baseGrilleVertical = 283.6;
    finGrilleVertical = 21.3;
    lineWidthGrilleVertical = 0.1;
    ajoutxGrilleVertical = 40.6;  

    yGrilleHorizontal = 283.6;
    baseGrilleHorizontal = 29;
    finGrilleHorizontal=394.2;
    lineWidthGrilleHorizontal = 0.1;
    ajoutyGrilleHorizontal = 29;  

    yAbsisse = 283.6;
    baseAbsisse = 29;
    finAbsisse = 394.2;
    lineWidthAbsisse = 0.7;
    ajoutfinAbsisse = 4.8;

    xOrdonnee = 29;
    baseOrdonnee = 283.6;
    finOrdonnee = 22.7;
    lineWidthOrdonnee = 0.7;
    ajoutxOrdonnee = 4.8;

    xUniteAbcisse = 29;
    baseUniteAbcisse = 283.6;
    lineWidthUniteAbcisse = 1;
    ajoutbaseUniteAbcisse = 4.8;
    ajoutxUniteAbcisse = 40.6;

    xUniteOrdonnee = 29;
    baseUniteOrdonnee=283.6;
    lineWidth1UniteOrdonnee = 1;
    lineWidth2UniteOrdonnee = 0.5;
    ajoutbaseUniteOrdonnee = 5.8;
    ajoutx1UniteOrdonnee = 4.8;
    ajoutx2UniteOrdonnee = 2.4;

    xNumberOrdonnee = 13;
    baseNumberOrdonnee = 286;
    lineWidthNumberOrdonnee = 0.5;
    ajoutbaseNumberOrdonnee = 29;
    ctxfontNumberOrdonnee = 11;

    xNumberAbcisse = 27;
    baseNumberAbcisse = 299;
    lineWidthNumberAbcisse = 0.5;
    ajoutx1NumberAbcisse = 38.65;
    ajoutx2NumberAbcisse = 40.5; 
    ctxfontNumberAbcisse = 13;  

    lineWidthtitre = 0.5;
    xtitre = 25;
    ytitre = 14.5;
    ctxfontitre = 11;
    texttitre1 = "Evolution de la quantité de “Oh My God” au fil des saisons pour chaque personnage";
    texttitre2 = ""

    lineWidthsaison = 0.5;
    xsaison = 372;
    ysaison = 308;
    ctxfontsaison = 11;
    
    lineWidthquantite = 0.5;
    xquantite = -30;
    yquantite = 4.8;
    translatexquantite = -96.6;
    translateyquantite = 5.8;
    ctxfontquantite = 11;

  } else {
    fenetre.style.margin = "0 70px";

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
    ctxfontNumberOrdonnee = 14;

    xNumberAbcisse = 57;
    baseNumberAbcisse = 610;
    lineWidthNumberAbcisse = 1.1;
    ajoutx1NumberAbcisse = 80;
    ajoutx2NumberAbcisse = 83.9; 
    ctxfontNumberAbcisse = 16;  

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
      ctx.font =  ctxfontNumberAbcisse.toString() +'px serif';
      ctx.strokeText(text, x, base);
      x = x + ajoutx1NumberAbcisse;
    }else{
      text = z.toString();
      ctx.lineWidth=lineWidthNumberAbcisse.toString();
      ctx.font = ctxfontNumberAbcisse.toString() + 'px serif';
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
      ctx.font = ctxfontNumberOrdonnee.toString() + 'px serif';
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

const saisonmarker = document.querySelector('#saisonmark');


const OMGContainer = document.querySelector("#OMGContainer");

const dataOMGSaison = [];

let year = 1994;

function responsiveOMGGenerator(tailleTelephone, tailleTablette){
  if(tailleTelephone.matches) {
    tableau.style.width = "375px";
    tableau.style.height = ""
    tableau.style.flexDirection = "row";

    cursor.style = "appearance: slider-vertical";
    cursor.style.transform = "rotateZ(180deg)";
    cursor.style.width = "30px";

    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;


    ratioHeightGeneratorOMG = 0.9;
    ratioHWidthGeneratorOMG = 0.45; 

  }else if(tailleTablette.matches){
    tableau.style.width = "425px";
    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;

    ratioHeightGeneratorOMG = 0.78;
    ratioHWidthGeneratorOMG = 0.73;


  }else{
    OMGWidth = tableau.width = tableau.offsetWidth;
    OMGHeight = tableau.height = tableau.offsetHeight;

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
console.log(dataOMGSaison);

/*Générateur de OMG en fonction du nombre donné */
function generateOMG(amount, type){
  amount = amount / 4;
  for(let z =0; z<amount; z++){
    let OMG = document.createElement("span");
    if(type == "book"){
      OMG.style.color = "#3164CF";
      OMG.style.fontFamily = "Times New Roman";
      OMG.style.fontSize = "36px";
    }else if(type == "serie"){
      OMG.style.color = "#E7211E";
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


function generateOMG3(amount, type){
  amount = amount / 4;
  if(type == "serie"){
    if(compteurS>amount){
      var supprS = document.getElementsByClassName('serie');
      stackS = Math.round(compteurS - amount);
      for(let m = 0; m<stackS; m++){
        supprS[0].parentNode.removeChild(supprS[0]);
      }
    }else{
      let comparS = amount - compteurS;
      for(let z = 0; z<comparS; z++){ 
        let OMG = document.createElement("span");
        OMG.classList.toggle("serie");
        OMG.style.color = "#E7211E";
        OMG.style.fontFamily = "Rock Salt";
        OMG.style.fontSize = "24px";
        OMG.innerText = "OMG";
        OMG.style.position ="absolute";
        OMG.style.bottom = getRandomInt(OMGHeight * ratioHeightGeneratorOMG).toString() + "px";
        OMG.style.left=getRandomInt(OMGWidth * ratioHWidthGeneratorOMG).toString() + "px";
        OMG.classList.toggle("OMGspan");
        OMGContainer.appendChild(OMG);
      }
    }
  }
  if(type == "book"){
    if(compteurL>amount){
      var supprL = document.getElementsByClassName('book');
      stackL = Math.round(compteurL - amount);
      for(let m = 0; m<stackL; m++){
        supprL[0].parentNode.removeChild(supprL[0]);
      }
    }else{
      let comparL = amount - compteurL;
      for(let z = 0; z<comparL; z++){ 
        let OMG = document.createElement("span");
        OMG.classList.toggle("book");
        OMG.style.color = "#3164CF";
        OMG.style.fontFamily = "Times New Roman";
        OMG.style.fontSize = "36px";
        OMG.innerText = "OMG";
        OMG.style.position ="absolute";
        OMG.style.bottom = getRandomInt(OMGHeight * ratioHeightGeneratorOMG).toString() + "px";
        OMG.style.left=getRandomInt(OMGWidth * ratioHWidthGeneratorOMG).toString() + "px";
        OMG.classList.toggle("OMGspan");
        OMGContainer.appendChild(OMG);
      }
    }
  }

}


function generateS1(){
  compteurSerie();
  compteurBook();
  generateOMG3(dataOMGSaison[0][0],dataOMGSaison[0][1]);
  generateOMG3(dataOMGSaison[0][2],dataOMGSaison[0][3]);
}

function compteurSerie(){
  compteurS = document.querySelectorAll('.serie').length;
}
function compteurBook(){
  compteurL = document.querySelectorAll('.book').length;
}



/* Fonction pour sortir une valeur aléatoire, ensuite utilisée dans le placement des OMG générés */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*Initialisation du cas 1 pour qu'il y est quelque chose d'afficher avant l'interraction de l'utilisateur / éviter un cadre blanc au début */
function generateOMGS1(){
  compteurSerie();
  compteurBook();
  generateOMG3(dataOMGSaison[0][0], dataOMGSaison[0][1]);

}

leftsaisonmarker = 10;


/*Changer le nombre de OMG affiché et la saison affichée en fonction de la saison sélectionner */
cursor.oninput = (()=>{
  let value = cursor.value;
  switch(value){
    case "1":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[0][0], dataOMGSaison[0][1]);
      generateOMG3(dataOMGSaison[0][2], dataOMGSaison[0][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      console.log(saisonmark.style.left);
      break;
    case "2":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[1][0], dataOMGSaison[1][1]);
      generateOMG3(dataOMGSaison[1][2], dataOMGSaison[1][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      console.log(saisonmark.style.left);
      break;
    case "3":
      compteurSerie();
      compteurBook();   
      generateOMG3(dataOMGSaison[2][0], dataOMGSaison[2][1]);
      generateOMG3(dataOMGSaison[2][2], dataOMGSaison[2][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "4":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[3][0], dataOMGSaison[3][1]);
      generateOMG3(dataOMGSaison[3][2], dataOMGSaison[3][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }
      break;
    case "5":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[4][0], dataOMGSaison[4][1]);
      generateOMG3(dataOMGSaison[4][2], dataOMGSaison[4][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "6":
      generateOMG3(dataOMGSaison[5][0], dataOMGSaison[5][1]);
      generateOMG3(dataOMGSaison[5][2], dataOMGSaison[5][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "7":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[6][0], dataOMGSaison[6][1]);
      generateOMG3(dataOMGSaison[6][2], dataOMGSaison[6][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "8":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[7][0],dataOMGSaison[7][1]);
      generateOMG3(dataOMGSaison[7][2],dataOMGSaison[7][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "9":
      compteurSerie();
      compteurBook();
      generateOMG3(dataOMGSaison[8][0], dataOMGSaison[8][1]);
      generateOMG3(dataOMGSaison[8][2], dataOMGSaison[8][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    case "10":
      compteurSerie();
      compteurBook(); 
      generateOMG3(dataOMGSaison[9][0], dataOMGSaison[9][1]);
      generateOMG3(dataOMGSaison[9][2], dataOMGSaison[9][3]);
      saisonmarker.innerText = "Saison " + value;
      if(tailleTelephone.matches){
        saisonmark.style.top = (leftsaisonmarker * (value - 1) + 2).toString() + "%";
      }else{
        saisonmarker.style.left = (leftsaisonmarker * (value-1)).toString() + "%";
      }      break;
    default:
      break;
  }
})


responsiveOMGGenerator
dataRecup();
generateS1();
