function updateListbox(category) {
  var options = [
    { value: "option1", text: "journal1" },
    { value: "option2", text: "journal2" },
    { value: "option3", text: "journal3" },
    { value: "option4", text: "journal4" },
  ];

  var selectBox = document.getElementById(category);
  selectBox.innerHTML = "";
  var filteredOptions = options.filter(function (option) {
    return option.value.startsWith(category);
  });
  filteredOptions.forEach(function (option) {
    var newOption = document.createElement("option");
    newOption.value = option.value;
    newOption.text = option.text;
    selectBox.add(newOption);
  });
}
function setList() {
  var type = document.getElementById("article-type");
  for (var i = 0; i < articlename.options.length; i++) {
    var op = document.getElementById("op");
    if (type == "Journal") {
      updateListbox(o1);
      updateListbox(o2);
      updateListbox(o3);
      updateListbox(o4);
    }
  }
}
