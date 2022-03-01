//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Reward from '../Reward/Reward.react'
//--------------------------------------
// Import content's image
// -------------------------------------
// import coin from "../assets/icons8_coin_96px.png";

describe("Reward", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<Reward
            content={null}
            withColor={null}
            withAnimation={null}
            isHidden={false}
        />);
    })

    it("it should render correctly without throwing an error ",
        () => {
            expect(component.exists()).toBe(true);
        });

    it("should render correctly Content Props with value",
        () => {
            component.setProps({
                content: {
                    label: "Complete to win",
                    point: "10,000",
                    image: "coin.png"
                },
            }),
            expect(component.exists()).toBe(true);
        });
});