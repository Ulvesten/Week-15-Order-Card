import React from "react";
import OrderSum from "../OrderSum/OrderSum";
import Plan from "../Plan/Plan";
import "./Container.css";

export const Container = () => {
  return (
    <div className="Container__Main">
      <div className="Container__Image"></div>
      <div className="Container__Content">
        <OrderSum />
        <Plan />
        <div className="Container__Plan"></div>
      </div>
    </div>
  );
};
