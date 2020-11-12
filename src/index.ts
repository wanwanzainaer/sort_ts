import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
const numbersCollection = new NumbersCollection([12, 3, -5, 0]);
const stringCollection = new CharactersCollection('XssdAfc');
const characterSorter = new Sorter(stringCollection);
const sorter = new Sorter(numbersCollection);
sorter.sort();
characterSorter.sort();
console.log(numbersCollection.data);
console.log(stringCollection.data);
//comment
