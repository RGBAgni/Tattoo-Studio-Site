function validate(){
    let errors = " ";

//get the value of the user input and copy it into variable
    let firstName = document.getElementById("firstName").value;
//condition
    if(firstName == ""){
errors = errors+"<li>Please enter your First Name</li>"
document.getElementById("firstName").classList.add("inputError");
    }

    // get last name and check if it's empty
let lastName = document.getElementById("lastName").value;
    if (lastName == ""){
        errors = errors + "<li>Please enter your Last Name</li>"
        document.getElementById("lastName").classList.add("inputError");
    }

      // check if one radio button is selected
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

 // record email or check if it's empty
let email = document.getElementById("email").value;
    if (email == ""){
        errors = errors + "<li>Please enter your Email</li>";
        document.getElementById("email").classList.add("inputError");
    }

 // record phone nr or check if it's emptyy
let phone = document.getElementById("phone").value;
    if (phone == ""){
        errors = errors + "<li>Please enter your Phone Number</li>";
        document.getElementById("phone").classList.add("inputError");
    }

// check if a dept is chosen from dropdown options
let department = document.getElementById("department").value;
    if (department == ""){
        errors = errors + "<li>Please specify the Department</li>";
        document.getElementById("department").classList.add("inputError");
    }

// record subject or check if no characters were input
let subject = document.getElementById("subject").value;
    if (subject == ""){
        errors = errors + "<li>Please enter the Subject</li>";
        document.getElementById("subject").classList.add("inputError");
    }

// see if a message has any input
let message = document.getElementById("message").value;
    if (message == ""){
        errors = errors + "<li>Please enter your Message</li>";
        document.getElementById("message").classList.add("inputError");
    }

// check for input errors in the form. if yes, showe error message, if no, allow to submit form
    if(errors != ""){
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorList").classList.remove("hidden");
        return false;
    }
// if user has no errors, hide the errorList again
    else{
        document.getElementById("errorList").classList.add("hidden");
        return true;
    }
}
