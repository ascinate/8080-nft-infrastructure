import React, {useRef, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsFillCircleFill  } from "react-icons/bs";
import Logo from "../src/images/logo.png";
import Arrow from "../src/images/arrow.png";

function Header(){

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    
    const [isActive, setActive] = useState("false");
    const handleclick = () => {
        setActive(!isActive);
      };

      const addclass=()=>{
        document.querySelector("#main-total").classList.add('new-show-socal-div');
    }

    return(
        <>
        <section className={scroll ? "full-with" : "fixed-with"}>
          <div className="top-sec-bar navbar-fixed-top comon-page float-start w-100">
              <div className="container">
                 <div className="top-inside-div">
                   <nav className="navbar navbar-expand-lg navbar-light">
                      <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand"> 
                           <img src={Logo} alt="logo"/>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <NavLink to="/" className="nav-link active">How it works</NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to="/" className="nav-link"> Credibility </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to="/" className="nav-link"> Products </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/" className="btn login-btn"> Login </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/" className="btn comon-buuton get-started-bty"> Get Started 
                                <img src={Arrow} alt="arrow"/>
                            </NavLink>
                            </li>
                            
                          </ul>
                          
                        </div>
                      </div>
                   </nav>
                 </div>
              </div>
          </div>
        </section>
        </>
    )
};

export default Header;