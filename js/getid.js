export function transferProductID(){
    const elements = document.querySelectorAll('.image-link');
    elements.forEach(element => {
        element.addEventListener('click', ()=> {
            const id = element.querySelector('img').getAttribute('id');
            window.location.href = `jacket.html?id=${id}`
        })
    })
}
