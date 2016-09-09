"use strict";
const pokeDB = require("./pokeDB.json");
const pokeNumber = process.argv[2] - 1;
console.log(pokeDB[pokeNumber]);