$(function () {
  // IPO -> Input -> Process -> Output

  // Constants && Variables
  let rickMortyData;

  const BASE_URL = 'https://rickandmortyapi.com/api/character';

  // Cached Element References
  const $rmInfo = $('#rm-info');
  const $year = $('span#year');

  // Event Listeners

  // Functions
  init();

  function init() {
    getRmData();
    $year.text(new Date().getFullYear());
  }

  function getRmData() {
    // use $.ajax to fetch data from rick and morty api
    $.ajax(`${BASE_URL}`).then(
      function (data) {
        // save the data locally
        rickMortyData = data;
        // transfer the data to the DOM
        render();
      },
      function (error) {
        console.log(error);
      }
    );
  }

  function render() {
    const rmContainer = rickMortyData.results.map(function (adventure) {
      return `<div>
                <img src="${adventure.image}" alt="image" />
                <h4>Name: ${adventure.name}</h4>
                <p>Gender: ${adventure.gender}</p>
                <p>Species: ${adventure.species}</p>
                <p>Location: ${adventure.location.name}</p>
                <p>Origin: ${adventure.origin.name}</p>
                <p>Status: ${adventure.status}</p>
              </div>`;
    });
    $rmInfo.html(rmContainer);
  }
});
