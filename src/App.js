import Principal from './pages/Principal';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
function App() {
  return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Principal} />
        </div>
      </Router>
  );
}

export default App;
