var pokeDB = require("./pokeDB.json");
var pokeNumber = process.argv[2] - 1;
console.log(pokeDB[pokeNumber]);