import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Home from "./views/Home";
import ItemDetailContainer from "./views/ItemDetailContainer";
import Category from "./views/Category"




function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/item/:id' component={ItemDetailContainer}/>
      <Route path='/category/category:id' component={Category}/>

      </Switch>
      
      

     
      
    </div>
    </Router>
  );
    
    
}

export default App;
