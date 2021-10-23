const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';   

const apiURL = 'https://project-1-api.herokuapp.com'


let parentComment = document.querySelector('.comment__section'); 

function compareStamp (a,b) {

return b.timestamp - a.timestamp

}

function getAllComments () {
axios.get((`${apiURL}/comments/?api_key=${apiKEY}`)).then((response) => {
const sortedComments = response.data.sort(compareStamp);

sortedComments.forEach((comments) => {

const commentArticle = document.createElement('article');

commentArticle.classList.add('comment__container');

const commentImg = document.createElement('img');

commentImg.classList.add('comment__img');

commentImg.setAttribute('src', '../Assets/Images/default.png');

const commentContainer = document.createElement('div')

commentContainer.classList.add('comment__profile__container');


const profileHeader = document.createElement('div');
profileHeader.classList.add('comment__profile__header');

const userName = document.createElement('h4')

userName.innerText = comments.name

const userDate = document.createElement('p')
userDate.innerText = new Date(comments.timestamp ).toLocaleDateString()

const userComments = document.createElement('p');
userComments.innerText = comments.comment


commentArticle.appendChild(commentImg); 
commentArticle.appendChild(commentContainer); 
commentContainer.appendChild(profileHeader); 
profileHeader.appendChild(userName); 
profileHeader.appendChild(userDate); 
commentContainer.appendChild(userComments);

parentComment.appendChild(commentArticle);

});

}).catch((error) => {
  console.log(error);
});
}


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
      getAllComments() 
    }).catch((error) => {
      console.log(error);
    });
});
getAllComments();