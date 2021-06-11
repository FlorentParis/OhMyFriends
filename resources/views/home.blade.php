<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Reset CSS -->
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <!-- Fichier CSS - Style Main Homepage -->
    <link rel="stylesheet" href="{{ asset('assets/css/homeStyle.css') }}">
    <!-- Fichier CSS - Style Laptop Homepage -->
    <link rel="stylesheet" href="{{ asset('assets/css/homeStyleLaptop.css') }}">
    <title>Oh My Friends</title>
</head>
<body>
    <!-- Element HTML en hidden, servant a la récupération des datas en JS -->
    <input type="hidden" id="test" value="{{$data}}">
    <!-- Burger Menu -->
    <nav>
        <div id="burger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <!-- Menu De Navigation -->
    <section id="interphone">
        <div>
            <div>
                <div id="grillesContainer"></div>
                <div></div>
            </div>
            <div>
                <div class="btnContainer">
                    <span>Horloge</span>
                    <a href='#horlogeContainer'></a>
                </div>
                <div class="btnContainer">
                    <span>Impact culturel</span>
                    <a href ='#books'></a>
                </div>
                <div class="btnContainer">
                    <span>Personnages</span>
                    <a href='#persos'></a>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero : cadre + gond sur la droite -->
    <section id="hero">
        <div id="cadre">
            <img src="{{ asset('assets/img/cadre.png') }}" alt="">
            <div id="player">
                <div id="pause">
                    <img src="{{ asset('assets/img/Logo.png') }}" alt="">
                </div>
                <video class="player__video viewer" src="{{ asset('assets/video/compilOMG.mp4') }}"></video>
            </div>
        </div>
        <div class="gond">
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
        </div>
    </section>
    <!-- Horloge : Représentation Audience Moyenne, OMG en Millions dans les livres et OMG dans la saison choisie -->
    <section id="horlogeContainer">
        <div id="horloge">
            <div>
                <div id="montre">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="numberHorloge">S1</span>
                    <span class="numberHorloge">S2</span>
                    <span class="numberHorloge">S3</span>
                    <span class="numberHorloge">S4</span>
                    <span class="numberHorloge">S5</span>
                    <span class="numberHorloge">S6</span>
                    <span class="numberHorloge">S7</span>
                    <span class="numberHorloge">S8</span>
                    <span class="numberHorloge">S9</span>
                    <span class="numberHorloge">S10</span>
                    <div id="aiguille">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="horlogeTab">
                <span>Audience Moyenne</span>
                <div>
                    <span class="horlogeData">759.3 M</span>
                </div>
            </div>
            <div class="horlogeTab">
                <span>Dans les Livres</span>
                <div>
                    <span class="horlogeData">759.3 M</span>
                </div>
            </div>
            <div class="horlogeTab">
                <span>Dans la Saison</span>
                <div>
                    <span class="horlogeData">759.3 M</span>
                </div>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
        </div>
    </section>
    <!-- Post-it "fun" -->
    <div class="postit">
        <span></span>
        <p>Préparer une dinde pour Joey</p>
    </div>
    <!-- Section Books : Verrou, poignée, post-it et représentation visuel de la moyenne des omg/saison et omg dans les livres -->
    <section id="books">
        <div id="elePorte">
            <div id="verrou">
                <div id="verrouContent">
                    <div id="bouton">
                        <div></div>
                    </div>
                    <div id="ovale">
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="poignee">
                <div></div> <!-- Haut de poignée -->
                <div id="surface_poignee">
                    <div class="vis">
                        <span class="trou_vis">+</span>
                    </div>
                    <div class="vis">
                        <span class="trou_vis">+</span>
                    </div>
                    <div class="vis">
                        <span class="trou_vis">+</span>
                    </div>

                    <div class="vis">
                        <span class="trou_vis">+</span>
                    </div>
                    <div class="vis">
                        <span class="trou_vis">+</span>
                    </div>
                    <div id="boule"></div>
                    <div id="cache"></div>
                    <div id="serrure">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
                <div id="poignee_bas"></div>
            </div>
        </div>
        <div class="postit">
            <span></span>
            <span><span></span>Série</span>
            <span><span></span>Livres</span>
        </div>
        <div id="dataBooks">
            <div id="OMGContainer"></div>
            <input id="curseur" type="range" min="1" max="10" value="1" list="tickmarks">
            <datalist id="tickmarks">
                <option id="markS1" class="marksaison" value="1" label="Saison 1">
                <option id="markS2" class="marksaison" value="2" label="Saison 2">
                <option id="markS3" class="marksaison" value="3" label="Saison 3">
                <option id="markS4" class="marksaison" value="4" label="Saison 4">
                <option id="markS5" class="marksaison" value="5" label="Saison 5">
                <option id="markS6" class="marksaison" value="6" label="Saison 6">
                <option id="markS7" class="marksaison" value="7" label="Saison 7">
                <option id="markS8" class="marksaison" value="8" label="Saison 8">
                <option id="markS9" class="marksaison" value="9" label="Saison 9">
                <option id="markS10" class="marksaison" value="10" label="Saison 10">
            </datalist>
            <div class="scotch"></div>
            <div class="scotch"></div>

        </div>
    </section>
    <!-- Section Persos : Graphique canvas representant le nombre de omg/personnages, photo "fun" et gond sur la droite -->
    <section id="persos">
        <div class="scotch"></div>
        <div id="dataPersos">
            <canvas id="myCanvas">
                <p>Add suitable fallback here.</p>
            </canvas>
        </div>
        <div id="photo">
            <div class="scotch"></div>
            <div class="scotch"></div>
            <img src="{{ asset('assets/img/pic1.jpg') }}" alt="Photo">
        </div>
        <div class="gond">
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
            <div class="vis">
                <span class="trou_vis">+</span>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer>
        <div>
            <img src="{{ asset('assets/img/Logo.png') }}" alt="">
        </div>
        <div>
            <p>Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Grande Ecole de l’école HETIC. Les contenus et données présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales</p>
        </div>
    </footer>
    <!-- Fichier JS - Script Main Homepage -->
    <script src="{{ asset('assets/js/homeScript.js') }}"></script>
</body>
</html>
