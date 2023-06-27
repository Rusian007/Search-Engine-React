import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import Details from './components/Details';
import Error from './components/Error';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/details" element={<Details />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
