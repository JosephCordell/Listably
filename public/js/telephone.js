const buttons = document.getElementsByClassName('changeStatus');

const addToList = (media, option) => {

  const missive = {
    'title': media.title,
    'release_date': media.date,
    'poster_path': media.poster,
    'mediatype': media.type,
    'id': media.id,
    'todo': option
  };

  fetch('/api/media', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(missive)
  })
  .then(response => {
    if (response.status === 401) {
      document.location.replace('/login')
    }
  })
    .catch(error => console.log(error));
};

const removeFromList = (media) => {
  const missive = {
    'title': media.title
    //'user_id': 'user_id'
  };

  fetch('/api/media', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(missive)
  }).then(response => console.log(response)).catch(error => console.log(error));
};

const controller = (e) => {
  const media = e.target.parentNode.dataset;

  switch(e.target.value) {
  case '0':
    console.log(e.target);
    addToList(media, 0);
    break;
  case '2':
    console.log(e.target);
    addToList(media, 2);
    break;
  case '4':
    console.log(e.target);
    removeFromList(media, 4);
    break;
  default:
    break;
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('change', controller);
}