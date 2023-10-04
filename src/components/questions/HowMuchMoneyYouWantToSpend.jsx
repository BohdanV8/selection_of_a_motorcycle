import React from "react";
import { useNavigate } from "react-router-dom";
const HowMuchMoneyYouWantToSpend = () => {
  var navigate = useNavigate();
  return (
    <div className="text-center container">
      <h1>Скільки грошей ви готові витратити на це задоволення?</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            navigate("/DoYouNeedAMotorcycleForLongTrips");
          }}
        >
          Я хочу щось класне, але щоб при цьому щоб ціна не була космічною
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            navigate("/WhatTypeOfMotorcycleDoYouWant");
          }}
        >
          На таке задоволення Я екномити не збираюсь!
        </button>
      </div>
    </div>
  );
};

export default HowMuchMoneyYouWantToSpend;
