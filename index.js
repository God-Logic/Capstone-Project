const datas = [
  {
    Image: './Images/bass-guitarist.jpg',
    name: 'Kenya Malaika',
    pronounce: 'She',
    description: 'bassist ',
    major: 'jazz and classical',
    experience: 'composer,song writer,vocal arranger and music director',
  },
  {
    Image: './Images/percussion.jpg',
    name: 'Azania Culo',
    pronounce: 'He',
    description: 'Pianist',
    major: 'contemporary Jazz',
    experience: 'music director, arranger and composer',
  },
  {
    Image: './Images/guitarist.jpg',
    name: 'Themba Africa',
    pronounce: 'He',
    description: 'Guitarist',
    major: 'contemporary Jazz',
    experience: 'composer,song writer and vocal coach',
  },
  {
    Image: './Images/drummer.jpg',
    name: 'T-zone zuco',
    pronounce: 'He',
    description: 'drummer',
    major: 'jazz and classical',
    experience: 'composer,song writer and arraner',
  },
  {
    Image: './Images/Singer.jpg',
    name: 'Koketso Moloko',
    pronounce: 'She',
    description: 'vocalist',
    major: 'jazz and funk',
    experience: 'composer,song writer and music director',
  },
  {
    Image: './Images/percs.jpg',
    name: 'Zakes Percs',
    pronounce: 'Percussionist',
    description: 'Guitarist',
    major: 'jazz and african jazz',
    experience: 'composer,song writer and sound engineer',
  },
];

const postContainer = document.querySelector('.dynamic');

const postMethods = () => {
  // eslint-disable-next-line array-callback-return
  datas.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('dynamic');
    postElement.innerHTML = `
      <div class= 'cards'>
      <img src="${postData.Image}" alt="musician">
      
      <div class = "text">
        <h2>${postData.name}</h2>
        <hr>
        <p>Is a professional ${postData.description} who majors in ${postData.major} music.</p>
        <h6>${postData.pronounce} has experience also as a ${postData.experience}.</h6>
      </div>
    `;

    postContainer.appendChild(postElement);
  });
};
postMethods();
// eslint-disable-next-line no-unused-vars
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  hamburger.classList.toggle('active');
  dropdownMenu.classList.toggle('active');
}

function closeMenu() {
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.dropdown-menu').classList.remove('active');
}
document.querySelectorAll('.dropdown-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
