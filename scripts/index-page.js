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


//lets grab the parent element
let parent = document.querySelector('.comments')

//create the child element

let header = document.createElement('h2')
header.classList.add('comments__header')

//put the child inside by calling .appendChild

parent.appendChild(header);

// console.log(header)

// so this above works,just need to add something to the header

let testComment = document.querySelector('.comments__header');
testComment.innerText = "Join the Conversation";


//so do I have to do this every single element within the comments box? // can I create certain parts in HTML and then appendChild to them?

// say create the header I did above and a container in HTML, then add the bits inside using JS?, is the form created in JS? 


// so what we would do is use a loop to add to this comments section by appending to the html above?

// 