import React, {useState} from "react";
import AlldataLogo from "./MultiLogoApi";

function Multilogo(){
    const [ alllogo, setPreLogData] =useState(AlldataLogo);
    console.log(alllogo);

    return(
        <>

           <div className="multi-logo-div">
               <div className="container">
                   <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-items-center">

                   {
                    alllogo.map((curElem) =>{
                        const { id, name, img } = curElem;
                        return(
                            <>
                               
                            <div className="col text-center">
                                <figure className="m-auto comon-logo d-table">
                                    <img src={img} alt={name}/>
                                </figure>
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
export default Multilogo;