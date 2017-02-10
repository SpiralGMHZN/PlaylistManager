
var audio = document.getElementById("audio");
window.song = 1;
console.log("PM: Initialized")


function ChooseNextSong(){
  if (window.song >=window.songs){
    window.song = 1;
  } else {
    window.song = window.song+1;
  }
}

audio.addEventListener("ended", function(){
     audio.currentTime = 0;
     ChooseNextSong()
     audio.src=window.path+window.song+".mp3";
     console.log("Now Playing "+window.path+window.song+".mp3")
     audio.play()
});
