 // Name, Height  and Type of Pokemon Array//
var repository=[
 ['Stoutland', 2.9 ,['Intimidate' , 'Scrappy' , 'Sandrush']],

 ['Clefable', 1.8 , ['Cutecharm', 'Magicguard', 'Unaware']],

 ['Gloom', 8.8 , ['Stench' , 'Chlorophyll']]
];
 // checks Array repository for length and starts loop//
for (var i = 0; i < repository.length; i++){

document.write ('<H2> Name:' + repository[i][0] + '</H2>');
document.write ('<H3> Height:' + repository[i][1] + '</H3>');
// checks if a Pokemon is above value 8 to write Text//
if (repository[i][1] > 8){
    document.write ('Thats A Big One!!')
}
document.write ('<H3> Types:' + repository[i][2] + '</H3>')};

 