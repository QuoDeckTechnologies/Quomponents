//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Reward from '../Reward/Reward.react'

describe("Reward", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
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
    });

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

    it("it should render correctly without throwing an error ", () => {
        expect(component.exists()).toBe(true);
    });

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

    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#3e587a",
            accentColor: "#ed6e6e",
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

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "reward",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if translation is not defined", () => {
		component.setProps({
			withTranslation: {
				lang: "mr",
				tgt: "reward",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

});