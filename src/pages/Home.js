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
          <section className="float-start w-100 body-total-part">
             <HowItWork/>
             <Creadibility/>
             <Multilogo/>
             <Products/>
          </section>
        </>
    )
};
export default Home;