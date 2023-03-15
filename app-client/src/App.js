import './App.css';
import Home from './pages/home/Home';
import './Font-Awesome-6.x/css/all.min.css'
import ProductsListe from './pages/productsListe/ProductsListe';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Pay from './pages/pay/Pay';

function App() {
  const user= false;
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/productliste/:category' element={<ProductsListe/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={ user? <Navigate to='/'/> :<Login/>}/>
            <Route path='/register' element={user? <Navigate to='/'/> :<Register/>}/>
             {/* <Route path='/pay' element={<Pay/>} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
