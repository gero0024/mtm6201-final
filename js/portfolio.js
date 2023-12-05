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


//INTERACTIVE MENU

let images = document.querySelectorAll('img')
const modal = document.querySelector('.modal')
const modal_image = document.querySelector('.modal-image')
const modal_text = document.querySelector('.modal-text')
const close = document.querySelector('.close')

console.log(images);

images.forEach(image => {

    image.addEventListener('click', () =>{
        modal_image.src = image.src
        modal.classList.add('display')
        modal_text.innerHTML = image.alt;

        close.addEventListener('click', () =>{
            modal.classList.remove('display')
        })
    })

});


//VIDEO MODAL
let videos = document.querySelectorAll('video')


videos.forEach(video => {

    video.addEventListener('mouseover', function(){
        this.play();
    })

    video.addEventListener('mouseout', function(){
        this.pause();
    })

})