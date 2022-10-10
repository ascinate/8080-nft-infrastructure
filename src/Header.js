import React, {useRef, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight, BsFillCircleFill, BsX  } from "react-icons/bs";
import Logo from "../src/images/logo.png";
import Arrow from "../src/images/arrow.png";
import AllModalData from "./pages/components/ProdcutsMoadlApii";
import { FaBars } from "react-icons/fa";


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

    const [ allproducts, setProductsData] =useState(AllModalData);
    console.log(allproducts);

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
                           <FaBars/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a href="#howitwork" className="nav-link active">How it works</a>
                            </li>
                            <li className="nav-item">
                              <a href="#credibility" className="nav-link"> Credibility </a>
                            </li>
                            <li className="nav-item">
                              <a href="#products" className="nav-link"> Products </a>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/" className="btn login-btn"> Login </NavLink>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn comon-buuton get-started-bty" data-bs-toggle="modal" data-bs-target="#productsModal"> Get Started 
                                <img src={Arrow} alt="arrow"/>
                            </button>
                            </li>
                            
                          </ul>
                          
                        </div>
                      </div>
                   </nav>
                 </div>
              </div>
          </div>
        </section>


        <div className="modal fade" id="productsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen products-md">
              <div className="modal-content">
                
                <div className="modal-body">
                    <div className="inside-prodcuts1">
                        <div className="d-flex justify-content-center">
                             <h2 className="text-center"> Choose Product </h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                               <BsX/>
                            </button>
                        </div>
                        
                        <p className="text-center"> To get started, connect a product below </p>
                        <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-4 mt-4">
                        {
                          allproducts.map((curElem) =>{
                              const { id, titel, para, action} = curElem;
                              return(
                                  <>
                                  
                                  
                                      <div className="col">
                                        <div className="comon-part1-ps">
                                            <h2> {titel} </h2>
                                            <p> {para} </p>
                                            {action}
                                        </div>
                                      </div>
                                  
                           
                                  </>
                              );
                             })
                           }
                          </div>
                        
                           
                         </div>
                    </div>

                    <p className="md-fot text-center mt-4"> By connecting, you agree to the 8080 <NavLink to="/"> Terms of Use </NavLink> and <NavLink to="/"> Privacy Policy </NavLink> </p>
                </div>
                
              </div>
            </div>
        </div>


        </>
    )
};

export default Header;