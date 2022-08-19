function changeBG(color){
	document.body.style.backgroundColor= color;
	const txt= document.getElementsByClassName('text')
	if(color=='black'){
		for(let e of txt){
			e.style.color='white';
		}
	}else{
		for(let e of txt){
			e.style.color='black';
		}
	}
}