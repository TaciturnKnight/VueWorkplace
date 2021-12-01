class Snake {
    head: HTMLElement
    bodies: HTMLCollection//蛇身（包括蛇头）
    element:HTMLElement
    constructor() {
        this.head = document.querySelector('#snake>div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    //获取蛇的坐标
    get x() {
        return this.head.offsetLeft
    }

    get y() {
        return this.head.offsetTop
    }

    set x(value: number) {
        this.head.style.left = value + 'px'
    }

    set y(value: number) {
        this.head.style.top = value + 'px'
    }
}

export default Snake