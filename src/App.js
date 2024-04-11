import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Listning from "./pages/ProductListning/Listning";
import Footer from "./Component/Footer/Footer";
import DetailPage from "./pages/DetailPage/DetailPage";
import { baseUrl } from "./Api";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get(`${baseUrl}productData`).then((res) => { 
        // console.log(res.data,"app.js");
        setProductData(res.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(productData, "check");
  return (
  
      productData && productData.length !== 0 && (
        <BrowserRouter>
          <Header data={productData} />
    
          <Routes>
            <Route exact={true} path="/" element={<Home data={productData} />} />
            <Route exact={true} path="/about" element={<About />} />
            <Route exact={true} path="/cat/:id" element={<Listning data={productData} single={true} />} />
            <Route exact={true} path="/cat/:id/:id" element={<Listning data={productData} single={false} />} />

            <Route
              exact={true}
              path="/product/details"
              element={<DetailPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
    );
    
}

export default App;
