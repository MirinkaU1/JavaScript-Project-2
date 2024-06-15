function inverses(chaine){
	var chaineInverse = '';

	for (index = chaine.length - 1; index >= 0; index--){
		chaineInverse = chaineInverse + chaine[index];
	}
	return 'L inverse de ' + chaine + ' est : ' + chaineInverse;
}
//Exemple :
console.log(inverses('MOHAMED'))