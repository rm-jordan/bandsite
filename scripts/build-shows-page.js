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
    locationTitle.innerText = concertList[i].venue;

    // create a - button - class - shows__btn 
    const showButton = document.createElement('a');
    showButton.innerText = 'BUY TICKETS';
    showButton.setAttribute('href', '#');
    showButton.classList.add('shows__btn');

    ///ask about whether or not they want us to use an a tag and style or if we can use an actual button -- if so change button 



    showsContainer.appendChild(dateTitle);
    showsContainer.appendChild(dateInfo);
    showsContainer.appendChild(showVenue);
    showsContainer.appendChild(venueTitle);
    showsContainer.appendChild(showLocation);
    showsContainer.appendChild(locationTitle);
    showsContainer.appendChild(showButton);


    // glue everything together <---
    parentList.appendChild(showsContainer);
  }
}

showsArray();