<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Reset CSS -->
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <!-- Fichier CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/homeStyle.css') }}">

    <title>Oh My Friends</title>
</head>
<body>
    <nav>
        <div id="burger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <section id="interphone">
        
    </section>
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
                <span>Audience totale</span>
                <div>
                    <span>759.3 M</span>
                </div>
            </div>
            <div class="horlogeTab">
                <span>Dans les livres</span>
                <div>
                    <span>759.3 M</span>
                </div>
            </div>
            <div class="horlogeTab">
                <span>Dans la saison</span>
                <div>
                    <span>759.3 M</span>
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
    <div class="postit">
        <span></span>
        <p>Préparer une dinde pour Joey</p>
    </div>
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
                <div></div> <!-- Bas de poignée -->
                <div id="poignee_bas"></div>
            </div>
        </div>
        <div class="postit">
            <span></span>
            <span><span></span>Série</span>
            <span><span></span>Livres</span>
        </div>
        <div id="dataBooks">
            <div class="scotch"></div>
            <div class="scotch"></div>

        </div>
    </section>
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
    <footer>
        <div>
            <img src="{{ asset('assets/img/Logo.png') }}" alt="">
        </div>
        <div>
            <p>Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Grande Ecole de l’école HETIC. Les contenus et données présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales</p>
        </div>
    </footer>
    <script src="{{ asset('assets/js/homeScript.js') }}"></script>
</body>
</html>