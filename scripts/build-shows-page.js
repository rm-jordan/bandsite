const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';   

const apiURL = 'https://project-1-api.herokuapp.com'

// parent element

let parentItem = document.querySelector('.shows__title');


axios.get(`${apiURL}/showdates/?api_key=${apiKEY}`)
.then((response)=> {

  response.data.forEach((shows) => {
    console.log(shows);

    const showsContainer = document.createElement('div');
    showsContainer.classList.add('shows__container');

    const dateTitle = document.createElement('h4');
    dateTitle.classList.add("shows__header");
    dateTitle.innerText = 'DATES';


    const dateInfo = document.createElement('p');
    let showDate = parseInt(shows.date)

    dateInfo.innerText = new Date(showDate).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });

    
    const showVenue = document.createElement('h4');
    showVenue.classList.add('shows__header');
    showVenue.innerText = 'VENUE';

    const venueTitle = document.createElement('p');
    venueTitle.innerText = shows.place;

    const showLocation = document.createElement('h4');
    showLocation.classList.add('shows__header');
    showLocation.innerText = 'LOCATION';

    const locationTitle = document.createElement('p');
    locationTitle.innerText = shows.location;


    const showButton = document.createElement('button');
    showButton.innerText = 'BUY TICKETS';

    showButton.classList.add('shows__btn');


    showsContainer.appendChild(dateTitle);
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