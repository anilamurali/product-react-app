import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Productentry from './Component/Productentry';
import Productview from './Component/Productview';

import Poductsearch from './Component/Poductsearch';

function App() {
  return (
    <>
    <Productview/>

    <Poductsearch/>

    </>
  );
}

export default App;
