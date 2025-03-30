import './AnswerBox.css'
import { getThreeUniqueAnswerOptions } from '../utils/RandomNumGenerator'

export default function AnswerBox(props){
 let {correctAnswer} = props;
 let answerOptions = getThreeUniqueAnswerOptions(correctAnswer);

    return (
        <div>
            <h2>How many cats are there altogether?</h2>
            {answerOptions.map((answerOption) => (
        <button key={answerOption}>{answerOption}</button>
      ))}
       </div>
    )
}