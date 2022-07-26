import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import Feedback from "../../Templates/Feedback/Feedback.react";

describe("Feedback", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Feedback,
    required: {
      data: {
        feedback: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        ],
        selectedIndex: 0,
        backgroundImage: { id: "background-image", extention: "" },
      },
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "feedback",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          feedback: {
            thankyou: "धन्यवाद",
            correct: "सही",
            incorrect: "गलत",
            button: "जारी रखें",
          },
        },
      }),
    },
  };
  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      feedback: {
        thankyou: "धन्यवाद",
        correct: "सही",
        incorrect: "गलत",
        button: "जारी रखें",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Feedback
        data={{
          feedback: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          ],
          selectedIndex: 0,
          backgroundImage: { id: "background-image", extention: "" },
        }}
        imageLibrary={[]}
        asVariant="warning"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#ffffff",
      slideHeaderTextColor: "#ffffff",
      slideHeaderBackgroundColor: "#ad292980",
      slideHeaderAccentColor: "#AD2929",
      iconListItemTextColor: "#ffffff",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  
  it("should render correctly when data pass as empty object", () => {
    let data = {};
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });
});
