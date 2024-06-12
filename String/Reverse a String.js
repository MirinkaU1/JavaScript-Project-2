function inverses (chaine){
	var chaineInverse = '';
	for (let index = chaine.length- 1; index >= 0; index --){
		chaineInverse = chaineInverse + chaine[index];
	}
	return chaineInverse;
}