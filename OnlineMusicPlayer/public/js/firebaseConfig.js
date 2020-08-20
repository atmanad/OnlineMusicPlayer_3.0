var firebaseConfig = {
    apiKey: "AIzaSyCrEIQDafMxhqFiSCK-QmKkdQL5kESZ9cA",
    authDomain: "musicdilchahe.firebaseapp.com",
    databaseURL: "https://musicdilchahe.firebaseio.com",
    projectId: "musicdilchahe",
    storageBucket: "musicdilchahe.appspot.com",
    messagingSenderId: "414899831216",
    appId: "1:414899831216:web:b9f4a18c7347a8e1545675",
    measurementId: "G-0E03ZQBYEP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

// $('th').click(function () {
//     sessionStorage.setItem("sId", "th#" + this.id);
//     sessionStorage.setItem("id", this.id);
//     sessionStorage.setItem("num", this.childNodes[2].innerHTML);
//     var sId = sessionStorage.getItem("sId");
//     var num = sessionStorage.getItem("num");
//     num = parseInt(num);
//     db.collection('playTime').doc(sId).get().then(doc => {
//         console.log(1)
//         console.log(doc.data().playTime)
//     });
//     db.collection('playTime').doc(sId).set({
//         playTime: num + 1
//     }).catch(error => { console.log(error); });
// });

// $(document).ready(function () {
//     db.collection('playTime').get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             var sId = doc.id.split('#');
//             document.getElementById(sId[1]).childNodes[2].innerHTML = doc.data().playTime;
//         });
//     }).catch(error => { console.log(error); });
// });

// function loadPlayTime() {

// }
// loadPlayTime();