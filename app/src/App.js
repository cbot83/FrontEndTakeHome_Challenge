// @ts-check
import * as React from "react";

import { allStations } from "./helpers/Api";
import { Navigation } from "./components/Navigation.js";

function App() {
  allStations();

  return <Navigation />;
}

export default App;
