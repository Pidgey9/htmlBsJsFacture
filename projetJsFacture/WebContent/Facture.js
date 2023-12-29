function Article(nom, quantite){
	this.nom = nom
	this.quantite = quantite
	this.prix
	this.tprix
	this.getString = function(){
		let str = "<tr><td>"+this.quantite+"</td><td>"+this.nom+"</td>"
		str += "<td>"+this.prix+"</td><td>"+this.tprix+"</td></tr>"
		return str;
	}
}
const liste = [];
function show(){
	//get id
	let nom = document.getElementById("select").value;
	let quantite = document.getElementById("quantite").value;
	let c1 = document.getElementById("c1");
	let c2 = document.getElementById("c2");
	let client = document.getElementById("client").value;
	let r = document.getElementsByName("gender");
	
	//error
	if(Number(quantite)<0){return alert("ERREUR : < 0")}
	
	//push article or add quantity
	let verif = true;
	for(var i in liste){
		if(nom == liste[i].nom){
			liste[i].quantite = Number(liste[i].quantite) + Number(quantite);
			liste[i].tprix = Number(liste[i].quantite) * Number(liste[i].prix)
			verif = false;
			break;
		}
		else{
			verif = true;
		}
	}
	if(verif == true){
		const art = new Article(nom,quantite)
		if(art.nom=="Chapeau"){
			art.prix = 10;
			art.tprix = Number(art.quantite) * Number(art.prix);
			}
		if(art.nom=="T-Shirt"){
			art.prix = 5;
			art.tprix = Number(art.quantite) * Number(art.prix);
			}
		if(art.nom=="Short"){
			art.prix = 20;
			art.tprix = Number(art.quantite) * Number(art.prix);
			}
		if(art.nom=="Chaussures"){
			art.prix = 100;
			art.tprix = Number(art.quantite) * Number(art.prix);
			}
		liste.push(art);
		verif = false;
	}
	
	
	//detail
	let x = document.getElementById("detail");
	if(c1.checked){	
		let str1 = "<table class='table table-dark table-bordered'><tr><th>Nbres</th><th>Articles</th>";
		str1 += "<th>Prix unitaire</th><th>Prix ligne</th></tr>";
		for(var i in liste){
			str1 += liste[i].getString(); 
		}
		x.innerHTML = str1;
	}
	else{
		x.innerHTML = "";
	}
	
	//total
	let y = document.getElementById("total");
	if(c2.checked){		
		let total = 0;
		for(var i in liste){
			total += liste[i].tprix; 
		}
		let str2 = "";
		if(r[0].checked){str2=r[0].value;} 
		if(r[1].checked){str2=r[1].value;} 
		str2 += " "+client+" - Total Facture : "+total+" euros";
		y.innerHTML = str2;
	}
	else{
		y.innerHTML = "";
	}
	
}
function reset(){
	liste.length = 0;
	let x = document.getElementById("detail");
	let y = document.getElementById("total");
	x.innerHTML = "";
	y.innerHTML = "";
}