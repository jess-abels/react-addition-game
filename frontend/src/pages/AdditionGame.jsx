import './AdditionGame.css'
import MathProblem from '../components/MathProblem'
import CounterBox from '../components/CounterBox'
import AnswerBox from '../components/AnswerBox'

export default function AdditionGame(){
    return (
        <div id="game">
        <MathProblem/>
        <div className="counter-container">
        <CounterBox/>
        <CounterBox/>
        </div>
        <AnswerBox/>
       </div>
    )
}