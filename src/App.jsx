import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  return (
    <section className="vh-100 fw-semibold">
      <NavBar inHeader={true}/>
      <ItemListContainer greetings="Bienvenido" />

      <NavBar inHeader={false}/>
    </section>
  );
};

export default App;
