//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Reward from '../Reward/Reward.react'

describe("Reward", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: Reward,
        required: {
            content: {},
        },
        translations: {
            tgt: "reward",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    reward: {
                        label: "जीतने के लिए पूर्ण करें",
                    }
                },
                en: {
                    reward: {
                        label: "Complete to win",
                    }
                }
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<Reward
            content={null}
            withColor={null}
            withAnimation={null}
            withTranslation={null}
            isHidden={false}
        />);
    })

    it("it should render correctly when Content Props is pass with the values", () => {
        component.setProps({
            content: {
                label: "Complete to win",
                point: "10,000",
                image: "rewardImage"
            }
        })
        expect(component.exists()).toBe(true);
    });

    // it("should render correctly when passed withColor props", () => {
    //     let colors = {
    //         textColor: "#3e587a",
    //         accentColor: "#ed6e6e",
    //     }
    //     component.setProps({ withColor: colors })
    //     expect(component.exists()).toBe(true);
    // })

    // it("should render correctly when passed withAnimation props", () => {
    //     let animation = {
    //         animation: "zoom",
    //         duration: 0.5,
    //         delay: 0,
    //     }
    //     component.setProps({ withAnimation: animation })
    //     expect(component.exists()).toBe(true);
    // })

    // it("should render correctly with withTranslation prop", () => {
    //     component.setProps({
    //         withTranslation: {
    //             lang: "hi",
    //             tgt: "reward",
    //             dictionary: dictionary,
    //         },
    //     });
    //     expect(component.exists()).toBe(true);
    // });

    // it("should render correctly if translation is not defined", () => {
    //     component.setProps({
    //         withTranslation: {
    //             lang: "mr",
    //             tgt: "reward",
    //             dictionary: dictionary,
    //         },
    //     });
    //     expect(component.exists()).toBe(true);
    // });

    // it("should render correctly when passed isHidden props as false", () => {
    //     component.setProps({ isHidden: false })
    //     expect(component.exists()).toBe(true);
    // })

    // it("should render correctly when passed isHidden props as true", () => {
    //     component.setProps({ isHidden: true })
    //     expect(component.exists()).toBe(true);
    // })

});