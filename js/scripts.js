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
var allPokemon = pokemonRepository.getAll();
var getSize = pokemonRepository.getAll();
//--------------------------------//

allPokemon.forEach(function (pokemon) {
  document.write('<p>'+pokemon.name+'</p>');
  document.write('<p>'+pokemon.height+'</p>');
  document.write('<p>'+pokemon.types+'</p>');
if (pokemon.height > 4.0){document.write('This Is A Big One')}; 
});