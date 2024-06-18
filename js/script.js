var quti = document.createElement("div");
document.getElementsByTagName('body')[0].appendChild(quti);
document.getElementsByTagName('body')[0].style.backgroundColor = 'lightpink';
document.getElementsByTagName('body')[0].style.padding = '150px 750px';
document.getElementsByTagName('div')[0].style.backgroundColor = "white";
document.getElementsByTagName('div')[0].style.width = "400px";
document.getElementsByTagName('div')[0].style.height = "600px";
document.getElementsByTagName('div')[0].style.borderRadius = "15px";
document.getElementsByTagName('div')[0].style.boxShadow = "-24px -24px 2px rgba(255,255,255, 0.2)";
document.getElementsByTagName('div')[0].style.padding = "10px 30px";
var sarlavha = document.createElement('h1');
var sarlavhaMatn = document.createTextNode('Card');
sarlavha.appendChild(sarlavhaMatn);
quti.appendChild(sarlavha);
sarlavha.style.fontSize = '30pt';
sarlavha.style.fontFamily = '"Century Gothic", sans-serif';
var chiziq = document.createElement('hr')
quti.appendChild(chiziq);
chiziq.style.color = "red";
chiziq.style.height = "6px";
chiziq.style.backgroundColor = "red";
chiziq.style.border = "none";
chiziq.style.borderRadius = "5px";
var matn = document.createElement('p');
var matnMatni = document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
matn.appendChild(matnMatni);
quti.appendChild(matn);
matn.style.fontFamily = `'Century Gothic', sans-serif`;
matn.style.fontSize = '16pt';
var tugma = document.createElement('button');
var tugmaMatni = document.createTextNode('Next');
tugma.appendChild(tugmaMatni);
quti.appendChild(tugma);
tugma.style.backgroundColor = "lightpink";
tugma.style.border = "none";
tugma.style.width = '150px';
tugma.style.height = '50px';
tugma.style.color = 'white';
tugma.style.textTransform = 'uppercase';
tugma.style.margin = '5px 125px';
tugma.style.fontSize = '15pt';
