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

    const dateTitle = document.createElement('h4')
    dateTitle.classList.add("shows__header");
    dateTitle.innerText = concertList[i].dateHeader;

    showsContainer.appendChild(dateTitle);


    // glue everything together <---
    parentList.appendChild(showsContainer);
  }
}

showsArray();