function resultado() {
	var p1, p2, p3, p4, nota;
	 
	if (document.getElementById('p11').checked==true) {p1=1}
	else {p1=0}
	if (document.getElementById('p22').checked==true) {p2=1}
	else {p2=0}
	if (document.getElementById('p33').checked==true) {p3=1}
	else {p3=0}
	if (document.getElementById('p44').checked==true) {p4=1}
	else {p4=0}
	nota=p1+p2+p3+p4;
	alert(" Aciertos: " + nota);
	location.reload();
}