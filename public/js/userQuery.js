const searchButtonEl = document.getElementById('search-button');
/* const movieDbApiKey = process.env.MOVIE_DB_API_KEY; */
const dropdownEl = document.querySelector('.search-dropdown');
let movies = false;
let tvshows = false;


function submitSearch(event) {
  event.preventDefault();
  let url;
  const searchString = document.querySelector('.form-control').value;
  if (movies){
    document.location= `/movie-results/${searchString}`
    url = `https://api.themoviedb.org/3/search/movie?api_key=b12eaa7751ce0dea2e20ccc0ee014f47&query=`;
  } else if (tvshows){
    url = `https://api.themoviedb.org/3/search/tv?api_key=b12eaa7751ce0dea2e20ccc0ee014f47&query=`;
  }
  if (!searchString) {
    console.error('You need to input text!');
    return;
  }
  console.log(url + searchString);

}
searchButtonEl.addEventListener('click', submitSearch);
dropdownEl.addEventListener('change', function () {
  if (this.value == 1) {
    movies = true;
    tvshows = false;
  } else {
    movies = false;
    tvshows = true;
  }
})

