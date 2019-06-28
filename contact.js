 //Styles the h1
var h1 = document.querySelector("h1");
h1.style.color = "#FF0000";
h1.style.textAlign="center";
var x = 0;
var array = Array();

// Function stores variable when you click save
function contact_function() {
	first_name = document.querySelector("#first_name").value;
	//alert(fname);
	second_name = document.querySelector("#second_name").value;
	Phone_number = document.querySelector("#phone_number").value;
	email = document.querySelector("#email").value;
	address = document.querySelector("#address").value;
	//Submitted = "true";

	if (first_name.length > 10 ) {
    	alert("The First name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (second_name.length >10) {
    	alert("The Second name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (first_name.length=="" || second_name.length=="" || phone_number.length==""|| email.length==""||address=="") {
    	alert("Name field can not be empty!");  
    	Submitted = "false";
	}
	else
	array[0] =first_name;
	array[1]=second_name;
	array[2]=email;
	array[3]=address;

	alert("Saved!");
	//alert(array[0]);
	

}
//Function to search through saved contacts
function search_function(){

 for (var y=0; y<array.length; y++){
 	var e=array[y];
 	
 //  contactFields.appendChild(div);
 }
 // contactFields.style.display = "block";
 //  var div = document.createElement("div");
 //  div.innerHTML = fname.value;
 document.getElementById("search").innerHTML = e;
}

