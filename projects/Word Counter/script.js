const textbox=document.getElementById('textbox');


textbox.addEventListener('input',function(){
	let text= this.value;
	let char= text.length
	document.getElementById('character').innerText= char

    text = text.trim();
	let words= text.split(" ");
	let cleanList= words.filter(function(e){
		return e != "";
	})
	document.getElementById('word').innerText=cleanList.length;
}); 
