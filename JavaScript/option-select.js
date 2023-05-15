// function updateListbox(category) {
//   var options = [
//     { value: "option1", text: "journal1" },
//     { value: "option2", text: "journal2" },
//     { value: "option3", text: "journal3" },
//     { value: "option4", text: "journal4" },
//   ];

//   var selectBox = document.getElementById(category);
//   selectBox.innerHTML = "";
//   var filteredOptions = options.filter(function (option) {
//     return option.value.startsWith(category);
//   });
//   filteredOptions.forEach(function (option) {
//     var newOption = document.createElement("option");
//     newOption.value = option.value;
//     newOption.text = option.text;
//     selectBox.add(newOption);
//   });
// }

// function setList() {
//   var type = document.getElementById("article_type");
//   var articlename = document.getElementById("ärticle_name");

//   for (var i = 0; i < articlename.options.length; i++) {
//     var op = document.getElementById("op");
//     if (type == "Journal") {
//       updateListbox(o1);
//       updateListbox(o2);
//       updateListbox(o3);
//       updateListbox(o4);
//     }
//   }
// }


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