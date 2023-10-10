import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Error from './Error';
import SingleProduct from './SingleProduct';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Cart';
import { Outlet } from 'react-router-dom';
const PageLayout = () => (
  <>
    <Header />
    <Outlet /> 
    <Footer />
  </>
);
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
           <Route path='/' element={<Home/>}>Home</Route>
           <Route path='/about' element={<About/>}>About</Route>
           <Route path='/product' element={<Product/>}>Product</Route>
           <Route path='/contact' element={<Contact/>}>Contact</Route>
           <Route path='/singleproduct/:id' element={<SingleProduct/>}>Product Detail</Route>
           <Route path='/cart' element={<Cart/>}>Contact</Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
