import GameElement from "./GameElement";

class Food implements GameElement {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement
    onScoreAdd?: () => void
    maxX: number;
    maxY: number;

    constructor(maxX: number, maxY: number, onScoreAdd?: () => void) {
        this.maxX = maxX;
        this.maxY = maxY;
        if (onScoreAdd)
            this.onScoreAdd = onScoreAdd
        this.element = document.getElementById("food")!;
    }

    //获取食物的坐标
    getX() {
        return this.element.offsetLeft
    }

    getY() {
        return this.element.offsetTop
    }

    //随机重新定位
    change() {
        let randomx = this.createRandomPositionX()
        let randomy = this.createRandomPositionY()
        this.element.style.left = randomx + 'px'
        this.element.style.top = randomy + "px"
        this.logPosition()
        if (this.onScoreAdd)
            this.onScoreAdd()
    }

    createRandomPositionX(): number {
        return Math.round(Math.random() * (this.maxX / 10)) * 10
    }

    createRandomPositionY(): number {
        return Math.round(Math.random() * (this.maxY / 10)) * 10
    }

    logPosition() {
        console.log('横坐标', this.getX(), '纵坐标', this.getY())
    }
}

export default Food