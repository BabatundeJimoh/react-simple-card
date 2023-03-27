import React from "react";
import "./Styles.css";

const Image = (props) => {
  return (
    <>
      <img className="ima" src={props.img} />
    </>
  );
};
export default Image;
