//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ArcMenu from '../ArcMenu/ArcMenu.react'

describe("ArcMenu", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
          arcmenu: {
            content: {
              menuData: [
                { name: "घर", icon: "fa fa-home" },
                { name: "खाता", icon: "fas fa-user" },
                { name: "समायोजन", icon: "fa fa-cogs" },
                { name: "संदेश", icon: "fa fa-comments" },
                { name: "कॉन्फ़िगर", icon: "fa fa-file" },
                { name: "लॉग आउट", icon: "fas fa-desktop" },
              ],
            },
          },
        },
      });
    beforeEach(() => {
      jest.resetAllMocks();
      component = mount(
        <ArcMenu
            content = {{
                arcIcon : 'fas fa-user',
                menuData : []
            }}
            asVariant= "primary"
            asSize= "normal"
            withColor= {{
                backgroundColor: "#ffcc00",
                accentColor: "",
                textColor: "#808080",
            }}
            withTranslation= {{
                lang: "hi",
                tgt: "arcmenu",
                dictionary: dictionary,
            }}
            isDisabled= {false}
            isHidden= {false}
            onClick = {()=>{}}
        />
      );
    });
  
    it("should render correctly without throwing error", () => {
      expect(component.exists()).toBe(true);
    });
    it("should render correctly when modal opens", () => {
      component.find('.qui-arc-menu-button').at(1).simulate('click')
    });
    it("should render correctly when modal closes", () => {
      component.find('.qui-arc-menu-modal').at(0).simulate('click')
    });
    it("should render correctly with null props", () => {
      component.setProps({
          withColor : null,
          withTranslation : null,
          content : {}
      })
      expect(component.exists()).toBe(true)
    });
    it("should render correctly when target is not specified", () => {
      component.setProps({
          withTranslation : {
            lang: "hi",
            tgt: "",
            dictionary: dictionary,
          }
      })
      expect(component.exists()).toBe(true)
    });
});
  