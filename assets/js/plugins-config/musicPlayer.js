import $ from 'jquery';
const audioPlayers = document.querySelectorAll('.audio-player');
const playButtons = document.querySelectorAll('.play-button');
const progressBars = document.querySelectorAll('.audio-progress');
const currentTimeDisplay = document.querySelectorAll('.current-time');
const durationDisplay = document.querySelectorAll(".duration-time");
const stickyProgressBars = document.querySelector('.sticky-audio-progress');
const stickyCurrentTimeDisplay = document.querySelector('.sticky-current-time');
const stickyDurationDisplay = document.querySelector(".sticky-duration-time");
const padcastSticky = document.querySelector('.sticky-padcast');
const stickyPlayButton = document.querySelector('.sticky-play-button');
const closeStickyBtn = document.querySelector('.close-sticky-btn');
let currentAudio = audioPlayers[0];
let currentPlayButton = playButtons[0];
const audioPauseFun = (audio, button) => {
  audio.pause();
  button.classList.remove('mn-pause-circle');
  button.classList.add('mn-play-circle');
}
const audioPlayFun = (audio, button) => {
  audio.play();
  button.classList.remove('mn-play-circle');
  button.classList.add('mn-pause-circle');
}
const showSticky = (audio, button) => {
  padcastSticky.classList.add('show');
  stickyPlayButton.classList.remove('mn-play-circle');
  stickyPlayButton.classList.add('mn-pause-circle');
}
const hideSticky = () => {
  padcastSticky.classList.remove('show');
  stickyPlayButton.classList.remove('mn-pause-circle');
  stickyPlayButton.classList.add('mn-play-circle');
}

if (padcastSticky) {
  stickyPlayButton.addEventListener('click', function () {

    if (currentAudio.paused) {
      audioPlayFun(currentAudio, currentPlayButton);
      stickyPlayButton.classList.remove('mn-play-circle');
      stickyPlayButton.classList.add('mn-pause-circle');
    } else {
      stickyPlayButton.classList.remove('mn-pause-circle');
      stickyPlayButton.classList.add('mn-play-circle');
      audioPauseFun(currentAudio, currentPlayButton);
    }
  });
  closeStickyBtn.addEventListener('click', function () {
    hideSticky()
    audioPauseFun(currentAudio, currentPlayButton);
  })
}

playButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    const audio = audioPlayers[index];
    if (padcastSticky) {
      if (audio.paused) {
        audioPlayFun(audio, button);
        showSticky(audio, button)
      } else {
        audioPauseFun(audio, button);
        hideSticky()
      }
    } else {
      if (audio.paused) {
        audioPlayFun(audio, button)
      } else {
        audioPauseFun(audio, button)
      }
    }
  });
});


audioPlayers.forEach((audio, index) => {
  audio.addEventListener('loadedmetadata', function () {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
    durationDisplay[index].textContent = durationMinutes + ":" + durationSeconds;
  });

  audio.addEventListener('timeupdate', function () {
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

    const progress = (audio.currentTime / audio.duration) * 100;
    progressBars[index].style.width = `${progress}%`;
    currentTimeDisplay[index].textContent = currentMinutes + ":" + currentSeconds;

    if (padcastSticky) {
      // Note: You need to recalculate durationMinutes and durationSeconds here.
      const durationMinutes = Math.floor(audio.duration / 60);
      const durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

      stickyDurationDisplay.textContent = durationMinutes + ":" + durationSeconds;
      stickyCurrentTimeDisplay.textContent = currentMinutes + ":" + currentSeconds;
      stickyProgressBars.style.width = `${progress}%`;
    }
  });

  audio.addEventListener('ended', function () {
    progressBars[index].style.width = '0';
    currentTimeDisplay[index].textContent = '00:00';
    playButtons[index].classList.remove('mn-pause-circle');
    playButtons[index].classList.add('mn-play-circle');

    if (padcastSticky) {
      stickyProgressBars.style.width = '0';
      stickyCurrentTimeDisplay.textContent = '00:00';
      hideSticky();
    }
  });
});



export function pauseAllAudio() {
  audioPlayers.forEach((audio, index) => {
    audio.pause();
  });
  playButtons.forEach((button, index) => {
    button.classList.remove('mn-pause-circle');
    button.classList.add('mn-play-circle');
  });
}

