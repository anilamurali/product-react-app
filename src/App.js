import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Productentry from './Component/Productentry';
import Productview from './Component/Productview';

import Poductsearch from './Component/Poductsearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Productentry/>}/>
      <Route path='/search' exact element={<Poductsearch/>}/>
      <Route path='/view' exact element={<Productview/>}/>
    </Routes>
    </BrowserRouter>
    


    </>
  );
}

export default App;
