//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import CaptionedBulletList from "../Templates/CaptionedBulletList/CaptionedBulletList.react";

describe("CaptionedBulletList", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CaptionedBulletList
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          caption: "caption",
          bulletPoints: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
          ]
        }}
        slideId={0}
        asVariant="primary"
        withColor={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty content", () => {
    component.setProps({
      content: {},
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed data as null", () => {
    component.setProps({ data: {} })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as primary", () => {
    component.setProps({ asVariant: "primary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as secondary", () => {
    component.setProps({ asVariant: "secondary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as warning", () => {
    component.setProps({ asVariant: "warning" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as error", () => {
    component.setProps({ asVariant: "error" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as success", () => {
    component.setProps({ asVariant: "success" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      image: "",
      caption: "caption",
      bulletPoints: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
      ]
    }
    component.setProps({ data: data })
    expect(component.exists()).toBe(true);
  })
});