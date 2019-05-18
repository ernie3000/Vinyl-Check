 // Name, Height  and Type of Pokemon Array//
var repository=[
 ['Stoutland', 2.9 ,['Intimidate' , 'Scrappy' , 'Sandrush']],
 ['Clefable', 9.8 , ['Cutecharm', 'Magicguard', 'Unaware']],
 ['Gloom', 8.8 , ['Stench' , 'Chlorophyll']]
];
//object loop for repository, outputs every Pokemon //
  Object.keys(repository).forEach(function(currentPokemon){
document.write ('<p>'+ (repository[currentPokemon]) + '</p>')
// checks if a Pokemon is above value 8 to write Text//
if (repository[currentPokemon][1] > 8){
    document.write ('Thats A Big One!!')
    }});

   