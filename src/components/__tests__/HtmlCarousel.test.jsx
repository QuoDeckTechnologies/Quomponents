//--------------------------------------
// Import from NPM
// -------------------------------------
import React from "react";
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import HtmlCarousel from "../Carousel/HtmlCarousel/HtmlCarousel.react";

describe("HtmlCarousel", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: HtmlCarousel,
    required: {
      content: [
        {
          image:
            "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
          tag: "new",
          header: "Component",
          content: "subtitle",
          selected: true,
          props: {
            asVariant: "primary",
          },
        },
      ],
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("animations", args);
  let component, content;
  content = [
    {
      image:
        "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
      tag: "new",
      header: "Component",
      content: "subtitle",
      selected: true,
      props: {
        asVariant: "primary",
      },
    },
  ];
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <HtmlCarousel
        content={content}
        onClick={() => { }}
      />
    );
  });
  it("should render and handle click event slickPrev on previous arrows", () => {
    const wrapper = shallow(
      <HtmlCarousel onClick={() => { }} />
    );
    wrapper.find(".qui-html-slick-prev").simulate("click");
  });
  it("should render and handle click event slickNext", () => {
    const wrapper = shallow(
      <HtmlCarousel onClick={() => { }} />
    );
    wrapper.find(".qui-html-slick-next").simulate("click");
  });
});
