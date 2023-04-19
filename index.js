const datas = [
  {
    Image:"", 
    name: "Kenya Malaika",
    pronounce: "She",
    description: "bassist ",
    major: "jazz and classical",
    Experience: "composer,song writer,vocal arranger and music director",
  },
  {
    name: "Azania Culo",
    pronounce: "He",
    description: "Keyboard player",
    major: "contemporary Jazz",
    experience: "music diractor, arranger and composer",
  },
  {
    name: "Themba Africa",
    pronounce: "He",
    description: "Guitarist",
    Experience: "composer,song writer and vocal coach",
  },
  {
    name: "Lerato zuco",
    pronounce: "He",
    description: "drummer",
    Experience: "composer,song writer and arraner",
  },
  {
    name: "",
    pronounce: "He",
    description: "saxophonist",
    Experience: "composer,song writer and music director",
  },
  {
    name: "Themba Africa",
    pronounce: "Percussionist",
    description: "Guitarist",
    Experience: "composer,song writer and sound engineer",
  },
];

const postContainer = document.querySelector('.cards')

const postMethods = () =>{
  datas.map((postData)=>{
    const postElement=document.createElement('div');
    postElement.classList.add('cards');
    postElement.innerHTML =
     (datas) =>` 
    <h2>${postData.name}</h2>
    <p>Is a professional ${postData.name} who major in ${postData.major} music</p>
    <h6>${postData.pronounce} has experience also as a${postData.experience}.</h6>
    `

    postContainer.appendChild(postElement)

  })

}
postMethods()

