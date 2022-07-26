//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.react";
import LinkIcon from "../LinkIcon/LinkIcon.react";

describe("DesktopNavbar", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: DesktopNavbar,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <DesktopNavbar
        links={[
          {
            icon: "fas fa-home",
            text: "home",
          },
          {
            icon: "fas fa-award",
            text: "my profile",
          },
        ]}
        user={{
          name: "Anita Majithia",
          icon: "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
        }}
        onClick={() => {}}
      />
    );
  });
  it("should render when clicked on LinkIcon", () => {
    component.find(LinkIcon).at(0).simulate("click", { label: "home" });
    expect(component.exists()).toBe(true);
  });
});
