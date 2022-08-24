import React from "react";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1>Nike Air Max</h1>
        <p>
          Nike’s first lifestyle Air Max brings you style, comfort and big
          attitude in one sleek package. With a design inspired by Air Max
          icons, the Nike Air Max 270 showcases one of our greatest innovations
          with large Air windows and a fresh array of colors.
        </p>
        <button>Shop now</button>
      </div>

      <img
        alt=""
        src="https://static.nike.com/a/images/t_default/2ae01600-19b1-4d59-a541-d5bb68af8460/air-max-270-mens-shoes-KkLcGR.png"
      />
    </div>
  );
};

export default Main;
