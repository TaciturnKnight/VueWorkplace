//游戏控制器  控制其他所有类
import Snake from "./Snake";
import Food from "./Food";
import ScoreBoard from "./ScoreBoard";

class GameControl {
    snake: Snake
    food: Food
    scoreBoard: ScoreBoard

    //存储蛇移动的方向
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scoreBoard = new ScoreBoard()
        this.init()
    }

    //游戏初始化
    init() {
        document.addEventListener('keydown', this.onKeyDown)
    }

    //创建一个键盘按下的响应函数
    onKeyDown(event: KeyboardEvent) {
        console.log(event.key)
    }
}

export default GameControl