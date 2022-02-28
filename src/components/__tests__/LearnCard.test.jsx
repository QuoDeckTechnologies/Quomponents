//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount, shallow } from "enzyme";
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
        seeMore: "और देखें..",
        seeLess: "कम देखें..",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <LearnCard
        content={{ title: "" }}
        asVariant="primary"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        tags = {null}
        onClick={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
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
  it("should render correctly when clicked on `see more or see less` tag", () => {
    component = mount(
      <LearnCard
        asVariant="primary"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        onClick={() => {}}
      />
    );
    component.setProps({
      content: {
        title: "The Negotiation Game",
        description:
          "Play this game to improve your understanding of negotiation skills",
        image: "",
        icon: "fas fa-desktop",
        points: "100",
        tag: "premium",
        tags: [
          "Communication",
          "Sales",
          "Technology",
          "Business",
          "Miscellaneous",
          "More tags",
        ],
      },
    });
    component.find("a").simulate("click");
    component
    .find("a")
    .simulate("click", {
      preventDefault: () => {},
    });
  });
  it("should render correctly when clicked on `see more or see less` tag translated", () => {
    component = mount(
      <LearnCard
        asVariant="primary"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        onClick={() => {}}
      />
    );
    component.setProps({
      content: {
        title: "The Negotiation Game",
        description:
          "Play this game to improve your understanding of negotiation skills",
        image: "",
        icon: "fas fa-desktop",
        points: "100",
        tag: "premium",
        tags: [
          "Communication",
          "Sales",
          "Technology",
          "Business",
          "Miscellaneous",
          "More tags",
        ],
      },
      withTranslation: {
        lang: "hi",
        tgt: "learncard",
        dictionary: dictionary,
      },
    });
    component.find("a").simulate("click");
    expect(component.exists()).toBe(true)
  });
});
