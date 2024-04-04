const searchFilm = () => {
  const DOMMainWrapper = document.getElementById('js-main-wrapper');

  if (!DOMMainWrapper) return;

  const DOMSearchForm = document.getElementById('js-search-form');

  if (!DOMSearchForm) return;

  const DOMErrorText = document.getElementById('js-error-text');

  if (!DOMErrorText) return;

  const filmArray = [];

  let title = '';

  let type = '';

  // * Забезпечує роботу номрних кнопок - сторінок
  const pageButtonActiator = () => {

    const DOMPageButtonArray = Array.from(

      document.getElementsByClassName('js-pageButton')
    );
  
    if (!DOMPageButtonArray) return;
  
    DOMPageButtonArray.forEach((e) => {

      e.addEventListener('click', () =>

        searchDatabase(title, type, e.textContent)
      );
    });
  };

  // * Створює нумеровані кнопки-сторінки

  const pageButtonConstructor = (totalResults) => {

    const DOMPageButtons = document.getElementById('js-listButtons');

    if (DOMPageButtons) DOMMainWrapper.removeChild(DOMPageButtons);

    const DOMDetailsBlock = document.getElementById('js-detailsBlock');

    if (DOMDetailsBlock) DOMMainWrapper.removeChild(DOMDetailsBlock);

    const pageButtons = document.createElement('div');

    pageButtons.className = 'main-list-buttons';

    pageButtons.id = 'js-listButtons';

    const ButtonNum = Math.ceil(+totalResults / 10);

    for (let i = 1; i <= ButtonNum; i++) {

      const pageButton = document.createElement('button');

      pageButton.className = 'button button-page js-pageButton';

      pageButton.type = 'button';

      const spanButton = document.createElement('span');

      spanButton.textContent = i;

      pageButton.append(spanButton);

      pageButtons.append(pageButton);
    }

    DOMMainWrapper.appendChild(pageButtons);

    pageButtonActiator();
  };

  // * Створює список фільмів із кнопками "Details"

  const ListConstructor = () => {
    const DOMMovieList = document.getElementById('js-movieList');

    if (DOMMovieList) {

      DOMMainWrapper.removeChild(DOMMovieList);
    }

    const movieList = document.createElement('ul');

    movieList.className = 'main-movielist';

    movieList.id = 'js-movieList';

    filmArray.forEach((object) => {

      const li = document.createElement('li');

      li.className = 'main-list-item';

      for (const key in object) {
        
        if (key === 'Title' || key === 'Year' || key === 'Type') {
          const listSpan = document.createElement('span');

          listSpan.textContent = `${key}: ${object[key]}`;

          li.append(listSpan);
        }
      }
      const listButton = document.createElement('button');

      listButton.className = 'button js-detailsButton';

      listButton.type = 'button';

      const spanButton = document.createElement('span');

      spanButton.textContent = 'Details';

      listButton.append(spanButton);

      li.append(listButton);

      movieList.append(li);
    });

    DOMMainWrapper.appendChild(movieList);

    // *  Асинхронний імпорт функції, що забезпечує роботу кнопок "Details"
    import ('./detailsButtonsActivator.js').then((r)=>{r.default(filmArray,DOMMainWrapper)});
  };

  const searchDatabase = (title, type, page = 1) => {
    fetch(
      `http://www.omdbapi.com/?apikey=8b516e7&s=${title}&type=${type}&page=${page}`
    )
      .then((r) => r.json())

      .then((r) => {
        if (r.Response === 'False') {
          DOMErrorText.textContent = 'Film hasn`t found';

          return;
        }

        DOMErrorText.textContent = '';

        if (filmArray.length) {
          filmArray.splice(0, filmArray.length);
        }

        r.Search.forEach((e) => {
          filmArray.push(e);
        });

        ListConstructor();

        pageButtonConstructor(r.totalResults);
      })
      .finally(DOMSearchForm.addEventListener('submit', searchActivator))

      .catch(() => {

        throw new Error('Помилка у пошуку, спробуйте пізніше!');
      });
  };

  const searchActivator = (e) => {
    
    e.preventDefault();

    DOMErrorText.textContent='';

    const form = new FormData(e.target);

    title = form.get('title');

    type = form.get('type');

    if (!title) return;

    if(title.length<3){

      DOMErrorText.textContent='Movie name must be at least, 3 letters';
      
      return;
    }

    DOMSearchForm.removeEventListener('submit', searchActivator);

    searchDatabase(title, type);
  };

  DOMSearchForm.addEventListener('submit', searchActivator);
};

export  default searchFilm;
