import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
      </Routes>
    </Router>
  );
}

export default App;
