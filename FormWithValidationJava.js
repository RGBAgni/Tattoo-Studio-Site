function validate(){
    let errors = " ";

//Get the value of the user input and copy it into variable
    let firstName = document.getElementById("firstName").value;
//Condition
    if(firstName == ""){
errors = errors+"<li>Please enter your First Name</li>"
document.getElementById("firstName").classList.add("inputError");
    }

let lastName = document.getElementById("lastName").value;
    if (lastName == ""){
        errors = errors + "<li>Please enter your Last Name</li>"
        document.getElementById("lastName").classList.add("inputError");
    }

 let age = document.getElementsByName('age');
 let ageSelected = false;
 for(let i=0; i < age.length; i++){
    if(age[i].checked){
        ageSelected= true;
    }
 }
 if (!ageSelected){
    errors = errors + "<li>Please select your Age Group</li>"
    document.getElementById("age").classList.add("inputError");
 }


let email = document.getElementById("email").value;
    if (email == ""){
        errors = errors + "<li>Please enter your Email</li>";
        document.getElementById("email").classList.add("inputError");
    }

let phone = document.getElementById("phone").value;
    if (phone == ""){
        errors = errors + "<li>Please enter your Phone Number</li>";
        document.getElementById("phone").classList.add("inputError");
    }

let department = document.getElementById("department").value;
    if (department == ""){
        errors = errors + "<li>Please specify the Department</li>";
        document.getElementById("department").classList.add("inputError");
    }

let subject = document.getElementById("subject").value;
    if (subject == ""){
        errors = errors + "<li>Please enter the Subject</li>";
        document.getElementById("subject").classList.add("inputError");
    }

let message = document.getElementById("message").value;
    if (message == ""){
        errors = errors + "<li>Please enter your Message</li>";
        document.getElementById("message").classList.add("inputError");
    }

//If errors are not empty, meaning if we have errors, add them to the HTML list and show it
    if(errors != ""){
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorList").classList.remove("hidden");
        return false;
    }
//if user has no errors, hide the errorList again
    else{
        document.getElementById("errorList").classList.add("hidden");
        return true;
    }
}
