// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleLike(){
  likeGlyph.forEach((heart) => {
    heart.addEventListener('click',()=> {
      mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART){
          heart.textContent = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.textContent = EMPTY_HEART
          heart.className = ""
        }
      })
      .catch((error) => {
        const modal = document.querySelector('#modal')
        modal.className = ""
        console.log(error)
        modal.textContent = error
      })
    })
  })
}

const likeGlyph = document.querySelectorAll(".like-glyph")


// fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
//   .then((res)=> res.json())
//   .then((data) => handleData(data))

// function handleData(data){
//   console.log(data.description)
// }

// reuqest response cycle. 

handleLike()

// function heartClicked(e){
//   const heart = e.target;
//   mimicServerCall()
//     .then(function() {
//       heart.innerText = FULL_HEART
//       e.target.classList.add("activated-heart") 
//     })
//     .catch(function(serverMessage) {
//       errorModal.classList.remove("hidden")
//       alert("Random server error. Try again.")
//       setTimeout()
//       alert(serverMessage)
//       let errorModal = document.getElementById("modal")
//     })
//   }
// heartClicked()


// mimicServerCall(url="http://mimicServer.example.com", config={}){
//   if (mimicServerCall === isRandomFailure){
//     .then(function (response){
//       return response.json();
//     })
//     .catch(function(error) => error{})
//   }
// }



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
