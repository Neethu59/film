
import Movie from './Componets/Movie/Movie';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Navbar from './Componets/Navbar/Navbar';
import View from './Componets/View/View';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Movie/>}/>
     <Route path="/view/:id" element={<View/>}/>
     </Routes>
     </BrowserRouter> 
  );
}

export default App;
