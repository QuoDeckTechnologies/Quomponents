//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import EarnCard from "../EarnCard/EarnCard.react";

describe("EarnCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: EarnCard,
    required: {
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
      },
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "earncard",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          loading: "बस एक मिनट...",
          bannercard: { header: "", content: "" },
          ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क",
          },
          earncard: {
            title: "क्वोडेक इमर्जिंग लीडरशिप प्रोग्राम",
            description:
              "अपने करियर को सितारों तक ले जाने के इस विशेष अवसर के लिए आवेदन करने का मौका जीतें",
            dates: {
              end_date: "3 मई",
              start_date: "28 फरवरी",
            },
          },
        },
      })
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);  // -------------------------------------
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
        onClick={() => console.log("EanrCard testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when clicked", () => {
    let component = renderer.create(<EarnCard onClick={() => { }} />);
    let tree = component.toJSON();
    act(() => {
      tree.props.onClick();
    });
  });
});
