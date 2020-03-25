import $ from 'jquery';

const store = { dog: [] };

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
  store.dog = obj.message;
}

function returnImage(src) {
  return `<img src="${src}" alt="A cute dog" />`;
}

function renderImages() {
  const renderArray = store.dog.map(imgSrc => returnImage(imgSrc));
  $('main').html(renderArray);
}

function handleSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    let value = $('#search-amount').val();
    fetchApi(value);
  });
}

function main() {
  renderImages();
  handleSubmit();
}

$(main);
