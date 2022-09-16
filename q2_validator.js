//validate q2.html form
function validateForm() {

    var prefix = document.getElementById("prefix").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var org = document.getElementById("org").value;
    var title = document.getElementById("title").value;
    var relation = document.getElementById("relation").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var academic = document.querySelector(
        'input[name="academic"]:checked');
    var intellectual = document.querySelector(
        'input[name="intellectual"]:checked');
    var express = document.querySelector(
        'input[name="express"]:checked');
    var motivation = document.querySelector(
        'input[name="motivation"]:checked');
    var admit = document.querySelector(
        'input[name="admit"]:checked');
    var signature = document.getElementById("signature").value;

    if (prefix == "" || prefix == undefined) {
        alert("Please select prefix");
        return false;
    }

    if (firstName == "" || firstName == undefined) {
        alert("Please enter first name");
        return false;
    }

    if (lastName == "" || lastName == undefined) {
        alert("Please enter last name");
        return false;
    }

    if (org == "" || org == undefined) {
        alert("Please enter organization");
        return false;
    }

    if (title == "" || title == undefined) {
        alert("Please enter title");
        return false;
    }

    if (relation == "" || relation == undefined) {
        alert("Please enter relation");
        return false;
    }

    if (tel == "" || tel == undefined) {
        alert("Please enter telephone");
        return false;
    }

    if (tel.length != 10) {
        alert("Please enter 10 digits telephone");
        return false;
    }

    if (email == "" || email == undefined) {
        alert("Please enter email");
        return false;
    }

    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) {
        alert("Please enter valid email");
        return false;
    }

    if (academic == null) {
        alert("Please select academic");
        return false;
    }

    if (intellectual == null) {
        alert("Please select intellectual");
        return false;
    }

    if (express == null) {
        alert("Please select express");
        return false;
    }

    if (motivation == null) {
        alert("Please select motivation");
        return false;
    }

    if (admit == null) {
        alert("Please select admit");
        return false;
    }

    if (signature == "" || signature == undefined) {
        alert("Please enter signature");
        return false;
    }

    //log all

    console.log(prefix, firstName, lastName, org, title, relation, tel, email, academic.value, intellectual.value, express.value, motivation.value, admit.value, signature);
    //format and show all values in alert

    return true;

}

function display(){

    if(validateForm()){
        var prefix = document.getElementById("prefix").value;
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var org = document.getElementById("org").value;
        var title = document.getElementById("title").value;
        var relation = document.getElementById("relation").value;
        var tel = document.getElementById("tel").value;
        var email = document.getElementById("email").value;
    
        var academic = document.querySelector(
            'input[name="academic"]:checked');
        var intellectual = document.querySelector(
            'input[name="intellectual"]:checked');
        var express = document.querySelector(
            'input[name="express"]:checked');
        var motivation = document.querySelector(
            'input[name="motivation"]:checked');
        var admit = document.querySelector(
            'input[name="admit"]:checked');
        var signature = document.getElementById("signature").value;
    
        alert("\nPrefix: " + prefix
        + "\nFirst Name: " + firstName
        + "\nLast Name: " + lastName
        + "\nOrganization: " + org
        + "\nTitle: " + title
        + "\nRelation: " + relation
        + "\nTelephone: " + tel
        + "\nEmail: " + email
        + "\nAcademic: " + academic.value
        + "\nIntellectual: " + intellectual.value
        + "\nExpress: " + express.value
        + "\nMotivation: " + motivation.value
        + "\nAdmit: " + admit.value
        + "\nSignature: " + signature);
    }


}