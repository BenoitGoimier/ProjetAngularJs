OpenBeer
========

Pour utiliser le projet :
-------------------------

Creation de la base
-------------------
*Ouvrir le fichier "open-beer.sql"
    *copier le script
    *aller dans phpmyadmin (SANS créer de table) puis aller dns l'onglet sql
    *coller le script

---------

Base url
--------
*Aller dans le ficher :
    *my-open-beer-angular/base.html
    *changer "http://localhost/angularJs/" par la localisation du dossier "ProjetAngularJs"

---------

config rest js
--------------
*Aller dans le ficher :
    *my-open-beer-angular/js/config/configFactory.js
    *trouver la ligne "factory.server.restServerUrl=" (ligne 9)
    *changer "http://localhost/angularJs/" par la localisation du dossier "ProjetAngularJs"

---------

config phalcon
--------------
*Aller dans le fichier :
    *rest-open-beer/public/index.php
    *trouver la ligne ""host" =>" (ligne 21)
    *changer "localhost" par l'url de base du serveur