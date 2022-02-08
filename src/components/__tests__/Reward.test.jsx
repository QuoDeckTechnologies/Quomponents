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
        // en: {
        //     reward: {
        //         label: "Complete to win",point:"10,000"
        //     },
        // },
        hi: {
            reward: { label: "जीतने के लिए पूर्ण", point: "१०,०००" },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Reward
                content={null}
                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}

                isHidden={false}
            />);
    })

    it("it should render correctly without throwing an error ",
        () => {
            expect(component.exists()).toBe(true);
        });

    it("should render correctly translation with lang:'en'",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "en",
                    tgt: "reward:",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly translation with lang:'hi'",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "reward:",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly Content Props with value",
        () => {
            component.setProps({
                content: {
                    label: "Complete to win",
                    point: "10,000"
                },
            }),
            expect(component.exists()).toBe(true);
        });
});