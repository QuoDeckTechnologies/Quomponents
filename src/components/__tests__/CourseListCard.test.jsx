//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import CourseListCard from "../CourseListCard/CourseListCard.react";

describe("CourseListCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: CourseListCard,
    required: {
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CourseListCard imageLibrary={[]} withColor={null} onClick={() => { }} />
    );
  });

  it("should render correctly when passed content props", () => {
    component.setProps({
      id: "",
      name: "BALLOON BURST",
      description:
        "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
      checked: true,
      viewedPercentage: 100,
      image: { id: "background-image", extention: "" },
      imageLibrary: [
        {
          id: "background-image",
          image:
            "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when image key is not provided in content props", () => {
    component.setProps({
      id: "",
      name: "BALLOON BURST",
      description:
        "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
      viewedPercentage: 100,
      checked: true,
      image: null,
      imageLibrary: [
        {
          id: "background-image",
          image:
            "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked card", () => {
    component.find(".qui-course-list-card-container").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
