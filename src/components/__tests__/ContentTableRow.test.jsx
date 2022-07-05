//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { fireEvent, render, screen } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ContentTableRow from "../ContentTableRow/ContentTableRow.react";

describe("ContentTableRow", () => {

  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: ContentTableRow,
    required: {
      content: {
        name: "dummy file-name.pdf",
        readerType: "videck",
        menuData: [
          {
            title: "Open Deck",
            icon: "fas fa-book-open",
          },
        ],
      },
      onClick: () => { },
    },
    translations: {
      tgt: "contentTableRow",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          contentTableRow: {
            menuData: [
              {
                title: "डेक खोले",
                icon: "fas fa-book-open",
              },
            ],
          },
        },
      })
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("toggles", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <ContentTableRow
        content={{
          name: "dummy file-name.pdf",
          readerType: "videck",
          menuData: [
            {
              title: "Open Deck",
              icon: "fas fa-book-open",
            },
          ],
        }}
        onClick={() => { }}
      />
    );
  });
  it("it should render correctly without throwing an error with docdeck readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "docdeck",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with assessment readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "assessment",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with survey readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "survey",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with adaptive readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "adaptive",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with quiz readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "quiz",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with casestudy readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "casestudy",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with qdf readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "qdf",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with deck readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "deck",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with game readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "game",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error with certdeck readerType", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "certdeck",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error when readerType does not match with given cases", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: "xyz",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error when readerType is null", () => {
    component.setProps({
      content: {
        name: "name",
        readerType: null,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly without throwing an error when clicked on checkbox and menu button", () => {
    component.find(".qui-content-checkbox").simulate("click");
    component.find(".qui-content-menu").simulate("click");
  });

  it("it should render correctly without throwing an error when input is provided", () => {
    component.find(".qui-content-input").simulate("change", {
      target: { value: "Editted file name" },
    });
  });

  test("it should render correctly when menu is closed", () => {
    render(
      <ContentTableRow
        content={{
          name: "dummy file-name.pdf",
          readerType: "videck",
        }}
        withAnimation={null}
        onClick={() => { }}
      />
    );
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    fireEvent.click(button);
    fireEvent.mouseUp(input);
  });
});
