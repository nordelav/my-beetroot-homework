const playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
  
];

const addList = () => {

  const DOMPlaylist = document.getElementById('js-playlist');

  if (!DOMPlaylist) return;

  const list = document.createElement('ol');

  list.className = 'main-playlist';

  playList.forEach((object) => {

    let li = document.createElement('li');

    let span = document.createElement('span');

    li.className = 'main-playlist-item';

    span.className ='main-playlist-text';

    span.innerText = `${object.author} - ${object.song}`;
    
    li.appendChild(span);

    list.appendChild(li);
  });

  DOMPlaylist.appendChild(list);
};

export { addList };
