import React from "react";
import { shallow } from "enzyme";
import Profile from "../Profile";

describe("profile render", () => {
  const getWorld = () => {};
  const createWorld = () => {};

  const renderProfile = worldName => {
    const world = { name: worldName };

    const component = shallow(
      <Profile getWorld={getWorld} createWorld={createWorld} world={world} />
    );

    //console.log(component.html());
    expect(component.find("input").length).toEqual(1);

    //console.log(component.find("input").get(0).props.value);
    expect(component.find("input").get(0).props.value).toEqual(world.name);
  };

  it("profile render empty", () => {
    renderProfile("");
  });

  it("profile render Мир1", () => {
    renderProfile("Мир1");
  });
});
