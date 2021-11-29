import {hi} from './m1';

function sum(a: number, b: number): number {
    return a + b
}

const obj = {name: "孙悟空", age: 33}
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(123, 678))
console.log('哈哈');
console.log(hi)