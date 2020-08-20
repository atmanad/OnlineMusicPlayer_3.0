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

// sessionStorage for playTime
$('th').click(function () {
  sessionStorage.setItem("sId", "th#" + this.id);
  sessionStorage.setItem("id", this.id);
  sessionStorage.setItem("num", this.childNodes[2].innerHTML);
});

$(document).ready(function () {
  // play time tracker
  db.collection('playTime').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      var sId = doc.id.split('#');
      document.getElementById(sId[1]).childNodes[2].innerHTML = doc.data().playTime;
    });
  }).catch(error => { console.log(error.message); });

  // visitor count tracker
  var docRef = db.collection('visitorCount').doc('count');
  docRef.get().then(function (doc) {
    var num = doc.data().number;
    $('code').html(num);
    docRef.set({ number: num + 1 });
  }).catch(error => { console.log(error.message) });
});