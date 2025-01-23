///////////////////////////////////////////////////////////////////Matthews:



function validate(){
    let errors = "";

    // Get the value of the user input and copy it into variable
    let firstName = document.getElementById("firstName").value;

    // IF Condition to check if user value is empty
    if (firstName == ""){
        errors = errors + "<li>Please enter First Name</li>";
        document.getElementById("firstName").classList.add("inputError");
    }
    else{
        document.getElementById("firstName").classList.remove("inputError");
    }

    let lastName = document.getElementById("lastName").value;

    if (lastName == ""){
        errors = errors + "<li>Please enter Last Name</li>";
        document.getElementById("lastName").classList.add("inputError");
    }




    let age = document.getElementsByName('age');
    let ageSelected = false;
    for(let i = 0; i < age.length; i++){
        if(age[i].checked){
            ageSelected = true;
        }
    }
    if (!ageSelected){
        errors = errors + "<li>Please select Age Group</li>";
    }








    // If we have ANY errors, add them to the HTML list and show it
    if (errors != ""){
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorList").classList.remove("hidden");
        return false;
    }
    else{
        // If user has no errors, hide the errorList again
        document.getElementById("errorList").classList.add("hidden");
        return true;
    }


}