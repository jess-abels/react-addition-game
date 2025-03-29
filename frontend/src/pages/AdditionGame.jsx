import './AdditionGame.css'
import MathProblem from '../components/MathProblem'
import CounterBox from '../components/CounterBox'
import AnswerBox from '../components/AnswerBox'
import { getRandomIntInclusive } from '../utils/RandomNumGenerator'

export default function AdditionGame(){
    let randomNum1 = getRandomIntInclusive(0,10)
    let randomNum2 = getRandomIntInclusive(0,10)

    return (
        <div id="game">
        <MathProblem num1={randomNum1} num2={randomNum2}/>
        <div className="counter-container">
        <CounterBox num={randomNum1}/>
        <CounterBox num={randomNum2}/>
        </div>
        <AnswerBox/>
       </div>
    )
}