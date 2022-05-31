import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings="Bienvenido" />
    </div>
  );
};

export default App;
