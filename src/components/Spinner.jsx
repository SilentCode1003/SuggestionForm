import React from "react";
import PropTypes from "prop-types";

import { ClipLoader } from "react-spinners";

const SpinnerComponent = ({ loading }) => {
  const overide = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: "50px",
    height: "50px",
  };
  return <ClipLoader color="#4338ca" loading={loading} cssOverride={overide} />;
};

SpinnerComponent.propTypes = {
  loading: PropTypes.bool,
};

export default SpinnerComponent;
