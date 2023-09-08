import logo from './logo.svg';
import './App.css';
import Navigation from "./customers/components/Navigation/Navigation"
import HomePage from "./customers/Pages/HomePages/HomePage";
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';
import Order from './customers/components/Order/Order';
import OrderDetails from './customers/components/Order/OrderDetails';

function App() {
    return ( 
    <div className="">
       <Navigation/>

        <div>
                {/* <HomePage/> **/}
                {/* <Product/> */}
                {/*  <ProductDetails/> */}
                {/* <Cart/> */}
                {/* <Checkout/> */}
                {/* <Order/> */}
                <OrderDetails/>
        </div>
        <Footer/>
    </div>

    );
}

export default App;