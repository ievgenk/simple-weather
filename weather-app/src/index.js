import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`
  ${styledNormalize}

  html,body{
    width:100%;
    height: 100%;
    font-size: 10px;
  }

  body{
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  }
`;

ReactDOM.render(<App />, document.querySelector("body"));
registerServiceWorker();
