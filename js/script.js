const board = document.querySelector('.board')
const SQUARES_NUMBER = 3552

for (let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')
  board.append(square)
}

function setColor (event) {
  if (event.target === event.target.closest('.square')) {
    const arrColor = ['#FFFF33', '#FF3300', '#FF3399', '#9900CC', '#0000FF', '#00FF66']
    const colorIndex = Math.round(Math.random() * (arrColor.length - 1))
    event.target.style.cssText = `background-color: ${arrColor[colorIndex]}; box-shadow: 0 0 4px ${arrColor[colorIndex]}`
    // setTimeout(() => {event.target.style.backgroundColor = null
    //   event.target.style.boxShadow = null}, 2000)
  }
}

window.addEventListener('mousedown', (event) => {
  event.preventDefault()
  setColor(event)
  board.addEventListener('mouseover', setColor)
})
window.addEventListener('mouseup', () => {
  board.removeEventListener('mouseover', setColor)
})


