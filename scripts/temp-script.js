// this is a temporary JS file in order to work from scratch



// This is my api key

// {
// "api_key": "aa471e79-f431-4c44-b489-7f88a7efba89"
// }

const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';

const apiURL = 'https://project-1-api.herokuapp.com'

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
  });

}).catch((error)=> {
  console.log(error)
});




let parentItem = document.querySelector('.shows__title');

