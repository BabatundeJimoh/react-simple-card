import React, { Component } from "react";
import "./Styles.css";

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p className="para">{this.props.hello}</p>
      </>
    );
  }
}

export default Description;
