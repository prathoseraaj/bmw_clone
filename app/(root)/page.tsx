import React from "react";
import Home from "../home/page";
import Models from "../models/page";
import Offer from "../offer/page";

const page = () => {
  return (
    <div>
      <Home />
      <Models />
      <Offer />
      <div className="mt-30 text-gray-300">
        <hr />
      </div>
    </div>
  );
};

export default page;
