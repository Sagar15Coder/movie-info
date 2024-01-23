import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './MoviePage';
import Error from './Error';
import { Prov } from './context';

const App = () => {

  return (
    <>
      <Prov>
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="*" element={<Error />} />
              </Routes>
        </BrowserRouter>
      </Prov>
        
    </>
  );
}

export default App;
