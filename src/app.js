import { person, getName, getPost } from './lib';

let val = () => "Hello World";
console.log(val());

console.log(person.name);

var str = getName("Prabeen Kumar Soreng");
console.log(str);

getPost().then(posts => console.log(posts));