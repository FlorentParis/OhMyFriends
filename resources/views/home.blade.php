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
    <section id="hero">
        <div id="cadre">
            <img src="{{ asset('assets/img/cadre.png') }}" alt="">
            <div class="player">
                <video class="player__video viewer" src="{{ asset('assets/video/compilOMG.mp4') }}"></video>
            </div>
        </div>
    </section>
    <section id="horloge">
        <div>
            <div id="montre">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span>S1</span>
                <span>S2</span>
                <span>S3</span>
                <span>S4</span>
                <span>S5</span>
                <span>S6</span>
                <span>S7</span>
                <span>S8</span>
                <span>S9</span>
                <span>S10</span>
            </div>
            <div></div>
        </div>
        <div>
            <span>Audience totale</span>
            <div>
                <span>759.3 M</span>
            </div>
        </div>
        <div>
            <span>Dans les livres</span>
            <div>
                <span>759.3 M</span>
            </div>
        </div>
        <div>
            <span>Dans la saison</span>
            <div>
                <span>759.3 M</span>
            </div>
        </div>
    </section>
    <div class="postit">
        <p>Préparer une dinde pour Joey</p>
    </div>
    <section id="books">
        <div id="elePorte">
            <div id="verrou">
                <div id="verrouContent">
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="poignee">

            </div>
        </div>
        <div class="postit">
            <p>Préparer une dinde pour Joey</p>
        </div>
        <div id="dataBooks">

        </div>
    </section>
    <section id="persos">
        <div id="dataPersos">

        </div>
        <div>

        </div>
    </section>
    <footer>
        <div>
        </div>
        <div>
        </div>
    </footer>
    <script src="{{ asset('assets/js/homeScript.js') }}"></script>
</body>
</html>