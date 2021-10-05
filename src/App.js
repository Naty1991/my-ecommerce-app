import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Landing/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi toy store app.'"/>
      
    </div>
  );
}

export default App;
