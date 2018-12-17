import { mapStateToProps } from "../index";

const mockProps = {
  event: { time: "day" },
};

const store = {
  event: { time: "day" },
  world: {},
};

describe("Check event props", () => {
  const props = mapStateToProps(store);
  it("mapState", () => {
    expect(props).toEqual(mockProps);
  });
});
