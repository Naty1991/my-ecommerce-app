import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/Landing/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi resto-app 'Lo de Acevedo.'"/>
    </div>
  );
}

export default App;
