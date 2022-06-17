import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <section className="vh-100 fw-semibold">
      <NavBar inHeader={true}/>
      <ItemListContainer greetings="Bienvenido" />
      <ItemDetailContainer />
      <NavBar inHeader={false}/>
    </section>
  );
};

export default App;
