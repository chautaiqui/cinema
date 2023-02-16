import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider  } from "react-redux";
import store from "./store";
import App from "@/container/app";
import  "./style.scss";

document.addEventListener('DOMContentLoaded', function (event) {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  );
})


if (module?.['hot']) { // enables hot module replacement if plugin is installed
  module?.['hot'].accept();
}