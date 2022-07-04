//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import PageHeader from '../PageHeader/PageHeader.react'

describe("PageHeader", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<PageHeader
            content="HEADER"
            asVariant="primary"
            asSize="normal"
            asPadded="normal"
            asFloated="none"
            asAligned="center"
            withColor={null}
            withAnimation={null}
            isHidden={false}
        />);
    })

    it("it should render correctly without throwing an error ", () => {
        expect(component.exists()).toBe(true);
    });

    it("it should render correct content to PageHeader ", () => {
        component.setProps({ content: "PageHeader" })
        expect(component.find(".qui-page-header-label").props().children).toEqual("PageHeader");
    });

    it("it should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asAligned prop as left", () => {
        component.setProps({ asAligned: "left" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asAligned prop as right", () => {
        component.setProps({ asAligned: "right" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed asAligned prop as center", () => {
        component.setProps({ asAligned: "center" })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("it should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("it should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withTranslation props is passed", () => {
        const dictionary = JSON.stringify({
            hi: {
                pageheader: { text: "शीर्षणी" },
            },
        });
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "pageheader",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when withTranslation props is passed and dictionary does not have target value", () => {
        const dictionary = JSON.stringify({
            hi: {
                pageheader: {},
            },
        });
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "pageheader",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

});