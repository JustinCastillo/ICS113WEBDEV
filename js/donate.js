function validateform(){
	var name=document.sign.name.value;  
	var sex=document.sign.sex.value;
	var dob=document.sign.dob.value;
	var dod=document.sign.dod.value;
	var cod=document.sign.cod.value;
	
	if (name==null || name==""){  
		document.getElementById("u").innerHTML="<img src=\"../img/unchecked.gif\"\><p>Input name<\p>";  
		return false;
	}else {
		document.getElementById("u").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (sex==null || sex==""){  
		document.getElementById("s").innerHTML="<img src=\"../img/unchecked.gif\"\><p>Input sex<\p>";  
		return false;  
	}else  {
		document.getElementById("s").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if ( dob==null || dob==""){  
		document.getElementById("db").innerHTML="<img src=\"../img/unchecked.gif\"\><p>input date of birth<\p>";  
		return false;  
	}else  {
		document.getElementById("db").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (dod==null || dod==""){  
		document.getElementById("dd").innerHTML="<img src=\"../img/unchecked.gif\"\><p>Input date of death<\p>";  
		return false;  
	}else  {
		document.getElementById("dd").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (cod==null || cod==""){  
		document.getElementById("cd").innerHTML="<img src=\"../img/unchecked.gif\"\><p>Input cause of death<\p>";  
		return false;  
	}else  {
		document.getElementById("cd").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}

}  