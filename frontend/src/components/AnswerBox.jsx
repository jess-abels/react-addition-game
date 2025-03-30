import './AnswerBox.css'
import { getRandomIntInclusive, getRandomNumsEqualLessThanOrEqualToTen } from '../utils/RandomNumGenerator'

export default function AnswerBox(props){
 let {correctAnswer} = props;
 let randomNum1 = getRandomIntInclusive(1, 10);
 let randomNum2 = getRandomIntInclusive(1, 10);

    return (
        <div>
            <h2>How many cats are there altogether?</h2>
        <div>
           <button>{randomNum1}</button>
       </div>
           <div>
           <button> {randomNum2}</button>
       </div>
           <div>
           <button>{correctAnswer}</button>
       </div>
       </div>
    )
}