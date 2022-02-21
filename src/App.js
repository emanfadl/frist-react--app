import './App.css';
import Home from './components/Home';
import Serve from './components/Serve'
import Offers from './components/offers'
import Certificate from './components/Certificate'

import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>}  />
   <Route exact path="/Certificate" element={<Certificate />}  />
   <Route exact path="/Offers" element={<Offers />}  />
   <Route path="/Serve" element={<Serve/>}  />
   </Routes>
    </div>
  );
}

export default App;
