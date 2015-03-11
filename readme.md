OpenBeer
========

Pour utiliser le projet :
-------------------------

Creation de la base
-------------------
1. Ouvrir le fichier "open-beer.sql"
2. copier le script
3. aller dans phpmyadmin (**SANS** créer de table) puis aller dns l'onglet sql
4. coller le script

---------

Base url
--------
1. Aller dans le ficher :
2. my-open-beer-angular/base.html
3. changer "http://localhost/angularJs/" par la localisation du dossier "ProjetAngularJs"

---------

config rest js
--------------
1. Aller dans le ficher :
2. my-open-beer-angular/js/config/configFactory.js
3. trouver la ligne "factory.server.restServerUrl=" (ligne 9)
4. changer "http://localhost/angularJs/" par la localisation du dossier "ProjetAngularJs"

---------

config phalcon
--------------
1. Aller dans le fichier :
2. rest-open-beer/public/index.php
3. trouver la ligne ""host" =>" (ligne 21)
4. changer "localhost" par l'url de base du serveur