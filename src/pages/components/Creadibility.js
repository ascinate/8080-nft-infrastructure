import React from "react";
import Arrow from "../../images/arrow.png";


function Creadibility(){



    return (
        <>
         
         <div className="container">
            <h2 className="text-center sub-head"> Credibility </h2>
            <div className="line"></div>

            <div className="row row-cols-1 row-cols-lg-2 bd-cre align-items-center">
                  <div className="col">
                     <img src="images/0xyLabsColorSVG1.png" className="cre-img" alt="pn"/>
                  </div>
                  <div className="col">
                     <p> The 8080Tools suite is a product initiative by 0xytocin Labs, the dev team behind many big projects
                     such as Project Godjira and SkyVerse. </p>
                     <p className="mt-4"> We are a 25+ member global team. 0xy's deployments have
                     processed more than 5000 ETH worth of value in less than a
                     year. We have always had a razor sharp focus on setting up
                     mint, stake and marketplace across top-tier NFT projects and
                     8080Tools is the productization of this expansive experience.</p>

                     <div className="d-flex  flex-column-reverse  flex-lg-row align-items-center mt-5">
                        <button className="btn  contact-btn ms-lg-0"> Contact Us </button>
                        <button className="btn  comon-buuton"> Learn More
                           <img src={Arrow} alt="arrow"/>
                        </button>
                     </div>
                  </div>
            </div>
         </div>
         
          
        </>
    )
};
export default Creadibility;