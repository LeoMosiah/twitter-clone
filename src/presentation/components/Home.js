import React, { Fragment } from "react";
import { Main } from "./Main";
import { NavBar } from "../containers/NavBar";

export const HomeComponent = () => (
  <Fragment>
    <NavBar />
    <Main />
  </Fragment>
);
