import { initializeDomainLayer } from "../../domain";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { App } from "../App";
import React from "react";
import { Router } from "../Router";

const { store } = initializeDomainLayer();

describe("<App />", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("renders without crashing", () => {
    expect(wrapper).toExist();
  });

  it("renders the <Router />", () => {
    expect(wrapper.find(Router)).toExist();
  });
});
