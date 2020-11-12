"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([12, 3, -5, 0]);
var stringCollection = new CharactersCollection_1.CharactersCollection('XssdAfc');
var characterSorter = new Sorter_1.Sorter(stringCollection);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
characterSorter.sort();
console.log(numbersCollection.data);
console.log(stringCollection.data);
//comment
