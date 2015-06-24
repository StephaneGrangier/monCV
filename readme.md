# Op�rations pour publier MonCV

## Environnement de d�veloppement "Yeoman"
Pour commencer nous avons t�l�charg� et install� les outils qui constituent notre environnment de d�veloppement (constitue une base pour la strucure de travail)

* Node 
Nous avons install� le serveur Node qui offre un environnement c�t� serveur qui nous permet aussi d'utiliser le langage JavaScript. Ceci sera la base pour l'environnement "Yeoman".

**Yeoman** comprend les outils suivants:
* **Yo**
Permet de cr�er la structure de base de notre projet (squelet) sur lequel on va s'appuyer pour ne pas partir de z�ro. De nombreux objets sont document�s et disponibles.

* **Gunt**
Permet d'ex�cuter des t�ches, ce qui permet notamment de consulter le r�sultat de nos d�veloppement directement dans le nagigateur (sans devoir faire des refresh continuellement).
La commande Build nous permet de g�n�rer un dossier "Dist" qui contient notre projet web optimis� pour la publication (le contenu intutile n'est pas pr�sent, pour que les fichier aillent une taille plus petite)

* **Bower**
Permet de g�r�er les d�pendances, met a jours les fichiers qui sont nos biblioth�ques de d�veloppement (Bootstrap, etc). On a �galement r�f�renc� des CSS mis a disposition par bootswatch

## Validation du code d�un fichier HTML ou CSS
Il est utile de v�rifier au fur et � mesure du d�veloppement si le code des pages HTML et des fichiers CSS sont valides. Pour ce faire il existe des [sites de validation] qui v�rifient la syntaxe des pages **! la page peut �tre affich�e dans le navigateur et toutefois contenir des erreurs d'o� la n�cessit� de cette v�rification**

## Publication sur Github
On peut cr�er un r�pertoire sur notre compte Github qui se nomme comme notre nom de Login, suivi de "github.io/" p.ex "stephanegrangier.github.io/". Ce r�petoire sera accessible par le web et constitue le dossier racine.
Il suffit de placer le contenu de notre projet web (index.html, images, css, etc) � cet emplacement.
Le site peut �tre consult� � l'adresse: http://stephanegrangier.github.io/


[sites de validation]:https://validator.w3.org/unicorn/
