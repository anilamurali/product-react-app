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
navbar
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Productentry/>}/>
      <Routea path='search' exact element={<Poductsearch/>}/>
      <Route path='view' exact element={<Productview/>}/>
    </Routes>
    </BrowserRouter>
    <Productview/>

    <Poductsearch/>
Development

    </>
  );
}

export default App;
