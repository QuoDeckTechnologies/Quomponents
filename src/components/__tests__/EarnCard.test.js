//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import EarnCard from "../EarnCard/EarnCard.react";

describe("EarnCard", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <EarnCard
        content={{
          image: "static/media/Image.62bfb45a.png",
          tag: "restricted",
          title: "QuoDeck Emerging Leadership Program",
          description:
            "Win a chance to apply for this exclusive opportunity for taking your career to the stars",
          icon: "fas fa-square",
          dates: {
            end_date: "3rd May",
            start_date: "28th Feb",
          },
          topics: [
            {
              name: "Name One",
              contentList: [],
              checked: true,
            },
            {
              name: "Name Two",
              contentList: [],
              checked: false,
            },
            {
              name: "Name Three",
              contentList: [],
              checked: false,
            },
            {
              name: "Name Four",
              contentList: [],
              checked: false,
            },
            {
              name: "Name Five",
              contentList: [],
              checked: true,
            },
            {
              name: "Name Six",
              contentList: [],
              checked: false,
            },
          ],
        }}
        asVariant="primary"
        asSize="normal"
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "#b60d17",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => console.log("EanrCard testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it('Each component must have a one `qui` parent class',() => {
    expect(component.find('.qui').exists()).toBe(true)
})
  it("should render correctly without withColor prop", () => {
    component.setProps({
      withColor: null,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isDisabled as true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isHidden as true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with different colors", () => {
    component.setProps({
      withColor: {
        backgroundColor: "green",
        accentColor: "red",
        textColor: "black",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if content.contentList has objects in it", () => {
    component.setProps({
      content: {
        image: "static/media/Image.62bfb45a.png",
        tag: "restricted",
        title: "QuoDeck Emerging Leadership Program",
        description:
          "Win a chance to apply for this exclusive opportunity for taking your career to the stars",
        icon: "fas fa-square",
        dates: {
          end_date: "3rd May",
          start_date: "28th Feb",
        },
        topics: [
          {
            name: "Name One",
            contentList: [{ id: 1, title: "title", content: "lorem ipsum" }],
            checked: true,
          },
        ],
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if dates are not specified", () => {
    component.setProps({
      content: {},
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty props which are not required", () => {
    component.setProps({
        content: {},
        withColor:{},
        withAnimation:{},
        isDisabled:null,
        isHidden:null
    });
    expect(component.exists()).toBe(true);
  });
});
