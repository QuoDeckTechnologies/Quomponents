// Import from NPM
// -------------------------------------
import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

// Import Components
// -------------------------------------
import OverlayMenu from "../OverlayMenu/OverlayMenu.react";

describe("OverlayMenu", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OverlayMenu,
    required: {
      content: [],
      onClick: () => { },
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("labels", args);
  hasValid("animations", args);
  hasValid("icons", args);
  //hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;
  const dictionary = JSON.stringify({
    hi: {
      overlayMenu: {
        content: [
          { label: "प्रोफ़ाइल संपादित करें" },
          { label: "खाता" },
          { label: "प्रोफ़ाइल संपादित करें" },
          { label: "खाता" },
          { label: "प्रोफ़ाइल संपादित करें" },
          { label: "खाता" },
          { label: "खाता" },
          { label: "प्रोफ़ाइल संपादित करें" },
          { label: "खाता" },
        ],
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OverlayMenu
        isOpen={true}
        content={[]}
        withUser=""
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withColor={null}
        withIcon={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
  });

  it("should render correctly without throwing error when component mounts", () => {
    component = mount(
      <OverlayMenu
        content={[]}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "overlayMenu",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
  });

  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <OverlayMenu
        content={[]}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "overlayMenu",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
    unmount();
  });

  it("should render correctly with translation", () => {
    component.setProps({
      content: [
        {
          icon: "fa fa-share",
          label: "Certificate",
          format: "caption",
        },
      ],
      withTranslation: {
        lang: "hi",
        tgt: "overlayMenu",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should call IconLink when click", () => {
    component = shallow(
      <OverlayMenu
        content={[
          {
            icon: "fa fa-share",
            label: "Certificate",
            format: "caption",
          },
        ]}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
    component.find("IconLink").at(0).simulate("click");
  });

  it("OverlayMenu should render correctly without throwing an error if Avatar is present", () => {
    expect(component.find("Avatar").exists()).toBe(true);
  });

  it("OverlayMenu should render correctly if pass withLabel caption  ", () => {
    component.setProps({
      withLabel: {
        format: "label",
        content: "",
        textColor: "Black",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("OverlayMenu should render correctly if pass withLabel label  ", () => {
    component.setProps({
      withLabel: {
        format: "caption",
        content: "",
        textColor: "Black",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("OverlayMenu should render correctly if pass withLabel popover  ", () => {
    component.setProps({
      withLabel: {
        format: "popover",
        content: "",
        textColor: "Black",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked close icon", () => {
    component.find(".cross-icon").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
