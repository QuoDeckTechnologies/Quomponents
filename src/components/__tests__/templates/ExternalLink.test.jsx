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
import ExternalLink from "../../Templates/ExternalLink/ExternalLink.react";

describe("ExternalLink", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: ExternalLink,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: { id: "header-image", extention: "" },
        link: "www.github.com",
        caption: "Neque porro quisquam est qui dolorem",
        backgroundImage: { id: "background-image", extention: "" },
      },
      onClick: () => {},
    },
    translations: {
      tgt: "externalLink",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          externalLink: { button: "जाएँ" },
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
      externalLink: { button: "जाएँ" },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ExternalLink
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          image: { id: "header-image", extention: "" },
          link: "www.github.com",
          caption: "Neque porro quisquam est qui dolorem",
          backgroundImage: { id: "background-image", extention: "" },
        }}
        imageLibrary={[]}
        slideId={0}
        asVariant="warning"
        asFloated="left"
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

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
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
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
});
