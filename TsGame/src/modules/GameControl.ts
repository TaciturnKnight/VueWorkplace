//游戏控制器  控制其他所有类
import Snake from "./Snake";
import Food from "./Food";
import ScoreBoard from "./ScoreBoard";

class GameControl {
    snake: Snake
    food: Food
    scoreBoard: ScoreBoard
    direction = ''
    //记录游戏是否结束
    isLive = true
    maxX = 290
    maxY = 290

    //存储蛇移动的方向
    constructor() {
        this.snake = new Snake(this.maxX, this.maxY)
        this.food = new Food(this.maxX, this.maxY)
        this.scoreBoard = new ScoreBoard()
        this.init()
    }

    //游戏初始化
    init() {
        document.addEventListener('keydown', (event) => {
            this.onKeyDown(event)
        })
        this.run()
    }

    gameOver() {
        //撞墙了
        alert('游戏结束')
        this.direction = ''
        this.snake.reset()
        this.isLive = true
        this.run()
    }

    //创建一个键盘按下的响应函数
    onKeyDown(this: GameControl, event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
    }

    run() {
        //根据方向移动蛇的位置
        let x = this.snake.x
        let y = this.snake.y
        switch (this.direction) {
            case "ArrowUp":
                //向上移动 top减少
                y -= 10
                break
            case "ArrowDown":
                //向下移动  top增加
                y += 10
                break
            case "ArrowLeft":
                //向左  x减少
                x -= 10
                break
            case "ArrowRight":
                x += 10
                break
        }
        try {
            this.snake.x = x
            this.snake.y = y
        } catch (e) {
            this.isLive = false
        }
        //检查蛇是否吃到了食物
        if (this.checkEat(x, y)) {
            //食物位置变更
            this.food.change()
            //分数增加
            this.scoreBoard.addScore()
            //蛇的身体增长
            this.snake.addBody()
        }
        if (this.snake.checkEatSelf()) {
            this.gameOver()
        } else {
            if (this.isLive) {
                setTimeout(this.run.bind(this), 300 - (this.scoreBoard.level - 1) * 20)
            } else {
                this.gameOver()
            }
        }
    }

    checkEat(x: number, y: number): boolean {
        return x === this.food.getX() && y === this.food.getY()
    }
}

export default GameControl