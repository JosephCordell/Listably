const buttons = document.getElementsByClassName('changeStatus');

const addToList = (media, option) => {
    const missive = {
        title: media.title,
        release_date: media.date,
        poster_path: media.poster,
        mediatype: media.type,
        id: media.id,
        todo: option,
        description: media.overview,
    };

    fetch('/api/media', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(missive),
    })
        .then((response) => {
            if (response.status === 401) {
                document.location.replace('/login');
            }
        })
        .catch((error) => console.log(error));
};

const removeFromList = (media) => {
    const missive = {
        id: media.id,
    };

    fetch('/api/media', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(missive),
    })
        .then(
            setTimeout(function () {
                document.location.reload();
            }, 1000)
        )
        .catch((error) => console.log(error));
};

const controller = (e) => {
    const media = e.target.parentNode.dataset;

    switch (e.target.value) {
        case '0':
            addToList(media, 0);
            break;
        case '2':
            addToList(media, 2);
            break;
        case '4':
            addToList(media, 4);
            break;
        case '6':
            removeFromList(media, 6);
            break;
        default:
            break;
    }
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('change', controller);
}
