import React from "react";
import Arrow from "../../images/arrow.png";

function HowItWork(){
    return(
        <>
            
                <div className="container">
                   <h2 className="text-center sub-head"> How 8080 Works </h2>
                   <p className="text-center col-lg-6 mx-auto"> Once you launch using 8080, our team can work with you on deeper
                   customizations or to transfer all 8080 dApps to your cloud </p> 
                   <div className="line"></div>
                   <div className="row row-cols-1 row-cols-lg-2 bd-how">
                        <div className="col">
                            <h2 className="sub-head"> It's insanely easy to <span className="d-block">
                            get started </span> </h2>
                            <p className="col-lg-8"> Leverage our highly optimised environment to
                            launch allowlist, mint, stake or marketplace
                            in minutes</p>
                            <div className="d-none d-lg-block">
                                 <button className="btn mt-4 comon-buuton" data-bs-toggle="modal" data-bs-target="#productsModal"> Get Started
                                    <img src={Arrow} alt="arrow"/>
                                 </button>
                            </div>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                               <li>
                                 <div className="comon-part1">
                                    <figure>
                                       <img src="images/launch.png"/>
                                    </figure>
                                    <div className="right-content1">
                                       <h2> Launch </h2>
                                       <p> Launch state-of-the-art dApps to run your NFT
                                       brand in minutes </p>
                                    </div>
                                 </div>
                               </li>
                               <li>
                                 <div className="comon-part1">
                                    <figure>
                                       <img src="images/customize.png"/>
                                    </figure>
                                    <div className="right-content1">
                                       <h2> Customise </h2>
                                       <p> Our team of elite engineer is always on standby
                                       to help you add to tools launched via 8080 </p>
                                    </div>
                                 </div>
                               </li>
                               <li>
                                 <div className="comon-part1">
                                    <figure>
                                       <img src="images/ownership.png"/>
                                    </figure>
                                    <div className="right-content1">
                                       <h2> Get Ownership </h2>
                                       <p> At an aided call. we will deploy everything into your server
                                       infrastructure to ensure you are in complete control </p>
                                    </div>
                                 </div>
                               </li>
                            </ul>
                            <div className="d-block d-lg-none">
                                 <button className="btn mt-4 comon-buuton" data-bs-toggle="modal" data-bs-target="#productsModal"> Get Started
                                    <img src={Arrow} alt="arrow"/>
                                 </button>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
           
        </>
    )
};
export default HowItWork;