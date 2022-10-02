import React from "react";

const Buttons = ({ children }) => {
  return (
    <button
      style={{
        width: "230px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alighnItems: "center",
        paddingBottom: "0.8rem",
        paddingTop: "0.3rem",
        fontSize: "0.8rem",
        marginLeft: "5rem",
        color: "white",
        background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
        borderRadius: "10px",
      }}
    >
      {children}
    </button>
  );
};

export default Buttons;
