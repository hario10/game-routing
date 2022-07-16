import './App.css';
import Game from './Component';
import { BrowserRouter as Router } from 'react-router-dom';




const App = () => {
  
  return (
    <div >
      <Router>
        <Game />
      </Router>
    </div>
  )
}

export default App;
