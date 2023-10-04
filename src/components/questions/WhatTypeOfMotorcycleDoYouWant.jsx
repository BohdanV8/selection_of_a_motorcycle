import React from "react";
import Bike from "../Bike";
import Harley_Davidson_Breakout from "../../img/Harley Davidson Breakout.webp";
import BMW_R_1200_GS from "../../img/BMW R 1200 GS.jpg";
import Kawasaki_Z1000R_Edition from "../../img/Kawasaki Z1000R Edition.jpg";
import { useState } from "react";
const WhatTypeOfMotorcycleDoYouWant = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  return (
    <div className="text-center container">
      <h1>Який тип мотоцикла ви собі хочете?</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "Harley Davidson Breakout",
              img_path: Harley_Davidson_Breakout,
            });
          }}
        >
          Я хочу ефектний та потужний круїзер
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "BMW R 1200 GS",
              img_path: BMW_R_1200_GS,
            });
          }}
        >
          Я хочу мотоцикл для довгих подорожей
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "Kawasaki Z1000R Edition",
              img_path: Kawasaki_Z1000R_Edition,
            });
          }}
        >
          Я хочу справжнього звіра для швидкої їзди
        </button>
      </div>
      {selectedBike && <Bike bike={selectedBike} />}
    </div>
  );
};

export default WhatTypeOfMotorcycleDoYouWant;
