//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import NavBar from "../NavBar/NavBar/NavBar.react";

describe("NavBar", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      navBar: {
        title: "कमाये",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <NavBar
        title={null}
        shortLogo={null}
        fullLogo={null}
        iconLink={null}
        asVariant="primary"
        withColor={null}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isMenuBar={null}
        isSearch={null}
        isLoggedIn={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onSearch={() => {}}
        onMenuClick={() => {}}
        onAppMenuClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        menuBackgroundColor: "#C1DC9E",
        backIconColor: "#FFBF00",
        searchIconColor: "#FFBF00",
        textColor: "#AAAAAA",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      title: "earn",
      withTranslation: {
        lang: "hi",
        tgt: "navBar",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when content props is provided", () => {
    component.setProps({
      title: "earn",
      shortLogo: "xyz.jpg",
      fullLogo: "xyz.jpg",
      iconLink: {
        icon: "fas fa-angle-left",
        link: "https://www.google.com/",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when fullLog props is not provided", () => {
    component.setProps({
      title: null,
      shortLogo: "xyz.jpg",
      fullLogo: null,
      iconLink: {
        icon: "fas fa-angle-left",
        link: "https://www.google.com/",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isSearch is false", () => {
    component.setProps({
      isSearch: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isLoggedIn is false", () => {
    component.setProps({
      isLoggedIn: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isLoggedIn is true", () => {
    component.setProps({
      isLoggedIn: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isMenuBar is true", () => {
    component.setProps({
      isMenuBar: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isMenuBar is false", () => {
    component.setProps({
      isMenuBar: false,
    });
    expect(component.exists()).toBe(true);
  });
});
