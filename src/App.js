import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Landing/Footer"
import Home from "./views/Home";
import ItemDetailContainer from "./views/ItemDetailContainer";
import Category from "./views/Category";
import IndividualCategory from "./views/IndividualCategory";
import Cart from "./views/Cart";
import { CartProvider } from "./components/Landing/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/category/juguetes" component={Category} />
            <Route
              path="/category/juguetes/:category"
              component={IndividualCategory}
            />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
