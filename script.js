const cards = document.querySelectorAll('.memory-card')

const closeBtn = document.querySelector('#closeBtn')

const instructionDiv = document.querySelector('.instructions')

const aboutBtn = document.querySelector('.about')

aboutBtn.addEventListener('click', () => {
  instructionDiv.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  instructionDiv.classList.remove('show')
})

let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard() {
  if(lockBoard) return
  if (this === firstCard) return

  this.classList.toggle('flip')

    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this

        return

      } 
    hasFlippedCard = false
    secondCard = this
    
    checkForMatch()
}

function checkForMatch() {
  
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? disableCards() : unflipCards()
   
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
}

function unflipCards() {
  lockBoard = true

  setTimeout(function() {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')

    lockBoard = false
  }, 1500)     
}

function resetCard() {
  [hasFlippedCard, lockBoard] = [false, false]
  [firstCard, secondCard] = [null, null]
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
})()



cards.forEach(card => card.addEventListener('click', flipCard))

function checkForWin() {
  let answer = cards.forEach.classList.contains('flip')

  if (answer === true) {
    console.log('Function was exectuted!')
  } else if (answer === false) {
    return
  }
}

checkForWin()

