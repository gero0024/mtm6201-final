//DROP DOWN MENU

const drop_menu_btn = document.querySelector('.drop-menu')

const mobile_menu_button = document.querySelector('.mobile-menu')

const mobile_menu_option = document.querySelector('.option')

//

drop_menu_btn.addEventListener('click', function(){
    drop_menu_btn.classList.toggle('active')
    mobile_menu_button.classList.toggle('active')
    mobile_menu_option.classList.toggle('active')
})


//PAUSE BUTTON

const pause_button = document.getElementById('pause')

const title_video_mobile = document.getElementById('title-video-mobile')

const title_video_desktop = document.getElementById('title-video-desktop')

const other_videos = document.querySelectorAll('.top-image')


pause_button.addEventListener('click', function(){
    if (title_video_mobile .paused) {
        title_video_mobile .play();
        
      } else {
        title_video_mobile .pause();
      }

      if (title_video_desktop .paused) {
        title_video_desktop .play();
        
      } else {
        title_video_desktop .pause();
      }
})



other_videos.forEach(other_videos =>{

    other_videos.addEventListener('mouseover', function(){
        this.play();
    })

    other_videos.addEventListener('mouseout', function(){
        this.pause();
    })

})






