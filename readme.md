# Op�rations pour publier MonCV

## Environnement de d�veloppement "Yeoman"
Pour commencer nous avons t�l�charg� et install� les outils qui constituent notre environnment de d�veloppement (constitue une base pour la strucure de travail).
Le projet est plac� dans un r�pertoire "MonCV" qui contiendra les �l�ments n�cessaires � la cr�ation du projet web (pages web, css, images, etc.). Les commandes qui sont mentionn�es ci-dessous doivent �tres execut�es depuis ce r�pertoire.

* **Node.js et npm** 
Nous avons install� le serveur Node qui offre un environnement c�t� serveur qui nous permet aussi d'utiliser le langage JavaScript. Ceci sera la base pour l'environnement "Yeoman". Disponible ici: https://nodejs.org/

 En ex�cutant les commandes ci-dessous, nous allons ajouter les package n�cessaires pour notre projet (ils sont d�taill�es dans le chapitre suivant)

 ```sh
$ npm install -g yo bower grunt-cli  //-g ; installation de mani�re globale
$ npm install -g generator-webapp    //installe le g�n�rateur d'applic web
```

**Yeoman** comprend les outils suivants:
* **Yo**
Permet de cr�er la structure de base de notre projet (squelet) sur lequel on va s'appuyer pour ne pas partir de z�ro, c'est un assistant pour personaliser notre base de travail. De nombreux objets sont document�s et disponibles.

 ```sh
$ yo webapp        //d�marre l'assistant
 ```

* **Bower**
Est un gestionnaire de paquets, il permet de g�r�er les d�pendances (t�l�chargements), ce qui met a jours les fichiers qui sont nos librairies de d�veloppement (Bootstrap, etc). On a �galement r�f�renc� des CSS mis a disposition par bootswatch
```sh
bower install bootstrap --save         //ajout d'un composant (plug-in)
```

* **Gunt**
Est un gestionnaire de t�ches (ex�cuter des t�ches), ce qui permet d'automatiser des op�rations, notamment de consulter le r�sultat de nos d�veloppement directement dans le nagigateur (sans devoir faire des refresh continuellement).
La commande Build nous permet de g�n�rer un dossier "Dist" qui contient notre projet web optimis� pour la publication (le contenu intutile n'est pas pr�sent, pour que les fichier aillent une taille plus petite)
```sh
grunt serve   //d�marre le serveur, affiche le projet dans le navigateur
grunt build   //compile, optimise, fusionne le code pour publication (->dossier dist)
```

## Validation du code d�un fichier HTML ou CSS
Il est utile de v�rifier au fur et � mesure du d�veloppement si le code des pages HTML et des fichiers CSS sont valides. Pour ce faire il existe des [sites de validation] qui v�rifient la syntaxe des pages **! la page peut �tre affich�e dans le navigateur et toutefois contenir des erreurs d'o� la n�cessit� de cette v�rification**

## Publication sur Github
On peut cr�er un r�pertoire sur notre compte Github qui se nomme comme notre nom de Login, suivi de "github.io/" p.ex "stephanegrangier.github.io/". Ce r�petoire sera accessible par le web et constitue le dossier racine.
Il suffit de placer le contenu de notre projet web (index.html, images, css, etc) � cet emplacement.
Le site peut �tre consult� � l'adresse: http://stephanegrangier.github.io/


[sites de validation]:https://validator.w3.org/unicorn/
