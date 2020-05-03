var songs = ["Duniyaa - Luka Chuppi.mp3",
  "Con Calma - [musiqpool].mp3",
  "Galat Baat Hai.mp3",
  "Kabhi Jo Baadal Barse (Female)-Jackpot.mp3",
  "O Saki Saki - Batla House (2019).mp3",
  "Paagal - Badshah.mp3",
  "Psycho Saiyaan - Saaho (2019).mp3",
  "Sheher Ki Ladki - Khandaani Shafakhana (2019).mp3",
  "Shanivaar Raati (Remix) - [IndiaFunz.Com].mp3",
  "Kabhi Jo Baadal Barse",
  "Side To Side-Ariana Grande    Ft. Nicki Minaj (Remix) - [musiqpool]",
  "Billionera (Deejay Nini) - [musiqpool]",
  "I Can t Get Enough ( Letra) Ft. Tainy",
  "Love Dose   Yo Yo Honey Singh - [musiqpool]",
  "Lazy Lamhe - [musiqpool]",
  "Besharam - Tere Mohalle.mp3",

];

var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong();

function loadSong() {
  song.src = "songs/" + songs[currentSong];
  songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
  nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
  song.playbackRate = 1;
  song.volume = volumeSlider.value;
  song.play();
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

  } else {
    song.pause();
  }
}

function next() {
  currentSong = currentSong + 1 % songs.length;
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

function adjustVolume() {
  song.volume = volumeSlider.value;
}

function forward() {
  songs.playbackRate += 0.5;
}

function backward() {
  songs.playbackRate -= 0.5;
}

function mute() {
  song.volume = 0;
}

function full() {
  song.volume = 1;
}