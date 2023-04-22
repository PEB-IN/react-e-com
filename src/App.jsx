import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Mostwanted from "./Header Links/Mostwanted";
import ProductPage from "./components/single_product/productPage";
import LoginForms from "./components/Home/LoginForms";
import Otp from "./pages/Otp";
import FacingIssue from "./pages/FacingIssue";
import Registration from "./pages/Registration";
import Recover from "./pages/Recover";

const App = () => {
  return (
    <div className="flex-1 h-fit">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<ProductPage />} />
        <Route path="/mostwanted" element={<Mostwanted />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/loginforms" element={<LoginForms />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/facingissue" element={<FacingIssue />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
