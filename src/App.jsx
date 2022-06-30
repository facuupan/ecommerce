import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { CustomProvider } from "./CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />
        <Main />
      </CustomProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
