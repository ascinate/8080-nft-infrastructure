import React, {useState} from "react";
import Arrow from "../../images/arrow.png";

const GetStartButton = () => {

        return (
          <div>
           

            <button className="btn comon-buuton"> Get Started
                <img src={Arrow} alt="arrow"/>
            </button>
             
          </div>
        );
     

  };

export default GetStartButton;
