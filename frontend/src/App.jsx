import LandingPage from './pages/LandingPage';
import './App.css'
import {Routes,Route} from 'react-router-dom'; 
import AdditionGame from './pages/AdditionGame';

function App() {

  return (
    <main className="main-content">
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/game" element={<AdditionGame/>}/>
    </Routes>
    </main>
  )
}



export default App

