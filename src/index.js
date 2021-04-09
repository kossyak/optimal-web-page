import './styles.css'
import './styles/barMenu.css'
import './styles/arrow.css'
const wr = document.querySelector('.wallpaper')
const logo = document.querySelector('.bottom-logo')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const swiper = document.querySelector('.swiper')

const mobileBar = document.querySelector('.mobile-bar')
const topBar = document.querySelector('.top-bar')

mobileBar.onclick = () => {
  topBar.classList.toggle('show')
  mobileBar.classList.toggle('active')
}
// const searchClose = document.querySelector('.search-close')
// const searchWindow = document.querySelector('.search-window')
//
//
// searchClose.onclick = () => {
//   searchWindow.style.display = 'none'
// }

logo.onclick = () => {
  wr.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
prev.onclick = () => {
  swiper.scrollTo({
    top: 0,
    left: swiper.scrollLeft - (swiper.firstElementChild.clientWidth + 16),
    behavior: 'smooth'
  })
}

next.onclick = () => {
  console.log(swiper.firstElementChild.clientWidth)
  swiper.scrollTo({
    top: 0,
    left: swiper.scrollLeft + (swiper.firstElementChild.clientWidth + 16),
    behavior: 'smooth'
  })
}
let timer = null

swiper.onscroll = () => {
  if (timer !== null) {
    clearTimeout(timer)
  }
  prev.disabled = true
  next.disabled = true
  timer = setTimeout(() => {
    prev.disabled = false
    next.disabled = false
  }, 50)
}

window.onresize = () => {
  swiper.scrollTo({
    top: 0,
    left: 0
  })
}