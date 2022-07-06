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
import Blurb from "../../Templates/Blurb/Blurb.react";

describe("Blurb", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Blurb,
    required: {
      data: {
        defaultValue: {
          title: "",
          subtitle: "",
          image: {},
          blurb: "",
          backgroundImage: {},
          presenter: {},
        },
      },
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Blurb
        data={{
          defaultValue: {
            title: "",
            subtitle: "",
            image: {},
            blurb: "",
            backgroundImage: {},
            presenter: {},
          },
        }}
        imageLibrary={null}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error when image is not defined", () => {
    component.setProps({
      data: {
        title: "test title",
        subtitle: "test subtitle",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when data is null", () => {
    component.setProps({
      data: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when icon is provided with presenter object", () => {
    component.setProps({
      data: {
        title: "test title",
        presenter: {
          extention: "",
          id: "default43",
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "test title",
        presenter: {
          extention: "",
          id: "test",
        },
      },
      imageLibrary: [{ id: "test", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        title: "test title",
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [{ id: "background-image", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#F3E5F5",
        slideHeaderTextColor: "#FFFF",
        slideHeaderAccentColor: "#9C27B0",
        slideHeaderBackgroundColor: "#AB47BC",
        textBlockTextColor: "#454545",
        textBlockBackgroundColor: "#FFFF",
        textColor: "#121212",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
