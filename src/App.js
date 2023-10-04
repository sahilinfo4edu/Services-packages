import Home from '../src/pages/Home';
import './App.css';
import {BrowserRouter, browserRouter ,Route ,Routes} from 'react-router-dom';
import Services from './pages/Services';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services  />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;