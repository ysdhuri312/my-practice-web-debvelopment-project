const celcius= document.getElementById('celcius');
const feranhite= document.getElementById('feranhite');

celcius.addEventListener('input',function(){
	feranhite.value= (this.value * 9/5) + 32;
	let f=feranhite.value;
	if(!Number.isInteger(f)){
		f=f.toFixed(4);
	}
})


feranhite.addEventListener('input',function(){
	celcius.value= (this.value - 32) * 5/9;	
	let c=celcius.value;
	if(!Number.isInteger(c)){
		c=c.toFixed(4);
	}
})