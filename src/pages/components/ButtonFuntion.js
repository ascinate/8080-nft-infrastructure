import React, {useState} from "react";
import Arrow from "../../images/arrow.png";

const ButtonFuntion = () => {
    const [isPreview, setIsPreview] = useState(true);
    if (isPreview) {
        return (
          <div>
           

            <button className="btn mx-auto mt-3 comon-buuton" data-bs-toggle="modal" data-bs-target="#logoModal"> Get Started
                <img src={Arrow} alt="arrow"/>
            </button>
             
          </div>
        );
      } else {
        return (
          <div>
           <button className="btn mx-auto mt-3 comon-buuton" > 
              Coming Soon
           </button>

           
          </div>

          
          
        );
      }

  };

export default ButtonFuntion;
