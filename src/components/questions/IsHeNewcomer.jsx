import React from "react";
import { useNavigate } from "react-router";
const IsHeNewcomer = () => {
  var navigate = useNavigate();
  return (
    <div className="text-center container">
      <h1>Чи вважаєте ви себе новачком у водінні мотоцикла?</h1>
      <div className="row">
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            navigate("/DoYouWantASportbikeOrAChopper");
          }}
        >
          Так
        </button>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            navigate("/HowMuchMoneyYouWantToSpend");
          }}
        >
          Я досвідчений водій
        </button>
      </div>
    </div>
  );
};

export default IsHeNewcomer;
