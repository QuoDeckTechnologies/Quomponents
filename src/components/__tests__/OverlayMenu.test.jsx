// Import from NPM
// -------------------------------------
import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";

// Import Components
// -------------------------------------
import OverlayMenu from "../OverlayMenu/OverlayMenu.react";

describe("OverlayMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      OverlayMenu: {
        label: "अरुणा असरानी",
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
  it("OverlayMenu should render correctly without throwing an error", () => {
    expect(component.exists()).toBe(true);
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
          tgt: "OverlayMenu",
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
          tgt: "OverlayMenu",
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

  it("should call setState when click", () => {
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

  it("OverlayMenu should render correctly without throwing an error if i tag is present", () => {
    expect(component.find("i").exists()).toBe(true);
  });

  it("OverlayMenu should render correctly if label isequal to 'Aruna Asrani' ", () => {
    component.setProps({
      withLabel: {
        format: "label",
        content: "Aruna Asrani",
        textColor: "Black",
      },
    });
    const divTag = component.find("div").at(4).props();
    expect(divTag.children).toBe("Aruna Asrani");
  });

  it("should render correctly with translation and withLabel", () => {
    component.setProps({
      withLabel: {
        format: "label",
        content: "Aruna Asrani",
        textColor: "Black",
      },
      withTranslation: {
        lang: "hi",
        tgt: "OverlayMenu",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
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
        tgt: "OverlayMenu",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked close icon", () => {
    component.find(".cross-icon").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
