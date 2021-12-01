import GameElement from "./GameElement";

class Snake implements GameElement {
    head: HTMLElement
    bodies: HTMLCollection//蛇身（包括蛇头）
    element: HTMLElement
    maxX: number;
    maxY: number;

    constructor(maxX: number, maxY: number) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.head = document.querySelector('#snake>div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    //身体移动
    moveBody() {
        //身体的每个部分移动到前一节的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let body = this.bodies[i] as HTMLElement
            let preBody = this.bodies[i - 1] as HTMLElement
            let preX = preBody.offsetLeft
            let preY = preBody.offsetTop
            body.style.left = preX + 'px'
            body.style.top = preY + 'px'
        }
    }

    reset() {
        this.x = 0
        this.y = 0
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let body = this.bodies[i] as HTMLElement
            body.remove()
        }
    }

    //获取蛇的坐标
    get x() {
        return this.head.offsetLeft
    }

    get y() {
        return this.head.offsetTop
    }

    set x(value: number) {
        if (this.x === value) {
            return
        }
        //判断蛇调头
        //如果当前有第二节身体 如果头的坐标和第二节重合，说明正在调头
        if (this.bodies && this.bodies.length > 1) {
            let secondBody = this.bodies[1] as HTMLElement
            if (secondBody.offsetLeft === value) {
                console.log('调头了')
                if (this.x > value) {
                    value = this.x + 10
                } else {
                    value = this.x - 10
                }
            }
        }
        if (value < 0 || value > this.maxX) {
            throw new Error('snake die')
        }
        this.moveBody()
        this.head.style.left = value + 'px'

    }

    set y(value: number) {
        if (this.y === value) {
            return
        }
        //判断蛇调头
        //如果当前有第二节身体 如果头的坐标和第二节重合，说明正在调头
        if (this.bodies && this.bodies.length > 1) {
            let secondBody = this.bodies[1] as HTMLElement
            if (secondBody.offsetTop === value) {
                console.log('调头了')
                if (this.y > value) {
                    value = this.y + 10
                } else {
                    value = this.y - 10
                }
            }
        }
        if (value < 0 || value > this.maxY) {
            throw new Error('snake die')
        }
        this.moveBody()
        this.head.style.top = value + 'px'
    }

    checkEatSelf(): boolean {
        let result = false
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let body = this.bodies[i] as HTMLElement
            if (this.x === body.offsetLeft && this.y === body.offsetTop) {
                result = true
                break
            }
        }
        return result
    }
}

export default Snake