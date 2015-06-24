# Opérations pour publier MonCV

## Environnement de développement "Yeoman"
Pour commencer nous avons téléchargé et installé les outils qui constituent notre environnment de développement (constitue une base pour la strucure de travail)

* Node 
Nous avons installé le serveur Node qui offre un environnement côté serveur qui nous permet aussi d'utiliser le langage JavaScript. Ceci sera la base pour l'environnement "Yeoman".

**Yeoman** comprend les outils suivants:
* **Yo**
Permet de créer la structure de base de notre projet (squelet) sur lequel on va s'appuyer pour ne pas partir de zéro. De nombreux objets sont documentés et disponibles.

* **Gunt**
Permet d'exécuter des tâches, ce qui permet notamment de consulter le résultat de nos développement directement dans le nagigateur (sans devoir faire des refresh continuellement).
La commande Build nous permet de générer un dossier "Dist" qui contient notre projet web optimisé pour la publication (le contenu intutile n'est pas présent, pour que les fichier aillent une taille plus petite)

* **Bower**
Permet de géréer les dépendances, met a jours les fichiers qui sont nos bibliothèques de développement (Bootstrap, etc). On a également référencé des CSS mis a disposition par bootswatch

## Validation du code d’un fichier HTML ou CSS
Il est utile de vérifier au fur et à mesure du développement si le code des pages HTML et des fichiers CSS sont valides. Pour ce faire il existe des [sites de validation] qui vérifient la syntaxe des pages **! la page peut être affichée dans le navigateur et toutefois contenir des erreurs d'où la nécessité de cette vérification**

## Publication sur Github
On peut créer un répertoire sur notre compte Github qui se nomme comme notre nom de Login, suivi de "github.io/" p.ex "stephanegrangier.github.io/". Ce répetoire sera accessible par le web et constitue le dossier racine.
Il suffit de placer le contenu de notre projet web (index.html, images, css, etc) à cet emplacement.
Le site peut être consulté à l'adresse: http://stephanegrangier.github.io/


[sites de validation]:https://validator.w3.org/unicorn/
