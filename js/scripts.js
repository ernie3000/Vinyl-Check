
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
  var listItemtypes = document.createTextNode(pokemon.types)  
  var buttonText = document.createTextNode(pokemon.name);          

   //creating  DOM

  var $NameButton = document.createElement('button');
  var $li = document.createElement('li');
  var $ul = document.getElementById('Poke-List');
  var $modal = document.createElement ('modal-container');

  //adding classes
  $NameButton.classList.add('Name-button');                   
  $li.classList.add('list-item');
  $modal.classList.add('modal-container')
  
  //appending button and Items
 

  document.getElementById('Poke-List').appendChild($li);
  document.getElementById('modal-container').appendChild($modal);
  $ul.appendChild($modal);
  $NameButton.appendChild(buttonText);                       
  $li.appendChild($NameButton);
 
//on click show details 

  $NameButton.addEventListener('click', function(event) {       
     showDetails(pokemon)});
};
//------------------------------------------------------------//



//loop.creating.pokemons.from.repository
pokemonRepositoryNew.forEach(function(pokemon) {
  addListItem(pokemon)
});

// Showing Modal with Picture / Height / Name

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(item);   });
};



//-----------------------------
// creating modal content
function showModal(item) {
  var $modalContainer = document.querySelector('modal-container');

  //clearing all existing modal content
  $modalContainer.innerHTML = '';

  //creating div element in DOM

  var modal = document.createElement('div');
  
  //adding class to div DOM element
  modal.classList.add('modal');
  $modalContainer.classList.add('is-visible');
  
  
  //creating closing button in modal content
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  


  // adding event listener to close modal when clicked on button
  closeButtonElement.addEventListener('click', hideModal);
  window.addEventListener('keydown', (e) => {
   var $modalContainer = document.querySelector('modal-container');
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });


  $modalContainer.addEventListener('click', e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
});



  function hideModal() {
    var $modalContainer = document.querySelector('modal-container');
    $modalContainer.classList.remove('is-visible');
  };





  
  //creating element for name in modal content
  var nameElement = document.createElement('h1');
  nameElement.innerText = item.name;

  // creating img in modal content
  var imageElement = document.createElement('img');
  imageElement.classList.add('modal-img');
  imageElement.setAttribute('src', item.imageUrl);                                                                                   

  //creating element for height in modal content
  var heightElement = document.createElement('p');
  heightElement.innerText = 'height : ' + item.height;

 
  //appending modal content to webpage
  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(imageElement);
  modal.appendChild(heightElement);
  $modalContainer.appendChild(modal)
  
  
};
  