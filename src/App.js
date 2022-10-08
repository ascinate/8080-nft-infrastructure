import react from "react";
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Header from "../src/Header";
import Footer from "../src/Footer";
import Home from "./pages/Home";
import WebFont from 'webfontloader';

function App() {

  WebFont.load({
    custom: {
      families: ['FuturaBoldfont'],
      families: ['futuramediumbt'],
      families: ['PuntaExtrabold'],
      families: ['FuturaMedium'],
      families: ['FuturaBold'],
      families: ['AvenirBlack'],
      families: ['futuramediumitalic'],
      families: ['PuntaRegular'],
      families: ['LEMONMILKRegular'],
    },
  });

  return (
    <div className="App">
        <Router>
            <Header/>
             <Routes>
                <Route excaexact="true" path="/" element={<Home/>}/>
                
                  
                  
                
                  
             </Routes>
             <Footer/>
        </Router>
    </div>
  );
}

export default App;
