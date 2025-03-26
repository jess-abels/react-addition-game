import './LandingPage.css'
import StartButton from '../components/StartButton'

export default function LandingPage(){

    return (
        <div id="welcome-text">
        <h1>Welcome to Mila's CAT addition game</h1>
        <StartButton path={"/game"}/>
       </div>
    )
}