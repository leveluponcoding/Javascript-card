var quti = document.createElement("div")

for (var i = 1; i<=9; i++) {
	var karra = document.createElement('p');
	
	quti.appendChild(karra);

	for (var g = 1; g<=9; g++) {
		var hello = `${i}*${g}=${i * g}`;
		var matn = document.createTextNode(`${hello}`);
		karra.appendChild(matn);
		var b = document.createElement('br')
		karra.appendChild(b)

	}	
}
quti.style.backgroundColor = 'cyan';
karra.style.textAlign = "center";
quti.style.display = "grid";
quti.style.gridTemplateColumns = `repeat(3, 1fr)`;
document.getElementsByTagName('body')[0].appendChild(quti);