function validateform(){
	var qt=document.quanti.quantity.value;
	
	if(qt==""||qt==0||isNaN(qt)){
		document.getElementById("q").innerHTML="<img src=\"../img/unchecked.gif\"/> <p>Input a number</p>";
		return false;
	}
}