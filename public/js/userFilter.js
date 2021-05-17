window.addEventListener('DOMContentLoaded', () => {

    const filterAllEl = document.getElementById('filter-all');
    const filterMovieEl = document.getElementById('filter-movie');
    const filterTVEl = document.getElementById('filter-tv');
    const containerEl = document.querySelectorAll('.card-container');

    filterAllEl.addEventListener('click', event => {
        event.preventDefault();
        for (let i = 0; i < containerEl.length; i++) {
            if (containerEl[i].classList.contains('hide')) {
                containerEl[i].classList.remove('hide');
            }
        }
    })

    filterMovieEl.addEventListener('click', event => {
        event.preventDefault();
        for (let i = 0; i < containerEl.length; i++) {
            containerEl[i].classList.remove('hide');
            if (containerEl[i].classList.contains('tv')) {
                containerEl[i].classList.add('hide');
            }
        }
    })

    filterTVEl.addEventListener('click', event => {
        event.preventDefault();
        for (let i = 0; i < containerEl.length; i++) {
            containerEl[i].classList.remove('hide');
            if (containerEl[i].classList.contains('movie')) {
                containerEl[i].classList.add('hide');
            }
        }
    })
})