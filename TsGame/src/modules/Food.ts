class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement
    onScoreAdd?: () => void

    constructor(onScoreAdd?: () => void) {
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
        setTimeout(() => {
            let randomx = this.createRandomPosition()
            let randomy = this.createRandomPosition()
            this.element.style.left = randomx + 'px'
            this.element.style.top = randomy + "px"
            this.logPosition()
            this.change()
            if (this.onScoreAdd)
                this.onScoreAdd()
        }, 500)
    }

    createRandomPosition(): number {
        return Math.round(Math.random() * 29) * 10
    }

    logPosition() {
        console.log('横坐标', this.getX(), '纵坐标', this.getY())
    }
}

export default Food