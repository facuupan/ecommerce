import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Carrito from "./components/Carrito";

const App = () => {
  return (
    <BrowserRouter>
      
        <NavBar inHeader={true} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
        <NavBar inHeader={false} />
     
    </BrowserRouter>
  );
};

export default App;
