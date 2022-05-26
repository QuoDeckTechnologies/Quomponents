//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import LeaderboardRow from "../LeaderboardRow/LeaderboardRow.react";

import goldMedal from "../../assets/icons8_1st_place_medal_96px.png";
import silverMedal from "../../assets/icons8_2nd_place_medal_96px.png";
import bronzeMedal from "../../assets/icons8_3rd_place_medal_96px.png";
import unRank from "../../assets/icons8_un_rank_medal_96px.png";

describe("LeaderboardRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <LeaderboardRow
                rank={0}
                content={{
                    name: 'Rohit Dhende',
                    points: 1000
                }}
                withAnimation={{
                    animation: "slideDown",
                    duration: 0.5,
                    delay: 0,
                }}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });

    it("should render the component without points and align the name text to the right", () => {
        expect(component.find('.qui-leaderboard-row-name').props().style.textAlign).toBe('left');
        component.setProps({
            rank: 4,
            content: {
                name: 'Rohit Dhende'
            }
        })
        expect(component.find('.qui-leaderboard-row-name').props().style.textAlign).toBe('right');
        expect(component.find('.qui-leaderboard-row-name').text()).toBe('Rohit Dhende');
        expect(component.find('.qui-leaderboard-row-points').exists()).toBe(false);
    });

    it("should render the component with correct styles when passed ranks between 0 to 2", () => {
        component.setProps({
            rank: 0,
            content: {
                name: 'Rohit Dhende',
                points: 1000
            },
            withColor: {
                backgroundColor: '#454545',
                textColor: '#000'
            }
        })
        expect(component.find('.qui-leaderboard-row-container').props().style.backgroundColor).toBe('#454545');
        expect(component.find('.qui-leaderboard-row-name').props().style.color).toBe('#000');
        expect(component.find('.qui-leaderboard-row-name').text()).toBe('Rohit Dhende');
        expect(component.find('.qui-leaderboard-row-points').text()).toBe("1000");
    });

    it("should render the component with correct styles when passed ranks greater than 2", () => {
        component.setProps({
            rank: 3,
            content: {
                name: 'Rohit Dhende'
            },
            withColor: {
                backgroundColor: '#454545',
                textColor: '#000'
            }
        })
        expect(component.exists()).toBe(true);
    });

    it("should render the component with first place gold medalist player", () => {
        component.setProps({
            rank: 0,
            content: {
                name: 'Rohit Dhende'
            }
        })
        expect(component.find("img").props().src).toBe(goldMedal);
    });

    it("should render the component with second place silver medalist player", () => {
        component.setProps({
            rank: 1,
            content: {
                name: 'Rohit Dhende'
            }
        })
        expect(component.find("img").props().src).toBe(silverMedal);
    });

    it("should render the component with third place bronze medalist player", () => {
        component.setProps({
            rank: 2,
            content: {
                name: 'Rohit Dhende'
            }
        })
        expect(component.find("img").props().src).toBe(bronzeMedal);
    });

    it("should render the component with the player who is not in the first 3 place", () => {
        component.setProps({
            rank: 3,
            content: {
                name: 'Rohit Dhende'
            }
        })
        expect(component.find("img").props().src).toBe(unRank);
    });
});
