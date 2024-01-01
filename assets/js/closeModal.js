import videojs from "video.js";
$(function () {
    let modal = $('.modal')
    if (document.getElementById('video-js')) {
        var player = videojs('video-js');
        modal.on('click', function (e) {
            if (e.target == this) {
             player.pause();
            }
         })
    }

    $('.close-modal-btn').on('click', function () {
        modal.css("display", "none");
        player.pause();
    })
 
})