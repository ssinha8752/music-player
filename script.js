const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
  {
    name: '1',
    displayName: 'Floating with Cloud',
    artist: 'Nirvana - 1994',
  },
  {
    name: '2',
    displayName: 'Happiness Together',
    artist: 'Nirvana - 1994',
  },
  {
    name: '3',
    displayName: 'Harmony Symphony',
    artist: 'Nirvana - 1994',
  },
  {
    name: '4',
    displayName: 'In the Gentle Rain',
    artist: 'Nirvana - 1994',
  },
  {
    name: '5',
    displayName: 'Pathway to Peace',
    artist: 'Nirvana - 1994',
  },
  {
    name: '6',
    displayName: 'Rememberance',
    artist: 'Nirvana - 1994',
  },
  {
    name: '7',
    displayName: 'Resonance Within',
    artist: 'Nirvana - 1994',
  },
  {
    name: '8',
    displayName: 'Silences',
    artist: 'Nirvana - 1994',
  },
  {
    name: '9',
    displayName: 'Sweet Longings',
    artist: 'Nirvana - 1994',
  },
  {
    name: '10',
    displayName: 'The Local Train - Choo Lo',
    artist: 'Vaibhav Sinha',
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
  audio = new Audio();
  audio.src=music.src
  audio.loop=true
  console.log(audio)
  volume = document.getElementById("volume");
  volume.addEventListener("change", setVol =()=> {
  audio.volume = volume.value/100;
  console.log(audio.volume)
})
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log(songIndex)
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);

function openNav() {
  //opens side navbar by 70 percent
  document.getElementById("mySidenav").style.width = "80%" 

 //opens overlay display
  document.getElementById('backdrop').style.display = "block" 
}

function closeNav(i) {
  //closes side navbar totally
  document.getElementById("mySidenav").style.width = "0"
  var p=i-1;
  loadSong(songs[p])

  //removes overlay display
  document.getElementById('backdrop').style.display = "none"
}

function closeNav1() {
  //closes side navbar totally
  document.getElementById("mySidenav").style.width = "0"
  //removes overlay display
  document.getElementById('backdrop').style.display = "none"
}

function vol(){
  console.log('volume changed')
}
