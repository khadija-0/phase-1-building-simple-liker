// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const modal = document.getElementById('modal')
modal.className = 'hidden'

const like = document.getElementsByClassName('like')

for(let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      modal.className = 'hidden'
      let heart = like[i].lastChild
      
      if(heart.innerHTML === EMPTY_HEART){
        heart.innerHTML = FULL_HEART        
        heart.classList.add('activated-heart')
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }      
    })
    .catch(() => {
      modal.classList.remove('hidden')      
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
