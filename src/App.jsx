import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NoPage from "./components/Nopage";
import FindCar from "./components/FindCar";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import './styles/index.css';
import UseProducts from "./components/UseProduct";


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Car-Dealing-Site" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="FindCar" element={<FindCar/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Services/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="FindCar/car/:id" element={<UseProducts/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;