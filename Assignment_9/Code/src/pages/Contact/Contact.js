import React, { useState } from "react";
import { Accordian } from "../Accordian";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [accordian, setAccordian] = useState(true);
  return (
    <div style={{ padding: "2rem", margin: "2rem" }}>
      {accordian&& 
        <Accordian
          title={"About Us"}
          isVisible={isVisible}
          setAccordian={setAccordian}
        />
      }
      {accordian&&
        <Accordian
          title={"About Team"}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      }
    </div>
  );
};

export default Contact;
