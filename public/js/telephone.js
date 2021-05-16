const buttons = document.getElementsByClassName('changeStatus');

const addToList = (movie) => {
  const missive = {
    'title': movie.title,
    'release_date': movie.date,
    'poster_path': movie.poster
    //'user_id': 'USER_ID"
  };

  fetch('http://localhost:3000/api/movies', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(missive)
  }).then(response => console.log(response)).catch(error => console.log(error));
};

const removeFromList = (movie) => {
  const missive = {
    'title': movie.title
    //'user_id': 'user_id'
  };

  fetch('http://localhost:3000/api/movies', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(missive)
  }).then(response => console.log(response)).catch(error => console.log(error));
};

const controller = (e) => {
  const movie = e.target.parentNode.dataset;

  switch(e.target.value) {
  case '2':
    console.log(e.target);
    addToList(movie);
    break;
  case '4':
    console.log(e.target);
    removeFromList(movie);
    break;
  default:
    break;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('change', controller);
}