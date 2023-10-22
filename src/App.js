import './App.css';
import Sidebar from './components/sidebar';
import Home from './pages/home/home';
import Temperature from './pages/temperature/temperature';
import Co2 from './pages/co2/co2';
import Methane from './pages/methane/methane';
import No2 from './pages/no2/no2';
import Artic from './pages/artic/artic';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/temperature" exact element={<Temperature />} />
        <Route path="/co2" exact element={<Co2 />} />
        <Route path="/methane" exact element={<Methane />} />
        <Route path="/no2" exact element={<No2 />} />
        <Route path="/artic" exact element={<Artic />} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
