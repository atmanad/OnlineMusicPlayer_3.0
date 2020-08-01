var currentSong = 0;
currentSong = Number(sessionStorage.getItem("id"));
console.log(currentSong)
// sessionStorage.clear();
console.log(typeof currentSong);

var songs = [
    "Duniyaa - Luka Chuppi.mp3",
    "Con Calma.mp3",
    "Galat Baat Hai.mp3",
    "Kabhi Jo Baadal Barse (Female).mp3",
    "O Saki Saki - Batla House (2019).mp3",
    "Paagal - Badshah.mp3",
    "Psycho Saiyaan - Saaho (2019).mp3",
    "Sheher Ki Ladki - Khandaani Shafakhana (2019).mp3",
    "Shanivaar Raati(Remix).mp3",
    "Kabhi Jo Baadal Barse.mp3",
    "Side To Side-Ariana Grande.mp3",
    "Billionera (Deejay Nini) - [musiqpool].mp3",
    "I Can't Get Enough.mp3",
    "Love Dose Yo Yo Honey Singh.mp3",
    "Lazy Lamhe.mp3",
    "Besharam - Tere Mohalle.mp3",
    "Daru Badnaam_Remix.mp3",
    "Slow Motion_Remix.mp3",
    "Odhani_Tapori Mix.mp3",
    "Dil Mein Baji Guitar_Remix.mp3",
    "Bom Diggy_Club Mix.mp3",
    "Tamma Tamma Again_Dj Mix.mp3",
    "First Class_Remix.mp3",
    "O O Rangabati.mp3",
    "Nora Fatehi_Mashup.mp3",
    "Hauli Hauli_Remix.mp3",
    "Tum Hi Ho.mp3",
    "Zaroori Tha.mp3"
];
var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var nextSongTitle = document.getElementById('nextSongTitle');

var song = new Audio();

window.onload = loadSong();

function loadSong() {
    console.log(currentSong);
    song.src = "../songs/" + songs[currentSong];
    songTitle.textContent = songs[currentSong];
    if (currentSong == songs.length - 1)
        nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[0];
    else
        nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
    song.playbackRate = 1;
    song.play();
    document.getElementById("pp").src = "../images/pause.png";
    pp.style.transform = "scale(1)";
    setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 1000);

function updateSongSlider() {
    var c = Math.round(song.currentTime);
    songSlider.value = c;
    currentTime.textContent = convertTime(c);
    if (song.ended) {
        next();
    }
}

function convertTime(secs) {
    var min = Math.floor(secs / 60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}

function showDuration() {
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max", d);
    duration.textContent = convertTime(d);
}

function playOrPauseSong() {

    if (song.paused) {
        song.play();
        document.getElementById("pp").src = "../images/pause.png";
        pp.style.transform = "scale(1)";
    }
    else {
        song.pause();
        document.getElementById("pp").src = "../images/play.png";
        pp.style.transform = "scale(1.3)";
    }
}

function next() {
    currentSong++;
    if (currentSong == songs.length)
        currentSong = 0;
    loadSong();
}

function previous() {
    currentSong--;
    currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
    loadSong();
}

function seekSong() {
    song.currentTime = songSlider.value;
    currentTime.textContent = convertTime(song.currentTime);
}