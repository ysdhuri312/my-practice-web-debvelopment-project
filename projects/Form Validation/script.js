let username= document.getElementById('name');
let password= document.getElementById('pass');
let flag=1;

function formValidation(){
	if(username.value == ""){
		document.getElementById('user-error').innerText= "Username is Empty";
		flag=0;
	}else if(username.value.length < 3){
		document.getElementById('user-error').innerText= "Username require min 3-Characters";
		flag=0;
	}else{
		document.getElementById('user-error').innerText= "";
		flag=1;
	}

	if(password.value == ""){
		document.getElementById('pass-error').innerText= "Password is Empty";
		flag = 0;
	}else{
		document.getElementById('pass-error').innerText= "";
		flag = 1;
	}

	if(flag){
		return true;
	}else{
		return false;
	}

	
}

