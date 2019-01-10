import { initializeDomainLayer } from "../../domain";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { App } from "../App";
import React from "react";

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
});
