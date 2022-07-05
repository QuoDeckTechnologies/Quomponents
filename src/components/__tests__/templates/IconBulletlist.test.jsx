import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
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
  hasValid("toggles", args);
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

  it("should render correctly when passed asVariant prop as primary", () => {
    component.setProps({ asVariant: "primary" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as secondary", () => {
    component.setProps({ asVariant: "secondary" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as warning", () => {
    component.setProps({ asVariant: "warning" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as error", () => {
    component.setProps({ asVariant: "error" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as success", () => {
    component.setProps({ asVariant: "success" });
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

  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    };
    component.setProps({ withAnimation: animation });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });
});
