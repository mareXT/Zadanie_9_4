function drawTree(wys) {
	for (var i = 0; i <= wys; i++) {
		star = "";
		for (j = 1; j <= i; j++) {
			star += "*";
		}
		console.log(star);
	}
}

drawTree(5);