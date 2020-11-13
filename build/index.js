"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([12, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var stringCollection = new CharactersCollection_1.CharactersCollection('XssdAfc');
stringCollection.sort();
console.log(stringCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-5);
linkedList.add(231);
linkedList.add(-45);
linkedList.sort();
linkedList.print();
//comment
