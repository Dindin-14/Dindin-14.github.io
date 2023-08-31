const hbd = document.querySelector('.hbd h1');
const hbdNew = [...hbd.textContent].map(h => `<span>${h}</span>`).join('')
hbd.innerHTML = hbdNew

const hide = document.querySelectorAll('.hide');
const button = document.querySelector('.tombol a')
button.addEventListener('click', (e) => {
    hide.forEach(e => e.style.opacity = 1)
    e.preventDefault()
})