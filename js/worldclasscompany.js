 function validateFindOutForm() {
    
   var x = document.getElementById("name").value;
   var a = document.getElementById("phone").value;
   var y = document.getElementById("email").value;
   var z = document.getElementById("propertyname").value;
   var b = document.getElementById("message").value;
   console.log("yes");
	if(x==""){
	    document.getElementById("errorname").innerHTML = "&#9888; please enter Name.";       
	}else{ document.getElementById("errorname").innerHTML = "";}
	
    if (a=="") {       
        document.getElementById("errorphone").innerHTML = "&#9888; Please enter phone.";       
    } else{ document.getElementById("errorphone").innerHTML = "";} 
	
    if (y=="") {        
        document.getElementById("erroremail").innerHTML = "&#9888; Please enter email.";              
    } else{ document.getElementById("erroremail").innerHTML = "";}
  	
    if (z=="") {        
        document.getElementById("errorpropertyname").innerHTML = "&#9888; Please enter property.";               
    }else{ document.getElementById("errorpropertyname").innerHTML = "";}
	
	if (b=="") {        
        document.getElementById("errormessage").innerHTML = "&#9888; Please enter message.";               
    }else{ document.getElementById("errormessage").innerHTML = "";}
	
    if(x==""||a==""||y==""||z==""||b==""){ return false;}
	else{
		if (isNaN(a) || a.length < 10 || a.length > 10) {
        
        document.getElementById("errorphone").innerHTML = "&#9888; Not a valid phone no.";
        return false;
        
    }else{ document.getElementById("errorphone").innerHTML = "";}
	if(true){
	     console.log("noooo");
		 document.getElementById("contactbox").innerHTML = "";
    	document.getElementById("thankyoumsg").innerHTML = "Thanks for showing interest. we will get back to you soon.";
	    
		return false;
	}
	}
    
}
function changepropertya() {  
    document.getElementById("color1").style.backgroundColor = "#333333"; 
    document.getElementById("color2").style.backgroundColor = "#8d8989";
	document.getElementById("color3").style.backgroundColor = "#8d8989";
	document.getElementById("color4").style.backgroundColor = "#8d8989";
	document.getElementById("color5").style.backgroundColor = "#8d8989";
	document.getElementById("color6").style.backgroundColor = "#8d8989";	
    document.getElementById("a").style.display = "block";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "none";
	document.getElementById("e").style.display = "none";
	document.getElementById("f").style.display = "none";
}
function changepropertyb() {  
	document.getElementById("color1").style.backgroundColor = "#8d8989"; 
    document.getElementById("color2").style.backgroundColor = "#333333";
	document.getElementById("color3").style.backgroundColor = "#8d8989";
	document.getElementById("color4").style.backgroundColor = "#8d8989";
	document.getElementById("color5").style.backgroundColor = "#8d8989";
	document.getElementById("color6").style.backgroundColor = "#8d8989";  
    document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "block";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "none";
	document.getElementById("e").style.display = "none";
	document.getElementById("f").style.display = "none";
}
function changepropertyc() { 
	document.getElementById("color1").style.backgroundColor = "#8d8989"; 
    document.getElementById("color2").style.backgroundColor = "#8d8989";
	document.getElementById("color3").style.backgroundColor = "#333333";
	document.getElementById("color4").style.backgroundColor = "#8d8989";
	document.getElementById("color5").style.backgroundColor = "#8d8989";
	document.getElementById("color6").style.backgroundColor = "#8d8989";     
    document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "block";
	document.getElementById("d").style.display = "none";
	document.getElementById("e").style.display = "none";
	document.getElementById("f").style.display = "none";
}
function changepropertyd() {  
	document.getElementById("color1").style.backgroundColor = "#8d8989"; 
    document.getElementById("color2").style.backgroundColor = "#8d8989";
	document.getElementById("color3").style.backgroundColor = "#8d8989";
	document.getElementById("color4").style.backgroundColor = "#333333";
	document.getElementById("color5").style.backgroundColor = "#8d8989";
	document.getElementById("color6").style.backgroundColor = "#8d8989";  
    document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "block";
	document.getElementById("e").style.display = "none";
	document.getElementById("f").style.display = "none";
}
function changepropertye() { 
	document.getElementById("color1").style.backgroundColor = "#8d8989"; 
    document.getElementById("color2").style.backgroundColor = "#8d8989";
	document.getElementById("color3").style.backgroundColor = "#8d8989";
	document.getElementById("color4").style.backgroundColor = "#8d8989";
	document.getElementById("color5").style.backgroundColor = "#333333";
	document.getElementById("color6").style.backgroundColor = "#8d8989";   
    document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "none";
	document.getElementById("e").style.display = "block";
	document.getElementById("f").style.display = "none";
}
function changepropertyf() { 
	document.getElementById("color1").style.backgroundColor = "#8d8989"; 
    document.getElementById("color2").style.backgroundColor = "#8d8989";
	document.getElementById("color3").style.backgroundColor = "#8d8989";
	document.getElementById("color4").style.backgroundColor = "#8d8989";
	document.getElementById("color5").style.backgroundColor = "#8d8989";
	document.getElementById("color6").style.backgroundColor = "#333333";   
    document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "none";
	document.getElementById("e").style.display = "none";
	document.getElementById("f").style.display = "block";
}

function propcontact(){
     document.getElementById("propertyname").setAttribute("value", "4TH & RIO GRANDE - LZR"); 
}
function propcontactb(){
     document.getElementById("propertyname").setAttribute("value", "6TH & RIO GRANDE-RIO"); 
}