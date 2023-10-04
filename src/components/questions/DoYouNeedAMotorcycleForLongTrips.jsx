import React from "react";
import Bike from "../Bike";
import { useState } from "react";
import HondaCBF600 from "../../img/Honda CBF600.png";
import Honda_Deauville_NT_700 from "../../img/Honda Deauville NT 700.jpg";
const DoYouNeedAMotorcycleForLongTrips = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  return (
    <div className="container text-center">
      <h1>Вам потрібен мотоцикл для довгих подорожей?</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({
              mark: "Honda_Deauville_NT_700",
              img_path: Honda_Deauville_NT_700,
            });
          }}
        >
          Так, Я обожнюю подоружувати
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            setSelectedBike({ mark: "Honda CBF 600", img_path: HondaCBF600 });
          }}
        >
          Мені потрібен мотоцикл для того, щоб поганяти та розслабитися після
          тяжкого дня
        </button>
      </div>

      {selectedBike && <Bike bike={selectedBike} />}
    </div>
  );
};

export default DoYouNeedAMotorcycleForLongTrips;
