import './App.css';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './MoviePage';
import Error from './Error';
import { Prov } from './context';

const App = () => {

  return (
    <>
      <Prov>
        <HashRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="*" element={<Error />} />
              </Routes>
        </HashRouter>
      </Prov>
        
    </>
  );
}

export default App;
