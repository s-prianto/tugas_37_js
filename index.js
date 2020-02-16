function tombol(){
	console.log(document.getElementsByTagName("button")[0]);
	console.log(document.getElementsByTagName("button"));
	var a = document.getElementsByTagName("button")[0];
	var b1 = a.attributes.getNamedItem("onclick").value;
	var b2 = a.attributes.item(0).name;
	var b3 = a.attributes.length;
	document.getElementById("contoh1").innerHTML=b1;
	document.getElementById("contoh2").innerHTML=b2;
	document.getElementById("contoh3").innerHTML=b3;

}
