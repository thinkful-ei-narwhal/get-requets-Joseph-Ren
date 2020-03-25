import $ from 'jquery';

let store = {dog: []};

// Fetch Function
function fetchApi(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      return response.json();
    })
    .then(dogs => {
      pushToStore(dogs);
      renderImages(dogs);
    });
}

function pushToStore(obj) {
  store = obj;
}

function returnImage(src) {
  return `<img src="${src}" alt="A cute dog" />`;
}

function renderImages(obj) {
  if (store.status === "error") {
    $('main').html(`<p>Breed cannot be found!</p>`);
    throw new Error('Breed cannot be found');
  }
  $('main').html(returnImage(store.message));
}

function handleSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    let value = $('#search-breed').val();
    fetchApi(value);
  });
}

function main() {
  renderImages();
  handleSubmit();
}

$(main);
