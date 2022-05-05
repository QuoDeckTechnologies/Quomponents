//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import DosAndDonts from "../../Templates/DosAndDonts/DosAndDonts.react";
import Choice from "../../Buttons/Choice/Choice.react";

describe("DosAndDonts", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <DosAndDonts
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          options: [
            {
              correct: "checked",
              text: "DOs",
            },
            {
              correct: "",
              text: "DON'Ts",
            },
          ],
          bullets: [
            "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
          ],
          rebullets: [
            "Don't Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
          ],
        }}
        slideId={0}
        isChoice={false}
        asEmphasis="contained"
        asVariant="primary"
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isChoice={false}
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
  it("should render correctly when passed withColor props", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
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
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isChoice: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isChoice: false })
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
  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
    }
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
    }
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
    }
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "Neque porro quisquam est qui dolorem",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
      options: [
        {
          correct: "checked",
          text: "DOs",
        },
        {
          correct: "",
          text: "DON'Ts",
        },
      ],
      bullets: [
        "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
      ],
      rebullets: [
        "Don't Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
      ],
    }
    component.setProps({ data: data })
    expect(component.exists()).toBe(true);
  })
  it("should render without error when clicked on choice component and value passed as 0", () => {
    component.find(Choice).simulate('click', 0)
    component.setProps({
      data: {
        options: [
          {
            correct: "checked",
            text: "DOs",
          },
          {
            correct: "",
            text: "DON'Ts",
          },
        ],
        bullets: [
          "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Quisque sed turpis vel lectus suscipit auctor",
          "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
      }
    })
    expect(component.exists()).toBe(true);
  })
  it("should render without error when clicked on choice component and value passed as 1", () => {
    component.find(Choice).simulate('click', 1)
    component.setProps({
      data: {
        options: [
          {
            correct: "checked",
            text: "DOs",
          },
          {
            correct: "",
            text: "DON'Ts",
          },
        ],
        rebullets: [
          "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Quisque sed turpis vel lectus suscipit auctor",
          "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
      }
    })
  })
  it("should render without error when passed background image", () => {
    component.setProps({
      data: {
        options: [
          {
            correct: "checked",
            text: "DOs",
          },
          {
            correct: "",
            text: "DON'Ts",
          },
        ],
        backgroundImage: {
          id: "background-image",
          extention: ""
        }
      },
      imageLibrary: [{
        id: "background-image",
        image: "image.png"
      }]
    })
  })
  it("should render without error when passed  image", () => {
    component.setProps({
      data: {
        options: [
          {
            correct: "checked",
            text: "DOs",
          },
          {
            correct: "",
            text: "DON'Ts",
          },
        ],
        image: {
          id: "header-image",
          extention: ""
        }
      },
      imageLibrary: [{
        id: "header-image",
        image: "image.png"
      }]
    })
  })
});