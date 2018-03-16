function submitForm() {
    var firstName, lastName, age, yearsInSchool;

    firstName = document.forms["registration"]["FirstName"].value;
    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }

    lastName = document.forms["registration"]["LastName"].value;
    if (lastName == "") {
        alert("Last Name must be filled out");
        return false;
    }

    age = document.forms["registration"]["Age"].value;
    if (isNaN(age) || age == "") {
        alert("Age must be a number");
        return false;
    }
    if (age < 0) {
        alert("Age has to be greater than zero");
        return false;
    }

    var years = document.getElementsByName('YearsInSchool');

    yearsInSchool = getYearsInSchool(years);

    createResults(firstName, lastName, age, yearsInSchool);
}

function getYearsInSchool(years) {
    for (var i = 0, length = years.length; i < length; i++) {
        if (years[i].checked) {
            return years[i].value;
        }
    }
}

function createResults(firstName, lastName, age, yearsInSchool) {
    var label, text;
    var results = document.getElementById('results');
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    var fNameDiv = document.createElement("div");
    var lNameDiv = document.createElement("div");
    var ageDiv = document.createElement("div");
    var yearsDiv = document.createElement("div");

    var fNameLabel = document.createElement("label");
    fNameLabel.setAttribute("id", "entry-top");
    label = document.createTextNode("First Name");
    fNameLabel.appendChild(label);
    fNameDiv.appendChild(fNameLabel);

    var lNameLabel = document.createElement("label");
    label = document.createTextNode("Last Name");
    lNameLabel.appendChild(label);
    lNameDiv.appendChild(lNameLabel);

    var ageLabel = document.createElement("label");
    label = document.createTextNode("Age");
    ageLabel.appendChild(label);
    ageDiv.appendChild(ageLabel);

    var yearsLabel = document.createElement("label");
    label = document.createTextNode("Years In School");
    yearsLabel.appendChild(label);
    yearsDiv.appendChild(yearsLabel);

    var fNameText = document.createElement("p");
    fNameText.style.margin = "0px";
    fNameText.style.marginLeft = "10px";
    fNameText.style.fontSize = "12px";
    text = document.createTextNode(firstName);
    fNameText.appendChild(text);
    fNameDiv.appendChild(fNameText);

    var lNameText = document.createElement("P");
    lNameText.style.margin = "0px";
    lNameText.style.marginLeft = "10px";
    lNameText.style.fontSize = "12px";
    text = document.createTextNode(lastName);
    lNameText.appendChild(text);
    lNameDiv.appendChild(lNameText);

    var ageText = document.createElement("P");
    ageText.style.margin = "0px";
    ageText.style.marginLeft = "10px";
    ageText.style.fontSize = "12px";
    text = document.createTextNode(age);
    ageText.appendChild(text);
    ageDiv.appendChild(ageText);

    var yearsText = document.createElement("P");
    yearsText.style.margin = "0px";
    yearsText.style.marginLeft = "10px";
    yearsText.style.fontSize = "12px";
    text = document.createTextNode(yearsInSchool);
    yearsText.appendChild(text);
    yearsDiv.appendChild(yearsText);

    results.appendChild(fNameDiv);
    results.appendChild(lNameDiv);
    results.appendChild(ageDiv);
    results.appendChild(yearsDiv);

    var width = document.getElementById("form").clientWidth;

    results.style.width = width+"px";

    results.style.visibility = "visible";

}