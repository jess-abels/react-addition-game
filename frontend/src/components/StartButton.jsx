import { useNavigate } from "react-router-dom";

export default function StartButton({path}){
    const navigate = useNavigate();

    console.log(path)
    return (
        <button onClick={() => navigate(path)}>Let's go!</button>
    )
}