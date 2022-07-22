//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

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
    // Run common tests
    // -------------------------------------

    const args = {
        target: LeaderboardRow,
        required: {
            rank: 0,
            firstName: "Rohit",
            lastName: "Dhende",
            points: 5000,
        },
    };

    hasValid("defaults", args);
    hasValid("padding", args);
    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);

    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <LeaderboardRow
                rank={0}
                firstName="Rohit"
                lastName="Dhende"
                withAnimation={{
                    animation: "slideDown",
                    duration: 0.5,
                    delay: 0,
                }}
                isHidden={false}
            />
        );
    });

    it("should render the component without points and align the name text to the right", () => {
        component.setProps({
            rank: 4,
            firstName: "Rohit",
            lastName: "Dhende"
        })
        expect(component.find('.qui-leaderboard-row-name').props().style.textAlign).toBe('right');
        expect(component.find('.qui-leaderboard-row-name').text()).toBe('Rohit Dhende');
        expect(component.exists()).toBe(true);
    });
    it("should render the component without points and align the name text to the left", () => {
        component.setProps({
            rank: 4,
            firstName: "Rohit",
            lastName: "Dhende",
            points: 1000,
        })
        expect(component.find('.qui-leaderboard-row-name').props().style.textAlign).toBe('left');
        expect(component.find('.qui-leaderboard-row-name').text()).toBe('Rohit Dhende');
        expect(component.exists()).toBe(true);
    });

    it("should render the component with correct styles when passed ranks between 0 to 2", () => {
        component.setProps({
            rank: 0,
            firstName: "Rohit",
            lastName: "Dhende",
            points: 1000,
            withColor: {
                backgroundColor: '#454545',
                textColor: '#000'
            }
        })
        expect(component.find('.qui-leaderboard-row-container').props().style.backgroundColor).toBe('#454545');
        expect(component.find('.qui-leaderboard-row-name').props().style.color).toBe('#000');
        expect(component.find('.qui-leaderboard-row-name').text()).toBe('Rohit Dhende');
        expect(component.find('.qui-leaderboard-row-points').text()).toBe("1000");
        expect(component.exists()).toBe(true);
    });

    it("should render the component with correct styles when passed ranks greater than 2", () => {
        component.setProps({
            rank: 3,
            firstName: "Rohit",
            lastName: "Dhende",
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
            firstName: "Rohit",
            lastName: "Dhende"
        })
        expect(component.find("img").props().src).toBe(goldMedal);
        expect(component.exists()).toBe(true);
    });

    it("should render the component with second place silver medalist player", () => {
        component.setProps({
            rank: 1,
            firstName: "Rohit",
            lastName: "Dhende"
        })
        expect(component.find("img").props().src).toBe(silverMedal);
        expect(component.exists()).toBe(true);
    });

    it("should render the component with third place bronze medalist player", () => {
        component.setProps({
            rank: 2,
            firstName: "Rohit",
            lastName: "Dhende"
        })
        expect(component.find("img").props().src).toBe(bronzeMedal);
        expect(component.exists()).toBe(true);
    });

    it("should render the component with the player who is not in the first 3 place", () => {
        component.setProps({
            rank: 3,
            firstName: "Rohit",
            lastName: "Dhende"
        })
        expect(component.find("img").props().src).toBe(unRank);
        expect(component.exists()).toBe(true);
    });
});
