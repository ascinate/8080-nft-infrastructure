import React from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../images/arrow.png";

function Banner(){
    return(
        <>
          <section className="float-start w-100 banner">
             <div className="container">
                 <div className="ban-text text-center">
                    <h1> <span className="sp-color">  Launch </span> Your 
                      <span className="d-block"> NFT Infrastructure </span>
                    </h1>

                    <ul className="list-unstyled d-flex align-items-center justify-content-center">
                       <li>
                         <NavLink to="/">
                            Allowlist
                         </NavLink>
                       </li>
                       <li>
                         <NavLink to="/">
                            Mint
                         </NavLink>
                       </li>
                       <li>
                         <NavLink to="/">
                           Stake
                         </NavLink>
                       </li>
                       <li>
                         <NavLink to="/">
                         Markeplace
                         </NavLink>
                       </li>
                    </ul>

                    <p className="text-center col-lg-6 mx-auto"> 8080 allows you to instantly launch your NFT infrastructure end-to-end.
                    Reclaim dev time and focus on making it moon! </p>

                    <button className="btn mx-auto comon-buuton"> Get Started
                       <img src={Arrow} alt="arrow"/>
                    </button>
                 </div>
             </div>
          </section>
        </>
    )
};
export default Banner;