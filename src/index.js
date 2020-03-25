import $ from 'jquery';

const store = {
  dog: []
}

// Fetch Function
function fetchApi(randomDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${randomDogs}`)
    .then(response => {
      return response.json();
    })
    .then(dogs => {
      pushToStore(dogs);
      renderImages();
    });
}

function pushToStore(obj) {
  store.dog = obj;
}

function returnImage(src) {
  return `<img src="${src}" alt="A cute dog" />`;
}

function renderImages() {
  const newArray = store.dog.map(imgSrc => returnImage(imgSrc)).join("");
  $('main').html(newArray);
}

function handleSubmit() {
  $('form').on('click', '.submit-button', function(event) {
    event.preventDefault();
    let value = $('#search-amount').val();
    console.log('working');
    fetchApi(value);
  });
}


function main() {  
  renderImages,
  handleSubmit
}

$(main);