# [JS Troubleshoot Checklist](./)

- [ ] `{}`, `[]`, `{}` manquants ?
  - Bien indenter le code avec des formatteurs de code :
	  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) pour [Visual Studio](https://visualstudio.microsoft.com/).
	  - [Prettier online](https://prettier.io/playground/).
- [ ] Le projet est lancé depuis un localhost ?
	- [Lancement d'un localhost](https://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) via le Terminal (Mac OS).
- [ ] Pas de changement après le rechargement de la page. Le cache est-il désactivé ?
	- [Désactiver le cache sur Google Chrome](https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development).
- [ ] Un chiffre est divisé par zéro ?
	- `let shit = 0; console.log(10/shit)` donnera `Infinity`.
- [ ] La page lag puis se freeze ?
	- Une boucle `for` ou `while` ne se termine jamais.
	- Il y a un "memory leak". Le code n'est pas optimisé et le "garbage collector" n'arrive pas à vider la mémoire qui sature. Comment diagnostiquer avec [Google devtools](https://developers.google.com/web/tools/chrome-devtools/memory-problems).
- [ ] Erreur dans la console : N'arrive pas à trouver un script.
	- L’ordre est souvent important dans le `index.html` : la balise `<script></script>` d'une librairie doit être placée au-dessus du script qui l'utilise.
- [ ] Les variables sont-elles toutes déclarées ?
	- Ecrire `use strict;` à la première ligne de votre code. Ça forcera à déclarer les variables : 
		```js
		let poop = 1;
		let wtf; wtf = 2;```
- [ ] Une librairie a été mise à jour ?
	-  Risque de non-compatibilité avec le code. Regarder les changements dans la documentation de la librairie. Ou télécharger une ancienne version.
- [ ] N'arrive pas à trouver l'origine de l'erreur ?
	- Parcourir le code à l'envers depuis la ligne de l'erreur pour chercher d'où elle vient.
- [ ] La variable est `undefined`  ?
	- Faire un `console.log(nomDeLaVariable)` avant chaque mention de la variable dans le code.
- [ ] J'ai lu la documentation.
