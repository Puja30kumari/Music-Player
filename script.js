const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
  {
    title: "Relaxing Tune",
    artist: "Artist A",
    src: "song1.mp3",
    cover: "cover1.jpg",
  },
  {
    title: "Chill Beat",
    artist: "Artist B",
    src: "song2.mp3",
    cover: "cover5.jpg",
  },
  {
    title: "Upbeat Track",
    artist: "Artist C",
    src: "song3.mp3",
    cover: "cover7.jpg",
  },
];

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.innerText = song.title;
  artist.innerText = song.artist;
  cover.src = song.cover;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playBtn.innerText = "▶️";
  } else {
    audio.play();
    playBtn.innerText = "⏸️";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}

playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load first song
loadSong(currentSongIndex);
