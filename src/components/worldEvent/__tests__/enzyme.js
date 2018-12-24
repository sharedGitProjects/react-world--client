import React from "react";
import { render } from "enzyme";
import WorldEvent from "../WorldEvent";

describe("worldEvent tests", () => {
  const getTemperature = () => {};
  const getTimeOfday = () => {};

  it("worldEvent render", () => {
    const component = render(
      <WorldEvent getTemperature={getTemperature} getTimeOfday={getTimeOfday} />
    );

    console.log(component.html());
    console.log(component.text());
    expect(component.find(".command").length).toEqual(2);
  });

  it("worldEvent render day", () => {
    const event = {
      event: { temperature: 10, time: "day" }
    };

    const component = render(
      <WorldEvent
        getTemperature={getTemperature}
        getTimeOfday={getTimeOfday}
        event={event}
      />
    );

    expect(component.find(".command").text()).toEqual(
      "Температура (10)Время суток (день)"
    );
  });

  it("worldEvent render night", () => {
    const event = {
      event: { temperature: 21, time: "night" }
    };

    const component = render(
      <WorldEvent
        getTemperature={getTemperature}
        getTimeOfday={getTimeOfday}
        event={event}
      />
    );

    expect(component.find(".command").text()).toEqual(
      "Температура (21)Время суток (ночь)"
    );
  });
});
