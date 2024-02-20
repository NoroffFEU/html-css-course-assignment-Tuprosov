function transferPageName() {
    const links = Array.from(document.querySelectorAll('.nav__link'));
    const filtered = links.filter(link => link.textContent === 'Men' || link.textContent === 'Women');
    filtered.forEach(element => {
        element.addEventListener('click', ()=> {
            const name = element.textContent;
            window.location.href = `list.html?name=${name}`
        })
    })
}
transferPageName();