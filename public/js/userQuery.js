const searchButtonEl = document.getElementById('search-button');
const dropdownEl = document.querySelector('.search-dropdown');
const searchInputEl = document.querySelector('#search-input');
let movies = true;
let tvshows = false;


function submitSearch(event) {
  event.preventDefault();
  let url;
  const searchString = document.querySelector('.form-control').value;
  if (movies){
    document.location.replace(`/movie-results/${searchString}`)
  } else if (tvshows){
    document.location.replace(`/tvshows-results/${searchString}`)
  }
  if (!searchString) {
    console.error('You need to input text!');
    return;
  }
  return;
}

searchInputEl.addEventListener('change', submitSearch);
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

