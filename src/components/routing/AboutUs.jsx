import React from "react";
import PropTypes from "prop-types";

export default function AboutUs({age = "20"}) {

  return (
    <div>
      <h1>About Us</h1>
      <p>I am {age} years old.</p>
    </div>
  );
}

AboutUs.propTypes = {
  age: PropTypes.number
};