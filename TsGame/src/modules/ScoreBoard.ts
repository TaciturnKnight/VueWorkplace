//定义记分牌类
class ScoreBoard {
    private _score = 0
    private _level = 1
    maxLevel: number
    levelScore: number
    scoreElement: HTMLElement
    levelElement: HTMLElement

    constructor(maxLevel = 10, levelScore = 10) {
        this.maxLevel = maxLevel
        this.levelScore = levelScore
        this.scoreElement = document.getElementById("score")!
        this.levelElement = document.getElementById("level")!
    }

    addScore() {
        this.scoreElement.innerHTML = ++this._score + ''
        if (this._score % this.levelScore === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this._level < this.maxLevel) {
            this._level++
            this.levelElement.innerHTML = this._level + ''
        }
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}
export default ScoreBoard