// navigation bar
$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 50){
            $('.header').addClass("sticky-header");
        }else{
            $('.header').removeClass("sticky-header");
        }
        
        if(this.scrollY > 500){
            $('.return-home-btn').removeClass("none-rt-home-btn");
        }else{
            $('.return-home-btn').addClass("none-rt-home-btn");
        }
    })
});



// contact modal
const contactBtn = document.querySelector('.contact-btn')
const modal = document.querySelector('.modal')
const modalCtner = document.querySelector('.modal-container')
const closeModalBtn = document.querySelector('.ti-close')


function showContact(){
    modal.classList.remove('dis-none')
}

function closeContact(){
    modal.classList.add('dis-none')
}

contactBtn.addEventListener('click', showContact)
closeModalBtn.addEventListener('click', closeContact)
modal.addEventListener('click', closeContact)

modalCtner.addEventListener('click', function (event) {
    event.stopPropagation()
})
