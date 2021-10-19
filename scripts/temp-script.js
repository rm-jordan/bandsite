// this is a temporary JS file in order to work from scratch



// This is my api key

// {
// "api_key": "aa471e79-f431-4c44-b489-7f88a7efba89"
// }

const apiKEY = 'aa471e79-f431-4c44-b489-7f88a7efba89';

const apiURL = 'https://project-1-api.herokuapp.com'

axios.get(`${apiURL}/showdates/?api_key=${apiKEY}`).then((response)=> {

  console.log(response); // <--works

  console.log(response.data); // <--works

}).catch((error)=> {
  console.log(error)
});




let parentItem = document.querySelector('.shows__title');

