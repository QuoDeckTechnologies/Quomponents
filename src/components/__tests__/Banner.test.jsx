import React from "react";
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
import Banner from "../Carousel/Banner/Banner.react";

describe("Banner", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Banner,
    required: {
      content: [
        {
          image:
            "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
          header: "Welcome to the Learning Library",
          description:
            "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
        },
        {
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          header: "What is Lorem Ipsum?",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
      onClick: () => {},
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);

  hasValid("colors", args);
  hasValid("animations", args);

  hasValid("hidden", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  let onClick = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Banner content={[]} withColor={null} onClick={onClick} />
    );
  });

  it("should render correctly when passed Content props", () => {
    let data = [
      {
        image:
          "https://www.gannett-cdn.com/media/2019/01/18/USATODAY/usatsports/gettyimages-500740897.jpg?crop=1365,768,x0,y0&width=660&height=372&format=pjpg&auto=webp",
        header: "Welcome to the Learning Library",
        description:
          "There is always something new to learn here. Articles, games, the whole kitchen sink. Just click to enter and have fun...",
      },
      {
        image:
          "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        header: "What is Lorem Ipsum?",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ];
    component.setProps({ content: data });
    expect(component.exists()).toBe(true);
  });
});
