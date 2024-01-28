const openBtn = document.querySelector('.writeReview');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.closePopup')
const overlay = document.querySelector('.overlay');
const body = document.body


openBtn.addEventListener('click', openPopUp)
closeBtn.addEventListener('click', closePopUp)

function openPopUp() {  
    if (popup) {
        popup.classList.add('active')
        overlay.classList.add('active');
        body.classList.add('modal-open');
    }
}
function closePopUp() {
    if (popup) {
        popup.classList.remove('active')
        overlay.classList.remove('active');
        body.classList.remove('modal-open');
    }
}