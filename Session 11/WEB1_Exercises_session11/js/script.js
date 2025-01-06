$.get("xml/groupMembers.xml", function (xml, status) {
    let firstname = $(xml).find("firstname");
    let displayName = $(firstname[0]).text();
    $("#textField1").html(displayName);

    let person = $(xml).find("person");
    let displayEyecolor = $(person[0]).attr("eyecolor");
    $("#textField2").html(displayEyecolor);
});

$.get("xml/groupMembers.xml", handleContent);
function handleContent(data, httpstatus){
    let result = "";
    let persons = $(data).find("person");
    for(let person of persons)
    {
        result += "<p>";
        result += "<b>" + "First Name: " + "</b>";
        result += $(person).find("firstname" ).text();
        result += "</p>";

        result += "<p>";
        result += "<b>" + "Last Name: " + "</b>";
        result += $(person).find("lastname" ).text();
        result += "</p>";

        result += "<p>";
        result += "<b>" + "Birthday: " + "</b>";
        result += $(person).find("birthday" ).text();
        result += "</p>";

        result += "<p>";
        result += "<b>" + "Nationality: " + "</b>";
        result += $(person).find("nationality" ).text();
        result += "</p>";

        result += "<p>";
        result += "<b>" + "Email: " + "</b>";
        result += $(person).find("email" ).text();
        result += "</p>";

        result+= "<br>";
    }
    $("#memberText").html(result);
}







