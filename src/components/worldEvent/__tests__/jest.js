import { mapStateToProps } from "../index";

const mockProps = {
  event: { time: "day" }
};

const store = {
  event: { time: "day" },
  world: {}
};

describe("Check event props", () => {
  const props = mapStateToProps(store);

  it("props.equal", () => {
    expect(props).toEqual(mockProps);
  });

  //xit - пропуcтить текущий тест в группе
  //fit - пропустить остальные тесты в группе
  it("props.haveProperty", () => {
    expect(props).toHaveProperty("event");
  });
});
