import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Host from './pages/Host';
import Player from './pages/Player';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Host />} />
          <Route path='/player' element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
