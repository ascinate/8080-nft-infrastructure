import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../src/images/8080logo3.png";
import ModalLogo from "./images/8080logo3MD.png";
import Arrow from "./images/arrow.png";
import { BsArrowRight, BsFillCircleFill, BsX  } from "react-icons/bs";



function Footer(){
    return(
        <>
         <footer className="float-start w-100 py-5 ft-new">
            <div className="container">
                <div className="col-lg-8 text-center d-block mx-auto">
                    
                     <NavLink to="/" className="footer-lg">
                         <img src={FooterLogo} alt="logo"/>
                     </NavLink>
                     <p className="text-white mb-0 recive-text1"> All Rights Reserved</p>
                </div>
            </div>
         </footer>


         <div className="modal fade modal-logoiny" id="logoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
               
                <div className="modal-body">
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <BsX/>
                   </button>
                    <div className="logo-modal-div1">
                         
                         <img src={ModalLogo} className="logomd" alt="logo"/>
                         <h2 className="text-center mt-0"> Allowlist </h2>
                         <button type="button" className="btn col-wallte-btn"> Connect Wallet
                         <img src={Arrow} alt="arrow"/>
                         </button>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </>
    )
};
export default Footer;