// this is where I will temporarily do the JS for the index page and comments




const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';   

const apiURL = 'https://project-1-api.herokuapp.com'



// lets grab the parent element
let parentComment = document.querySelector('.comment__section'); 

// make this a function:
// remember you need to get the comments then make a seperate call in order to post the comments
// easier anyways


// GET


axios.get((`${apiURL}/comments/?api_key=${apiKEY}`)).then((response) => {
// console.log(response) // <-working
response.data.forEach((comments) => {
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
// userName.innerText = comment[i].user;
// console.log(userName); <-- works

// create the p - date - array
const userDate = document.createElement('p')
// userDate.innerText = comment[i].date;


// create the p - enclosed in profile header - array comments
const userComments = document.createElement('p');
// userComments.innerText = comment[i].comments;


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

