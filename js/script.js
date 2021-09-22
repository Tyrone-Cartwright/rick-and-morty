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
      return `<div class="slick-reform">
                  <div id=rm-container>
                  <img class="rm-image" src="${adventure.image}" alt="image" />
                  <h4 class="rm-name">Name: ${adventure.name}</h4>
                  <p class="rm-gender">Gender: ${adventure.gender}</p>
                  <p class="rm-species">Species: ${adventure.species}</p>
                  <p class="rm-location">Location: ${adventure.location.name}</p>
                  <p class="rm-origin">Origin: ${adventure.origin.name}</p>
                  <p class="rm-status">Status: ${adventure.status}</p>
                </div>
              </div>`;
    });

    $rmInfo.html(rmContainer);
    $rmInfo.slick({
      // infinite: false,
      // autoplay: true,
      // autoplaySpeed: 3500,
      slidesToShow: 5,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: '60px',
      prevArrow:
        '<span class="prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></span>',
      nextArrow:
        '<span class="next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></span>',
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 5,
      //       slidesToScroll: 5,
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //     },
      //   },
      // ],
    });
  }
});
