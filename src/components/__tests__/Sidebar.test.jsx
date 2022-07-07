//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Sidebar from '../Sidebar/Sidebar.react'
import ArcMenu from "../ArcMenu/ArcMenu.react"
describe("Sidebar", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    
    const args = {
        target: Sidebar,
        required: {
        onClick: () =>{},
        },
        translations: {
            tgt: "sideBar",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    sideBar: {
                        content: "संपादन मोड",
                        translatedPanelLinks: {
                            welcome: "स्वागत",
                            content: {
                                library: "पुस्तकालय",
                                editor: "संपादक",
                                settings: "समायोजन",
                                enrollment: "उपस्थिति पंजी",
                                preview: "पूर्वावलोकन",
                            },
                            admin: {
                                users: "उपयोगकर्ता",
                                courses: "पाठ्यक्रम",
                                branding: "ब्रांडिंग",
                                tags: "टैग",
                                ads: "विज्ञापन",
                                ticketCenters: "टिकट केंद्र",
                            },
                            analytics: {
                                org: "संगठन",
                                teams: "टीम",
                                trainees: "ट्रेनी",
                                courses: "पाठ्यक्रम",
                                articles: "लेख",
                            },
                            blog: {
                                articles: "लेख",
                                editor: "संपादक",
                            },
                            social: {
                                text: "पाठ",
                                link: "संपर्क",
                                image: "छवि",
                                gallery: "गेलरी",
                                video: "वीडियो",
                            },
                            help: {
                                chatbot: "चैटबोट",
                                faq: "सामान्य प्रश्न",
                                support: "सहायता",
                            }
                        }
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("positions", args);
    
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("disabled", args);
    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Sidebar
                asEmphasis="default"
                sidebarLocation='welcome'
                licenseType='SuperAdmin'
                noCourses={false}
                label="EditMode"
                asVariant="primary"
                asSize="normal"
                asFloated="inline"
                asAligned="center"
                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={() => console.log("Testing Sidebar")} />
        );
    });
    it("should call setState when click on div", () => {
        component.find(".qui-side-bar-sections").at(0).simulate('click')
    });
    it("should call setState when click on div", () => {
        component.find("IconLink").at(0).simulate('click')
    });
    it("should render correctly when passed licenseType prop as SuperAdmin", () => {
        component.setProps({ licenseType: "SuperAdmin" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed licenseType prop as Admin", () => {
        component.setProps({ licenseType: "Admin" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed licenseType prop as DataAdmin", () => {
        component.setProps({ licenseType: "DataAdmin" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed licenseType prop as Manager", () => {
        component.setProps({ licenseType: "Manager" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed licenseType prop as Creator", () => {
        component.setProps({ licenseType: "Creator" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed licenseType prop as Trainer", () => {
        component.setProps({ licenseType: "Trainer" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asEmphasis prop as default ", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
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
    
    it("should render correctly when passed noCourses props as true", () => {
        component.setProps({ noCourses: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed noCourses props as false", () => {
        component.setProps({ noCourses: false })
        expect(component.exists()).toBe(true);
    })
});

