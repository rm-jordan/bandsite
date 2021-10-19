const concertList = [ 
  { 
    dateHeader: 'DATES',
    date: 'Mon Sept 06 2021',
    venueHeader: 'VENUE',
    venue: 'Ronald Lane',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  },
  {
    dateHeader: 'DATES',
    date: 'Tue Sept 21 2021',
    venueHeader: 'VENUE',
    venue: 'Pier 3 East',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  },
  {
    dateHeader: 'DATES',
    date: 'Fri Oct 15 2021',
    venueHeader: 'VENUE',
    venue: 'View Lounge',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  },
  {
    dateHeader: 'DATES',
    date: 'Sat Nov 06 2021',
    venueHeader: 'VENUE',
    venue: 'Hyatt Agency',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  },
  {
    dateHeader: 'DATES',
    date: 'Fri Nov 26 2021',
    venueHeader: 'VENUE',
    venue: 'Moscow Center',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  },
  {
    dateHeader: 'DATES',
    date: 'Wed Dec 15 2021',
    venueHeader: 'VENUE',
    venue: 'Press Club',
    locationHeader: 'LOCATION',
    location: 'San Francisco, CA'
  }
]

// console.table(concertList); <---works

//  all the above code will need to be deleted, just kept for a reference:

// This is my api key

// {
// "api_key": "aa471e79-f431-4c44-b489-7f88a7efba89"
// }




//lets grab the parent element
let parentList = document.querySelector('.shows__title');

// console.log(parentList); <---works

showsArray = () => {
  for(let i = 0; i < concertList.length; i++) {
    // console.log(concertList[i]) <---works

    //now lets create the div class shows__container

    const showsContainer = document.createElement('div');
    showsContainer.classList.add('shows__container');
    // console.log(showsContainer); <--works

    // create h4 class shows__header from array - dateHeader

    const dateTitle = document.createElement('h4');
    dateTitle.classList.add("shows__header");
    dateTitle.innerText = concertList[i].dateHeader;

    // create p - array - date
    const dateInfo = document.createElement('p');
    // may need to create class name here later
    dateInfo.innerText = concertList[i].date;


    // create h4 - shows__header - array - venueHeader
    const showVenue = document.createElement('h4');
    showVenue.classList.add('shows__header');
    showVenue.innerText = concertList[i].venueHeader;

    // create p from array - venue
    const venueTitle = document.createElement('p');
    //may need to create class name here later
    venueTitle.innerText = concertList[i].venue;

    // create h4 shows__header - array - locationHeader
    const showLocation = document.createElement('h4');
    showLocation.classList.add('shows__header');
    showLocation.innerText = concertList[i].locationHeader;

    //create p - array -location
    const locationTitle = document.createElement('p');
    // may need to create class name here later
    locationTitle.innerText = concertList[i].location;

    // create a - button  shows__btn 
    const showButton = document.createElement('button');
    showButton.innerText = 'BUY TICKETS';

    showButton.classList.add('shows__btn');


    
    showsContainer.appendChild(dateTitle);
    dateTitle.appendChild(dateInfo);
    showsContainer.appendChild(showVenue);
    showVenue.appendChild(venueTitle);
    showsContainer.appendChild(showLocation);
    showLocation.appendChild(locationTitle);
    showsContainer.appendChild(showButton);


    // glue everything together <---
    parentList.appendChild(showsContainer);
  }
}

showsArray();