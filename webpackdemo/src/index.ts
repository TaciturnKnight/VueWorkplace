interface Person {
    name?: string,
    age: number,

    speak?(content: string): void
}

function printPerson(person: Person): {
    name: string, age: number, speak(content: string): void
} {
    person.name = "阿焦"
    person.speak = function (content: string) {
        console.log(this.age + "岁的" + this.name + "speak:" + content)
    }
    person.speak("我有一架大飞机")
    // console.log(person[0]);
    return {name: person.name, age: person.age, speak: person.speak}
}

let onePerson = printPerson({
    age: 1,
})
onePerson.speak("我也有一架大飞机")

class Me implements Person {
    age: number;
    name: string;

    constructor(age: number, name: string = "阿焦") {
        this.age = age;
        this.name = name;
    }

    speak(content: string): void {
        console.log(this.age + "岁的" + this.name + "speak:" + content)
    }

}

let me: Person = new Me(28)
if (me.speak) {
    me.speak("我有一架大飞机")
}

//可索引的类型
interface IArray {
    [index: number]: string;

    [position: string]: string
}

// let myArray: IArray =
//     ['ajiao', 'lida', 'yanlin', 'wangyi'], ["111", 111]
//
// console.log(myArray[0]);
//构造签名
interface ClockConstructor {
    new(hour: number, min: number): ClockInterface
}

interface ClockInterface {
    tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, min: number): ClockInterface {
    return new ctor(hour, min)
}

class DigitalClock implements ClockInterface {

    tick(): void {
        console.log("bbbbbbbbbbbbbbb")
    }

}

class AnalogClock implements ClockInterface {
    tick() {
        console.log("aaaaaaaaaaaaaaa")
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 12, 17)
digital.tick()
analog.tick()

class Animal {
    private _name: string

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(name: string) {
        this._name = name;
    }

    move(distance: number) {
        console.log(this._name + "移动了" + distance + "米")
    }
}

class Dog extends Animal {
    constructor() {
        super("狗");
    }

    move(distance: number) {
        console.log(this.name + "开始用四条腿奔跑")
        super.move(distance);
    }
}

class Chicken extends Animal {
    constructor() {
        super("鸡");
    }

    move(distance: number) {
        console.log(this.name + "开始用两条腿走")
        super.move(distance);
    }
}

class Fish extends Animal {
    constructor() {
        super("鱼");
    }

    move(distance: number) {
        console.log(this.name + "开始游")
        super.move(distance);
    }
}

let dog = new Dog()
let chicken = new Chicken()
let fish = new Fish()
dog.name = "123123123"
dog.move(100)
chicken.move(50)
fish.move(1293)
let sum = function (a: number, b: number): number {
    return 1
}
//this
let test = {
    name: "阿焦",
    print() {
        return () => {
            console.log(this.name)
        }
    }
}
let f = test.print()
f()

//this在回调函数中
interface UIElement {
    addClickListener(onclick: (e: Event) => void): void
}

class Handler {
    info: string

    constructor(info: string) {
        this.info = info;
    }

    onClickBad(e: Event) {
        this.info = "onClickBad"
    }
}

let h = new Handler("unknow")

class MyUIElement implements UIElement {
    addClickListener(onclick: (e: Event) => void): void {
    }

}

//泛型
function create<T>(c: { new(): T }): T {
    return new c()
}

const fishsh = create(Fish)
fishsh.move(1)

//类型推断
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button);
}

//类型兼容性
interface Tree {
    name: string
}

class Flower {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    used() {
        console.log(this.name + "被使用了")
    }
}

let tree: Tree
tree = new Flower("霸王花")
let flower = tree as Flower
flower.used()
//联合类型
type niubi = Person | Fish | Tree
let a: niubi
a = new Flower("玫瑰花")
if (a instanceof Me) {
    if (a.speak)
        a.speak("我有一家大飞机")
} else if (a instanceof Fish) {
    a.move(100)
} else if (a instanceof Flower) {
    a.used()
}

function isPerson(obj: niubi): obj is Person {
    return (<Person>obj).speak !== undefined
}

function isFish(obj: niubi): obj is Fish {
    return (<Fish>obj).move !== undefined
}

function isFlower(obj: niubi): obj is Flower {
    return (<Flower>obj).used !== undefined
}