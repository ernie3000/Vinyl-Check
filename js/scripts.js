   // var pokemonRepository = (function () {
     // var repository =[
       //  {
         // name: 'Stoutland',
          //height: 2.7,           
          //types: ['Cutecharm', 'Magicguard', 'Unaware']
        //}, 
          //{
          //name: 'Clefable',
          //height: 9.6,
          //types: ['Stench' , 'Chlorophyll']
       // },
      // {
        //  name: 'Gloom',
         // height: 3.5,
          //types: ['Intimidate' , 'Scrappy' , 'Sandrush']
        //}
      //];
       /// function add(pokemon) {
         /// repository.push(pokemon);
        //}
      
    ///    function getAll() {
       //   return repository;
        //}
      
     //   return {
       //   add: add,
         // getAll: getAll
        //};
      //})();
//------------------------------//
//     pokemonRepository.add({ name: 'Blastoise', height:5.03 , types:['Water'] });
//------------------------------//
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          height: item.height,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }
function add(pokemon) {
         repository.push(pokemon);
        }
      
function getAll() {
 return repository;
        }
  return {
    add: add,
    getAll: getAll,  
    loadList: loadList,  
    loadDetails: loadDetails
  
  
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });
});

//-------------------------------------------------------------//

var pokemonRepositoryNew = pokemonRepository.getAll();


 //add-list-item function:
 function addListItem(pokemon) {
  var listItemheight = document.createTextNode(pokemon.height); 
  var listItemtypes = document.createTextNode(pokemon.types);      
  var buttonText = document.createTextNode(pokemon.name);          

   //creating  DOM
  var $NameButton = document.createElement('button');
  var $li = document.createElement('li');
  var $ul = document.querySelector('ul');
//adding classes
  $NameButton.classList.add('Name-button');                   
  $li.classList.add('list-item');
  $ul.classList.add('pokemon-list');
    //appending button and Items
  $NameButton.appendChild(buttonText);                       
  $li.appendChild($NameButton);
  $ul.appendChild($li);
  $NameButton.addEventListener('click', function(event) {       
    showDetails(pokemon)});
};

//show-details function

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);   });
}

//loop.creating.pokemons.from.repository
pokemonRepositoryNew.forEach(function(pokemon) {
  addListItem(pokemon)
});
