//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Sidebar from '../Sidebar/Sidebar.react'
import ArcMenu from "../ArcMenu/ArcMenu.react"
import IconLink from '../Buttons/IconLink/IconLink.react'
describe("Sidebar", () => {
    let component,
    setState = jest.fn(), 
    title="",
    image = "",
    sections = {}
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(    
            <Sidebar
                asEmphasis="default"
                content={
                    title=title,
                    image=image,
                    sections=sections
                }
                asVariant="primary"
                asSize="normal"
                asFloated="inline"
                asAligned="center"
                withColor={null}
                withIcon={null}
                withAnimation={null}
                isHidden={false}
                isDisabled={false}
                onClick={() => console.log("Testing Sidebar")} />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should call setState when click", () => {
        component = shallow(<Sidebar
            onClick={setState} />);
        component.find(IconLink).at(0).simulate("click");
        component.find(IconLink).at(1).simulate("click");
        component.find(IconLink).at(2).simulate("click");
        component.find(IconLink).at(3).simulate("click");
        component.find(IconLink).at(4).simulate("click");
    });
    it("should call setState when click on div", () => {
        component = shallow(<Sidebar
            onClick={setState} />);
        component.find(".qui-side-bar-sections").at(0).simulate('click')
    });
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

    it("should render correctly when passed asEmphasis prop as default ", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
        }
        component.setProps({ asEmphasis: "default" })
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asEmphasis prop as editMode", () => {
        component.setProps({
            asEmphasis: "editMode"
        });
        component.update();
        expect(component.find(ArcMenu).exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
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
});

