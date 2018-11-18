import * as React from "react";
import { render } from "react-dom";
import { Navigation } from "./Navigation";
import { CoreExample } from "./CoreExample";
import { SelectExample } from "./SelectExample";

import "./app.css";

const App = () => (
  <div>
    <Navigation />
    <CoreExample />
    <SelectExample />
  </div>
);

render(<App />, document.getElementById("root"));
