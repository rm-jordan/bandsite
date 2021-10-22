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

    // create shows header in h4 - innerText - string
    const dateTitle = document.createElement('h4');
    dateTitle.classList.add("shows__header");
    dateTitle.innerText = 'DATES';

     // create p - show.date
    const dateInfo = document.createElement('p');
     // may need to create class name here later
    let showDate = parseInt(shows.date)
    // console.log(showDate);
    dateInfo.innerText = new Date(showDate).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
    // new Date(comments.timestamp )

    
    // create shows header in h4 - innerText - string
    const showVenue = document.createElement('h4');
    showVenue.classList.add('shows__header');
    showVenue.innerText = 'VENUE';


    // create p from array - venue
    const venueTitle = document.createElement('p');
    //may need to create class name here later
    venueTitle.innerText = shows.place;

    // create h4 shows__header string - locationHeader
    const showLocation = document.createElement('h4');
    showLocation.classList.add('shows__header');
    showLocation.innerText = 'LOCATION';

    //create p - API - show.location
    const locationTitle = document.createElement('p');
    // may need to create class name here later
    locationTitle.innerText = shows.location;


    // create a - button  shows__btn 
    const showButton = document.createElement('button');
    showButton.innerText = 'BUY TICKETS';

    showButton.classList.add('shows__btn');



    showsContainer.appendChild(dateTitle);
    // glue everything together <---
    parentItem.appendChild(showsContainer);
    dateTitle.appendChild(dateInfo);
    showsContainer.appendChild(showVenue);
    showVenue.appendChild(venueTitle);
    showsContainer.appendChild(showLocation);
    showLocation.appendChild(locationTitle);
    showsContainer.appendChild(showButton);

  });

}).catch((error)=> {
  console.log(error)
});






