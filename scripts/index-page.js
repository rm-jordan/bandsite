let commentList = [
  {
    user: 'Connor Walton',
    date: '02/17/2021',
    comments: 'This is art. This is  inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
  },
  {user: 'Emilie Beach',
  date: '01/09/2021',
  comments: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'

  },
  {
    user: 'Miles Acosta',
    date: '12/20/2020',
    comments: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  }
]




// lets grab the parent element
let parentComment = document.querySelector('.comment__section'); 


function commentsArray() {
  for(let i = 0; i < commentList.length; i++){
    //create article

    //now create the article element
    const commentArticle = document.createElement('article');

    commentArticle.classList.add('comment__container');
  

    //img element
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
    userName.innerText = commentList[i].user;
    // console.log(userName); <-- works

    // create the p - date - array
    const userDate = document.createElement('p')
    userDate.innerText = commentList[i].date;


    // create the p - enclosed in profile header - array comments
    const userComments = document.createElement('p');
    userComments.innerText = commentList[i].comments;


    //remember this order does matter
    commentArticle.appendChild(commentImg); // <-- check
    commentArticle.appendChild(commentContainer); //<--check
    commentContainer.appendChild(profileHeader); // <--check
    profileHeader.appendChild(userName); // <-- check
    userName.appendChild(userDate); // <--check
    userDate.appendChild(userComments);

  

    // glue everything together <---
    parentComment.appendChild(commentArticle);

  }

}

commentsArray();


// add comments from form to box in index page
// make sure to make the styles similar

// records.unshift({
//   album: 'Abbey Road',
//   artist: "The Beatles",
//   year: 1969,
//   image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
// });


// recordsList.innerHTML = '';
// addElementsToHTML(records);

// const form = document.querySelector('.form-container');

// form.addEventListener("submit", function(event) {
// event.preventDefault();
// const record = {
//   album: event.target.album.value,
//   artist: event.target.artist.value,
//   year: event.target.year.value,
//   image: event.target.image.value
// }

// addElementsToHTML([record]);

// });

// so I need to attach the most recent comment to the top of the 
// "comment__section"

const myForm = document.getElementById('form');

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('form has been submitted');
  console.log(e.target.name.value);
  console.log(e.target.comment__textarea.value);
});
// console.log(myForm);