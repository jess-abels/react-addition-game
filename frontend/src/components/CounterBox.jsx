import './CounterBox.css'

export default function CounterBox(props){
    let { num } = props;
    console.log([...Array(num).keys()]);
    
    return (
        <div className="counter">
            {[...Array(num).keys()].map(key => <p key={key}>♦</p>)}
       </div>
    )
}