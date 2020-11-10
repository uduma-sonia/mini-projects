const sounds = $(".sound");
const colorDivs = document.querySelectorAll(".sounds div");

const pauseIcons = document.querySelectorAll(".fa-pause-circle");
const playIcons = document.querySelectorAll(".fa-play-circle");


pauseIcons.forEach((pauseIcon) => {
  pauseIcon.classList.add("disappear");
});

colorDivs.forEach((div, index) => {

  function toggle() {
   
    s= sounds[index];
    if (s.currentTime == 0 && s.paused) {
      for (let i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
        pauseIcons[i].classList.add("disappear");
        playIcons[i].classList.remove("disappear");
        
      };
      s.play();
      pauseIcons[index].classList.remove("disappear");
      playIcons[index].classList.add("disappear");
      
    } else if (s.currentTime != 0 && !s.paused) {
      s.pause();
      pauseIcons[index].classList.add("disappear");
      playIcons[index].classList.remove("disappear");
      
    }else if (s.currentTime != 0 && s.paused) {
      s.play();
      pauseIcons[index].classList.remove("disappear");
      playIcons[index].classList.add("disappear");
      
    } 
  }

  sounds[index].addEventListener("ended", function(){
    pauseIcons[index].classList.add("disappear");
    playIcons[index].classList.remove("disappear");
  })



  div.addEventListener("click", toggle);
});





























