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

    <script src="{{ asset('assets/js/homeScript.js') }}"></script>
</body>
</html>