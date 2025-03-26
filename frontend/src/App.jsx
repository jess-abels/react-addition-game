<<<<<<< HEAD
import LandingPage from './pages/LandingPage';
import './App.css'
import {Routes,Route} from 'react-router-dom'; 
import AdditionGame from './pages/AdditionGame';
=======
import LandingPage from './components/LandingPage';
import './App.css'
>>>>>>> 5a9b975f03e4ed8c12509532071f0e8f2728dd7a

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

