function searchFunc() {
    var input, ul, li, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("body");
    li = ul.getElementsByTagName("th");
    for (i = 0; i < li.length; i++) {
        if (!li[i].innerHTML.toUpperCase().includes(filter)) {
            li[i].style.display = "none";
        }
        else {
            li[i].style.display = "";
        }
    }
} 