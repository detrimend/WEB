$('#exampleButtonId').click(function() {
    var attributeContent = $('#imageId').attr("src");
    $(this).text(attributeContent);
});

$("#fontSizeChangeButtonId").click(function() {
    $("h2").css("font-size", "40px");  
});

$("#textButtonId").click(function() {
    $("#textButtonId").html("Hello Martin");
});

$("#imageId").click(function() {
    if($("#imageId").attr("src") == "images/sad.jpg"){
    $("#imageId").attr("src", "images/glad.jpg");}
    else if($("#imageId").attr("src") == "images/glad.jpg"){
    $("#imageId").attr("src", "images/sad.jpg");}
});

let valueField = $("#valueFieldId").text();
$("#increaseButtonId").click(function() {
    $("#valueFieldId").text(valueField++);
});

$("#decreaseButtonId").click(function() {
    $("#valueFieldId").text(valueField--);
});

$("li").click(function() {
    var idValue = $(this).attr("value");
    $("#spanFieldId").text(idValue);
});