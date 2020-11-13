import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([12, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringCollection = new CharactersCollection('XssdAfc');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-5);
linkedList.add(231);
linkedList.add(-45);
linkedList.sort();
linkedList.print();
//comment
