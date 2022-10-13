import React from "react";
import Banner from "./components/Banner";
import HowItWork from "./components/HowItWork";
import Creadibility from "./components/Creadibility";
import Multilogo from "./components/Multilogo";
import Products from "./components/Products";

function Home(){


    return(
        <>
          <Banner/>
          <section className="float-start w-100 body-total-part scrollspy-example" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="100" tabindex="0">
             <div id="howitwork" className="how-it-work-1">
                <HowItWork/>
             </div>
             <div id="credibility" className="credibility-div">
                 <Creadibility/>
             </div>

             <Multilogo/>
             <div id="products" className="products-div1">
                 <Products/>
             </div>
          </section>
        </>
    )
};
export default Home;