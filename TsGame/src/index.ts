import './style/index.less'
import GameControl from "./modules/GameControl";

const gamecontrol=new GameControl()
setInterval(()=>{
    console.log(gamecontrol.direction)
},1000)