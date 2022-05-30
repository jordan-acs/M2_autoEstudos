const button = document.querySelector('button')

const popup = document.querySelector('.popup-wrapper')
button.addEventListener('click',() => {
    popup.style.display = 'block'
})

function openYT() {
    window.open("www.google.com")
}
