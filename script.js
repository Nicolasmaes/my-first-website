Mailto.onclick = function(){
	console.log('La fonction est bien appelée')
	document.getElementById("Mailto").innerHTML="A très bientôt !";
	console.log('après avoir ciblé élément');
}
window.onscroll = function (){
// ici les instructions
}
// alert('Bienvenue sur le site');
// alert('Encore bienvenue sur le site');

document.getElementById("leadmodal");
// cible l'élément leadmodal et l'enregistre avec une variable
var modal = document.getElementById("leadmodal");
// va cibler le bouton de refus
var btn = document.getElementById("btnno");
console.log(modal, 'console log de modal')
function modalHomePage(){
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
	modal.style.display = "block";
	window.onscroll = null;
	}
}
window.onscroll = function (){modalHomePage()};

btn.onclick= function(){
	modal.style.display = "none";
	// annule l'évènement window.onscroll
}


//if(	/* une ou plusieurs conditions à réuninr */
//	){
//	/* une ou plusieurs conséquences */
//	}