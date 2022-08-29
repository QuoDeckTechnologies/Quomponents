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
import IconBulletlist from "../../Templates/IconBulletlist/IconBulletlist.react";

describe("IconBulletlist", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: IconBulletlist,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: { id: "header-image", extention: "" },
        backgroundImage: { id: "background-image", extention: "" },
        iconlist: [
          {
            image: {},
            text: "Quisque sed turpis vel lectus suscipit auctor",
          },
          {
            image: {},
            text: "Neque porro quisquam est qui dolorem",
          },
        ],
      },
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
      <IconBulletlist
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          image: { id: "header-image", extention: "" },
          backgroundImage: { id: "background-image", extention: "" },
          iconlist: [
            {
              image: {},
              text: "Quisque sed turpis vel lectus suscipit auctor",
            },
            {
              image: {},
              text: "Neque porro quisquam est qui dolorem",
            },
          ],
        }}
        imageLibrary={[]}
        slideId={0}
        asVariant="warning"
        asFloated="left"
        withColor={null}
        withAnimation={null}
        isHidden={false}
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
