import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../images/arrow.png";
import AlldataProducts from "./ProductsItemsApi";

function Products(){
    const [ allproducts, setProductsData] =useState(AlldataProducts);
    console.log(allproducts);


    

    return(
        <>
          <div className="products-div1">
             <div className="container">
                <h2 className="text-center sub-head"> Products </h2>
                <p className="col-lg-6 mx-auto text-center"> The 4 products: Allowlist, Mint, Stake & Marketplace allow you to instantly
                launch the necessary infrastructure for your NFT project </p>
                <div className="line"></div>

                <div className="allow-div1">

                  {
                    allproducts.map((curElem) =>{
                        const { id, title, paraone, paratwo, feature1, feature1dl, feature2, feature2dl,
                            feature3, feature3dl, feature4, feature4dl, action } = curElem;
                        return(
                            <>
                               
                            <div className="comon-alow-div">
                                <h2 className="text-center"> {title} </h2>
                                <p className="text-center col-lg-9 mx-auto"> {paraone} </p>

                                    <p className="text-center col-lg-9 mx-auto"> {paratwo} </p>

                                    <div className="row row-cols-1 row-cols-lg-4 my-5">

                                        <div className="col">
                                            <div className="comon-alow">
                                               <div className="lline-div"></div>
                                                <h5> {feature1} </h5>
                                                <p> {feature1dl} </p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="comon-alow">
                                            <div className="lline-div"></div>
                                                <h5> {feature2} </h5>
                                                <p> {feature2dl} </p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="comon-alow">
                                            <div className="lline-div"></div>
                                                <h5> {feature3} </h5>
                                                <p> {feature3dl} </p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="comon-alow">
                                            <div className="lline-div"></div>
                                                <h5> {feature4} </h5>
                                                <p>{feature4dl} </p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <h3 className="text-center"> {action} </h3>

                                    <button className="btn mx-auto mt-3 comon-buuton"> Get Started
                                        <img src={Arrow} alt="arrow"/>
                                    </button>

                            </div>
                     
                            </>
                        );
                       })
                    }

                        


                </div>

             </div>
          </div>
        </>
    )
};
export default Products;