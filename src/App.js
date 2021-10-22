
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './home/Home';
import Arrival from './arrival/Arrival';
import Product from './product/Product';
import Footer from './footer/Footer';
import Rate from './rate/Rate';
import Order from './order/Order';
import Pay from './pay/Pay';

function App() {
  return (
    // <div className="App">
    //     <Home />
    //     <Arrival />
    //     <Product />
    //     <Footer />
    //     <Pay />
    //     <Order />
    // </div>

    <Router>
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/order" component={Order}></Route>
        <Route exact path="/pay" component= {Pay}></Route>
      </switch>
    </Router>
    
  );
}

export default App;
