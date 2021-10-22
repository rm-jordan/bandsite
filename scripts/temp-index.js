// this is where I will temporarily do the JS for the index page and comments




const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';   

const apiURL = 'https://project-1-api.herokuapp.com'



// lets grab the parent element
let parentComment = document.querySelector('.comment__section'); 

// make this a function:
// remember you need to get the comments then make a seperate call in order to post the comments
// easier anyways

function compareStamp (a,b) {
  //1. <0 .. a will come first
  //2. 0 .. no change to current order
  //3. > 0 ..b will come first

  return b.timestamp - a.timestamp

}


// GET

function getAllComments () {
axios.get((`${apiURL}/comments/?api_key=${apiKEY}`)).then((response) => {
  const sortedComments = response.data.sort(compareStamp);
// console.log(response) // <-working
sortedComments.forEach((comments) => {
  // console.log(comments);
  console.log(comments);




const commentArticle = document.createElement('article');

commentArticle.classList.add('comment__container');

const commentImg = document.createElement('img');

commentImg.classList.add('comment__img');

commentImg.setAttribute('src', '../Assets/Images/default.png');

// create the div - comment__profile__container
const commentContainer = document.createElement('div')

commentContainer.classList.add('comment__profile__container');


// create the div - comment__profile__header
const profileHeader = document.createElement('div');
profileHeader.classList.add('comment__profile__header');



// create the h4 - user - array
const userName = document.createElement('h4')
// console.log('h4') <--works
userName.innerText = comments.name
// console.log(userName); <-- works

// create the p - date - array
const userDate = document.createElement('p')
userDate.innerText = new Date(comments.timestamp ).toLocaleDateString()


// create the p - enclosed in profile header - array comments
const userComments = document.createElement('p');
userComments.innerText = comments.comment


commentArticle.appendChild(commentImg); // <-- check
commentArticle.appendChild(commentContainer); //<--check
commentContainer.appendChild(profileHeader); // <--check
profileHeader.appendChild(userName); // <-- check
profileHeader.appendChild(userDate); // <--check
commentContainer.appendChild(userComments);


// glue everything together <---
parentComment.appendChild(commentArticle);

});

}).catch((error) => {
  console.log(error);
});
}

// Replace array parts

const myForm = document.getElementById('form');
let commentSection = document.querySelector('.comment__section')

myForm.addEventListener("submit", (e) => {
  e.preventDefault();



    axios.post(`${apiURL}/comments/?api_key=${apiKEY}`, {
      name: e.target.name.value,
      comment: e.target.comment__textarea.value
    }).then((response)=> {
      console.log(response)
      commentSection.innerHTML = '';
      getAllComments() //sort here
    }).catch((error) => {
      console.log(error);
    });

    //console.log(timeStamp)

    //timestamp.sort(compareStamp)

  


    // console.log(newestComment);
    // grab all comments and sort by timestamps
    //numArray.sort((a, b) => a - b); // For ascending sort
    // numArray.sort((a, b) => b - a); // For descending sort
  console.log(newestComment);

});
getAllComments();

//set width of the comment boxes 100% (max-width)


// test

// It might seem crazy what I am 'bout to say
// Sunshine she's here, you can take a break
// I'm a hot air balloon that could go to space
// With the air, like I don't care, baby by the way
// Huh (Because I'm happy)
// Clap along if you feel like a room without a roof
// (Because I'm happy)
