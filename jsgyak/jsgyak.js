var array = ['marvel', 'dc', 'netflix', 'bbc', 'hbo'];	//for előtt muszáj fent declarálni azt amit vizsgálok, mert különben undefined

var upper = '';

for (i = 0; i<array.length; i++){
	upper = upper + array[i].toUpperCase() + ', ';
	}


console.log(upper);
