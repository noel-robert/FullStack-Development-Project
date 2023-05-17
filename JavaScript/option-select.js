// move to utility

var journals = ["journal1", "journal2", "journal3"];
var books = ["book1", "book2", "book3"];

function updateListBox(articleNameList) {
    var pos = 0;
    var article_names = document.getElementById("article_names");
    article_names.innerHTML = "";
    while (pos < articleNameList.length) {
        var new_element = document.createElement("option");
        new_element.text = articleNameList[pos];
        article_names.add(new_element);
        pos++;
    }
}

function setList() {
    var article_type = document.getElementById("article_type").value;
    
    if (article_type == "article_book") {
        updateListBox(books);
    } else if (article_type == "article_journal") {
        updateListBox(journals);
    } else {
        alert("Article type needed");
    }
}