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
    const rmContainer = [rickMortyData].map(function (adventure) {
      return `<div>
                <img src="${adventure.results[0].image}" alt="image" />
                <h4>Name: ${adventure.results[0].name}</h4>
                <p>Gender: ${adventure.results[0].gender}</p>
                <p>Species: ${adventure.results[0].species}</p>
                <p>Location: ${adventure.results[0].location.name}</p>
                <p>Origin: ${adventure.results[0].origin.name}</p>
                <p>Status: ${adventure.results[0].status}</p>
              </div>`;
    });
    $rmInfo.html(rmContainer);
  }
});
