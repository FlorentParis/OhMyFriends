<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Reset CSS -->
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <!-- Fichier CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/404.css') }}">
    <link rel="shortcut icon" href="{{ asset('assets/img/cadre.png') }}" type="image/x-icon">
    <title>Oh My Friends !</title>
</head>
<body>
    <div id="retour">
        <a href="/">◄ Retour à l'accueil</a>
    </div>
    <div id="test">
        <div id="cadre">
            <img src="{{ asset('assets/img/cadre.png') }}" alt="">
            <img src="{{ asset('assets/img/juda.png') }}" alt="" id="juda">
        </div>
        <p id="erreur">404</p>
    </div>

    <!-- Fichier JS-->
    <script type="module" src="{{ asset('assets/js/404.js') }}"></script>
</body>
</html>