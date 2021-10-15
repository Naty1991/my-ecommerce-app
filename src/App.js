import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Home from "./views/Home";
import ItemDetailContainer from "./views/ItemDetailContainer";




function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/detail/:id' component={ItemDetailContainer}/>

      </Switch>
      
      

     
      
    </div>
    </Router>
  );
    
    
}

export default App;
