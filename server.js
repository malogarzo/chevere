var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Te ves Chevere!');
})

app.listen(3000, function (err) {
	if (err) return console.log('Mm..Algo no anda bien!'), process.exit(1);

	console.log('Chevere te está escuchando en el puerto 3000...');
})