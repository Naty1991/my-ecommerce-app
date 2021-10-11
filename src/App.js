import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Landing/ItemListContainer";
import ItemDetailContainer from "./components/Landing/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi toy store app.'"/>

      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
