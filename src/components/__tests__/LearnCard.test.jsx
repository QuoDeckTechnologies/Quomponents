//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import LearnCard from "../LearnCard/LearnCard.react";

describe("LearnCard", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      ribbon: {
        new: "नया",
        restricted: "प्रतिबंधित",
        premium: "अधिमूल्य",
        free: "नि: शुल्क",
      },
      learncard: {
        heading: "बातचीत का खेल",
        description:
          "बातचीत कौशल की अपनी समझ को बेहतर बनाने के लिए इस गेम को खेलें",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <LearnCard
        asEmphasis="new"
        isHiddenRibbon={false}
        asVariant="primary"
        withColor={null}
        withIcon={null}
        withLabel={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        onClick={() => console.log("LearnCard testing")}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "learncard",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withTranslation prop when target not specfied", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with content prop", () => {
    component.setProps({
      content: {
        heading: "The Negotiation Game",
        points: "100",
        description:
          "Play this game to improve your understanding of negotiation skills",
        tags: ["Communication", "Sales"],
        icon: "fas fa-gamepad",
        image:
          "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isHidden and isHiddenRibbon prop", () => {
    component.setProps({
      isHidden: true,
      isHiddenRibbon: true,
    });
    expect(component.exists()).toBe(true);
  });
});
