// search_value textfield kept disabled until needed
function changeAccess() {
    var article_type = document.getElementById("article_type");
    var search_field = document.getElementById("search_field");
    

    if (article_type.value!="-" && search_field.value!="-")
        document.getElementById("search_value").disabled = false;
    else
        document.getElementById("search_value").disabled = true;
}

function changeAccessEditPage() {
    var article_id = document.getElementById("article_id");

    if (article_id != "") {
        document.getElementById("new_name").disabled = false;
        document.getElementById("new_publicationDate").disabled = false;
        document.getElementById("author_id").disabled = false;
    } else {
        document.getElementById("new_name").disabled = true;
        document.getElementById("new_publicationDate").disabled = true;
        document.getElementById("author_id").disabled = true;
    }
}