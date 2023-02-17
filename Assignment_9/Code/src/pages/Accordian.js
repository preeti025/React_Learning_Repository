import React, {useState} from "react";

export const Accordian = (props) => {
    const [visible, setVisible] = useState(props.isVisible)
  return (
    <section style={{ border: "1px solid black ", padding: "1rem" }} onClick= {() =>{setVisible(!visible)}}>
      <h2 style={{ padding: "1rem" }}>{props.title}</h2>
      {visible&&
        <p style={{ padding: "1rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      }
      {/* <button
        style={{ padding: ".5rem 1rem", margin: "0 1rem" }}
        onClick={() => props.setIsVisible(true)}
      >
        Show
      </button>
      <button
        style={{ padding: ".5rem 1rem" }}
        onClick={() => props.setIsVisible(false)}
      >
        Hide
      </button> */}
    </section>
  );
};
