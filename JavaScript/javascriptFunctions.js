// search_value textfield kept disabled until needed
function searchPage_accessToggle() {
    var article_type = document.getElementById("article_type");
    var search_field = document.getElementById("search_field");
    

    if (article_type.value!="-" && search_field.value!="-")
        document.getElementById("search_value").disabled = false;
    else
        document.getElementById("search_value").disabled = true;
}


// new_name, new_publicationDate, and author_id kept disabled until needed
function editPage_accessToggle() {
    var article_type = document.getElementById("article_type");
    var article_id = document.getElementById("article_id");


    if (article_id.value!="" && article_type.value!="-") {
        document.getElementById("new_name").disabled = false;
        document.getElementById("new_publicationDate").disabled = false;
        document.getElementById("author_id").disabled = false;
    } else {
        document.getElementById("new_name").disabled = true;
        document.getElementById("new_publicationDate").disabled = true;
        document.getElementById("author_id").disabled = true;
    }
}