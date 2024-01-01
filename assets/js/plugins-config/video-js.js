import videojs from "video.js";

var options = {};

if (document.getElementById('video-js')) {
  var player = videojs('video-js', options, function onPlayerReady() {
    videojs.log('Your player is ready!');
    const allOverlayList = document.querySelectorAll('.video-js-overlay');
    // In this context, `this` is the player that was created by Video.js.
  
    this.on('play', function () {
      allOverlayList.forEach(element => {
        element.classList.add('d-none')
      });
    })
    // How about an event listener?
    this.on('ended', function () {
      // allOverlayList.forEach(element => {
      //   element.classList.remove('d-none')
      // });
      videojs.log('Awww...over so soon?!');
    });
  });
}


