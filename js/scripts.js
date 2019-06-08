    var pokemonRepository = (function () {
      var repository =[
         {
          name: 'Stoutland',
          height: 2.7,           
          types: ['Cutecharm', 'Magicguard', 'Unaware']
        }, 
          {
          name: 'Clefable',
          height: 9.6,
          types: ['Stench' , 'Chlorophyll']
        },
       {
          name: 'Gloom',
          height: 3.5,
          types: ['Intimidate' , 'Scrappy' , 'Sandrush']
        }
      ];
        function add(pokemon) {
          repository.push(pokemon);
        }
      
        function getAll() {
          return repository;
        }
      
        return {
          add: add,
          getAll: getAll
        };
      })();
//------------------------------//
     pokemonRepository.add({ name: 'Blastoise', height:5.03 , types:['Water'] });
//------------------------------//
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
  $li.appendChild(listItemheight);
  $li.appendChild(listItemtypes);
  $ul.appendChild($li);
  $NameButton.addEventListener('click', function(event) {       
    showDetails(pokemon)});
};

//show-details function
function showDetails(pokemon) {
  console.log(pokemon.name)};

//loop.creating.pokemons.from.repository
pokemonRepositoryNew.forEach(function(pokemon) {
  addListItem(pokemon)
});
