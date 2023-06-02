// search_value textfield kept disabled until needed
function changeAccess() {
    var article_type = document.getElementById("article_type");
    var search_field = document.getElementById("search_field");
    

    if (article_type.value!="-" && search_field.value!="-")
        document.getElementById("search_value").disabled = false;
    else
        document.getElementById("search_value").disabled = true;
}