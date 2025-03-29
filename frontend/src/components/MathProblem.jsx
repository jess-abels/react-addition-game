import './MathProblem.css'

export default function AdditionGame(props){
    console.log(props);
    
    let {num1,num2} = props;
    return (
        <div className="math">
        <h1>{num1} + {num2} = ? </h1>
       </div>
    )
}