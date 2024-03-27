import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import {useEffect, useState} from "react";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";

const BASE_USRL = "http://localhost:8000/cities"

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_USRL);
        const data = await res.json();
        setCities(data);
      } catch(err) {
        alert("Error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Navigate replace={true} to="cities"/>} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

export default App;