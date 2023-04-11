import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Mostwanted from "./Header Links/Mostwanted";
import ProductPage from "./components/single_product/productPage";

const App = () => {

    return (
    <div className="flex-1 h-fit">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Home />} />
        <Route path="/mostwanted" element={<Mostwanted />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
