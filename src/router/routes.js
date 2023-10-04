import DoYouNeedAMotorcycleForLongTrips from "../components/questions/DoYouNeedAMotorcycleForLongTrips";
import HowMuchMoneyYouWantToSpend from "../components/questions/HowMuchMoneyYouWantToSpend";
import IsHeNewcomer from "../components/questions/IsHeNewcomer";
import SportOrChopper from "../components/questions/SportOrChopper";
import WhatTypeOfMotorcycleDoYouWant from "../components/questions/WhatTypeOfMotorcycleDoYouWant";

export const appRoutes = [
  { path: "/", element: IsHeNewcomer },
  { path: "/DoYouWantASportbikeOrAChopper", element: SportOrChopper },
  { path: "/HowMuchMoneyYouWantToSpend", element: HowMuchMoneyYouWantToSpend },
  {
    path: "/DoYouNeedAMotorcycleForLongTrips",
    element: DoYouNeedAMotorcycleForLongTrips,
  },
  {
    path: "/WhatTypeOfMotorcycleDoYouWant",
    element: WhatTypeOfMotorcycleDoYouWant,
  },
];
