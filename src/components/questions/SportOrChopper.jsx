import React from "react";
import Bike from "../Bike";
import geon from "../../img/Geon.jpg";
import Kawasaki_Z250SL from "../../img/KawasakiZ250SL.webp";
import Honda_CMX500_Rebel from "../../img/Honda CMX500 Rebel.webp";
import { useState } from "react";
const SportOrChopper = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  return (
    <div className="text-center container">
      <h1>Ви хотіли б собі мотоцикл типу чоппер чи спорт?</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({ mark: "Geon Blackster 250 V2", img_path: geon });
          }}
        >
          Чоппер
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "Kawasaki Z250SL",
              img_path: Kawasaki_Z250SL,
            });
          }}
        >
          Спорт
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "Honda CMX500 Rebel",
              img_path: Honda_CMX500_Rebel,
            });
          }}
        >
          Я б хотів мотоцикл типу бобер але з новаторським та сучасним
          індивідуальним стилем
        </button>
      </div>
      {selectedBike && <Bike bike={selectedBike} />}
    </div>
  );
};

export default SportOrChopper;
