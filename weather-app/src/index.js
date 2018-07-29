import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`
  ${styledNormalize}
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
