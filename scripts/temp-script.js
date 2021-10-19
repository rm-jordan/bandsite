// this is a temporary JS file in order to work from scratch




// This is my api key

// {
// "api_key": "aa471e79-f431-4c44-b489-7f88a7efba89"
// }

const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';

const apiURL = 'https://project-1-api.herokuapp.com'

// parent element

let parentItem = document.querySelector('.shows__title');


axios.get(`${apiURL}/showdates/?api_key=${apiKEY}`)
.then((response)=> {
  // console.log(response); // <--works
  // console.log(response.data); // <--works

  //loop through the data array
  response.data.forEach((shows) => {
    console.log(shows);

    //need to create the element div class = 'shows__container'
    const showsContainer = document.createElement('div');
    showsContainer.classList.add('shows__container');

    // create shows header in h4
    const dateTitle = document.createElement('h4');
    dateTitle.classList.add("shows__header");
    dateTitle.innerText = 'DATES';

     // create p - array - date
    const dateInfo = document.createElement('p');
     // may need to create class name here later
    dateInfo.innerText = shows.date;

    


    showsContainer.appendChild(dateTitle);


    // glue everything together <---
    parentItem.appendChild(showsContainer);
    dateTitle.appendChild(dateInfo);

  });

}).catch((error)=> {
  console.log(error)
});





