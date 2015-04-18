function svalidateform(){
	var user=document.sign.username.value;  
	var pass=document.sign.password.value;
	var cpas=document.sign.cpassword.value;
	var inst=document.sign.institution.value;
	var emai=document.sign.emailadd.value;
	
	if (user==null || user==""){  
		document.getElementById("u").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input username<\pre>";  
		return false;
	}else {
		document.getElementById("u").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (pass==null || pass==""||pass.length<8){  
		document.getElementById("p").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input 8 character password<\pre>";  
		return false;  
	}else  {
		document.getElementById("p").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (cpas==null || cpas==""){  
		document.getElementById("c").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Retype password<\pre>";  
		return false;  
	}else  {
		document.getElementById("c").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (inst==null || inst==""){  
		document.getElementById("i").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input institute<\pre>";  
		return false;  
	}else  {
		document.getElementById("i").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (emai==null || emai==""){  
		document.getElementById("e").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input Email Address<\pre>";  
		return false;  
	}else  {
		document.getElementById("e").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if(pass.length<8){  
		document.getElementById("p").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input 8 character password<\pre>";  
		return false;  
	}else  {
		document.getElementById("p").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if(pass!=cpas){
		document.getElementById("c").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Retype password<\pre>";  
		return false;
	} {
		document.getElementById("c").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
}  
function lvalidateform(){
	var iuser=document.log.iusername.value;  
	var ipass=document.log.ipassword.value;
	
	if (iuser==null || iuser==""){  
		document.getElementById("iu").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input username<\pre>";  
		return false;
	}else {
		document.getElementById("iu").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
	if (ipass==null || ipass==""||ipass.length<8){  
		document.getElementById("ip").innerHTML="<img src=\"../img/unchecked.gif\"\> <pre>Input 8 character password<\pre>";  
		return false;  
	}else  {
		document.getElementById("ip").innerHTML="<img src=\"../img/checked.gif\"\>";  
	}
}