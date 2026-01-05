const marvel_heroes = ["thor", "sadi","malik"]
const dc_heroes = ["superman", "flash", "batman"]

//push array
marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


//concat array
const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);
// console.log(allheroes[3][1]);


// spread
const allnewheroes = [...marvel_heroes, ...dc_heroes]
// console.log(allnewheroes);


//flat
const anotherarr = [1, 2, 3, [4, 5], 6, 7, [8, 9]]
const newanotherarr = anotherarr.flat(Infinity)

//console.log(newanotherarr);


//array chk krny k ly ....
console.log(Array.isArray("sadiamalik"));
console.log(Array.from("sadiamalik"));
console.log(Array.from({name : "sadii"}));  //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));









