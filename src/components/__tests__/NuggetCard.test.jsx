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
import NuggetCard from "../NuggetCard/NuggetCard.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("NuggetCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: NuggetCard,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);

  hasValid("positions", args);
  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
  let component;

  let mockFn = jest.fn();
  jest.spyOn(navigator.clipboard, "writeText");
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <NuggetCard
        published={false}
        tags={[]}
        category="profiler"
        name="Measure your sales readiness"
        description="Take this quick profile test to check how well you are prepared for a sales job"
        image="https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
        points="200"
        identifier="XrPmy_OAK"
        asFloated="inline"
        isHidden={false}
        isDisabled={false}
        onClick={mockFn}
      />
    );
  });

  it("should copy the link when clicked on copy icon", () => {
    component.setProps({
      category: "profiler",
      identifier: "XrPmy_MND",
    });
    let iconBlock = component.find(IconBlock);
    iconBlock.simulate("click");
  });

  it("should simulate the ArcMenu on click", () => {
    component.setProps({ arcFn: jest.fn() });
    let arcMenu = component.find(ArcMenu);
    arcMenu.simulate("click");
  });

  it("should show image when passed image", () => {
    component.setProps({
      category: "profiler",
      image:
        "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
    });
    component.find(BannerCard).simulate("click");
    expect(component.find(BannerCard).props().image).toBe(
      "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
    );
  });

  it("should show default image when passed nothing in image", () => {
    component.setProps({
      category: "profiler",
      image: "",
    });
    expect(component.find(BannerCard).props().image).toBe("default.jpeg");
  });

  it("should display showmore button when passed more than 5 tags and on click should show all the tags", () => {
    component.setProps({
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6"],
    });
    let showMore = component.find("button");
    expect(showMore.exists()).toBe(true);
    component.find("button").simulate("click");
    component.find("button").simulate("click");
  });

  it("should display showmore button when passed long text in the tag and on click should show all the tags", () => {
    component.setProps({
      tags: ["Pneumonoultramicroscopicsilicovolcanoconiosis"],
    });
    let showMore = component.find("button");
    expect(showMore.exists()).toBe(true);
    component.find("button").simulate("click");
    component.find("button").simulate("click");
  });

  it("should show the published nugget card", () => {
    component.setProps({ published: true });
    expect(component.find(NuggetBlock).props().status).toBe("published");
  });

  it("should render correctly when Clicked on copy Icon", () => {
    component
      .find(".qui-nugget-card-copy-icon-container")
      .simulate("mouseleave");
    component.find(".qui-nugget-card-copy-icon-container").simulate("click");
  });
  it("should render correctly when Clicked on copy IconBlock", () => {
    component
      .find(".qui-nugget-card-icon-block-copy-container")
      .simulate("click");
  });
});
