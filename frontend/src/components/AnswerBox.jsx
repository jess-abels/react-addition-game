import './AnswerBox.css'
import { getThreeUniqueAnswerOptions } from '../utils/RandomNumGenerator'

export default function AnswerBox(props){
 let {correctAnswer} = props;
 let answerOptions = getThreeUniqueAnswerOptions(correctAnswer);

 function checkAnswer(event) {
    let answer = event.target.value;
    if (answer === correctAnswer.toString()) {
        console.log("Good job!")
    }
 }

    return (
        <div>
            <h2>How many cats are there altogether?</h2>
            {answerOptions.map((answerOption) => (
        <button value={answerOption} onClick={checkAnswer} key={answerOption}>{answerOption}</button>
      ))}
       </div>
    )
}