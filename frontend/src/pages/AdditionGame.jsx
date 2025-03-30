import './AdditionGame.css'
import MathProblem from '../components/MathProblem'
import CounterBox from '../components/CounterBox'
import AnswerBox from '../components/AnswerBox'
import { getRandomNumsEqualLessThanOrEqualToTen } from '../utils/RandomNumGenerator'

export default function AdditionGame(){
    let [randomNum1, randomNum2] = getRandomNumsEqualLessThanOrEqualToTen();
    let sum = randomNum1 + randomNum2;

    return (
        <div id="game">
        <MathProblem num1={randomNum1} num2={randomNum2}/>
        <div className="counter-container">
        <CounterBox num={randomNum1}/>
        <CounterBox num={randomNum2}/>
        </div>
        <AnswerBox correctAnswer={sum}/>
       </div>
    )
}