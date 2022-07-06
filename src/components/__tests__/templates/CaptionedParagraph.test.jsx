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
import CaptionedParagraph from "../../Templates/CaptionedParagraph/CaptionedParagraph.react";

describe("CaptionedParagraph", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CaptionedParagraph,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: { id: "header-image", extention: "" },
        backgroundImage: { id: "background-image", extention: "" },
      },
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("positions", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CaptionedParagraph
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl, ut aliquet orci. Mauris id sapien felis. Nullam elementum enim tincidunt, facilisis lacus vitae, volutpat ligula. ",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          image: { id: "header-image", extention: "" },
          backgroundImage: { id: "background-image", extention: "" },
        }}
        imageLibrary={[]}
        slideId={0}
        asVariant="warning"
        asFloated="left"
        withColor={null}
        withAnimation={null}
        isHidden={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });

  it("should render correctly when title and subtitle is not defined in data prop", () => {
    let data = {
      title: "",
      subtitle: "",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when image is not defined in data prop", () => {
    let data = {
      title: "Neque porro quisquam est qui dolorem",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
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
});
