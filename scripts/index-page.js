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

// console.table(commentList);  // <--works


// lets grab the parent element
let parentComment = document.querySelector('.comment__section');
// console.log(parent);  <---works

function commentsArray() {
  for(let i = 0; i < commentList.length; i++){
    //create article
    // console.log(commentList[i]); //iterate through the list
    //above iteration is working

    //now create the article element
    const commentArticle = document.createElement('article');
    // console.log(commentArticle); // <---works
    commentArticle.classList.add('comment__container');
    // console.log(commentArticle); <---works

    //img element
    const commentImg = document.createElement('img');
    // console.log(commentImg); <---works
    commentImg.classList.add('comment__img');
    // console.log(commentImg); <--works
    commentImg.setAttribute('src', '../Assets/Images/default.png');

    // create the div - comment__profile__container
    const commentContainer = document.createElement('div')
    // console.log(commentContainer);  <--works
    commentContainer.classList.add('comment__profile__container');
    // console.log(commentContainer); <--works

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
    commentArticle.appendChild(commentImg);
    commentArticle.appendChild(commentContainer);
    commentArticle.appendChild(profileHeader);
    commentArticle.appendChild(userName);
    commentArticle.appendChild(userDate);
    commentArticle.appendChild(userComments);

    //need to ask questions about the code, mostly working but for some reason does not line up properly

    // glue everything together <---
    parentComment.appendChild(commentArticle);

  }

}

commentsArray();