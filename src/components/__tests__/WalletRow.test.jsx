//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import WalletRow from "../WalletRow/WalletRow.react";

describe("WalletRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            walletRow: {
                months: {
                    Jan: "जनवरी",
                    Feb: "फ़रवरी",
                    Mar: "मार्च",
                    Apr: "अप्रैल",
                    May: "मई",
                    Jun: "जून",
                    Jul: "जुलाई",
                    Aug: "अगस्त",
                    Sep: "सितम्बर",
                    Oct: "अक्टूबर",
                    Nov: "नवम्बर",
                    Dec: "दिसम्बर",
                },
                coins: "सिक्के"
            },
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <WalletRow
                content={{
                    date: '2016-01-04 10:34:23',
                    coins: 1000
                }}
                withAnimation={{
                    animation: "slideDown",
                    duration: 0.5,
                    delay: 0,
                }}
                withTranslation={null}
                withColor={null}
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

    it("should render correctly when translation is used", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "walletRow",
                dictionary: dictionary,
            },
        });
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

    it("should render correct styling when passed withColor props", () => {
        component.setProps({
            withColor: {
                backgroundColor: '#FFBF00',
                textColor: '#000'
            }
        });
        expect(component.find(".qui-wallet-row-container").props().style).toStrictEqual({ "backgroundColor": "#FFBF00", "color": "#000" })
    });
    
    it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
        component.setProps({
            content: { date: "2022-05-02" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when date is provided in content props", () => {
        component.setProps({
            content: { date: "2021-05-10T12:55:18.154Z" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render the suffix as 'st' when date of yyyy/mm/31 format is provided in content props", () => {
        component.setProps({
            content: { date: "2022-05-31" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render the suffix as 'rd' when date of yyyy/mm/03 format is provided in content props", () => {
        component.setProps({
            content: { date: "2022-05-03" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render the suffix as 'th' when date of yyyy/mm/05 format is provided in content props", () => {
        component.setProps({
            content: { date: "2022-05-05" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when nothing is passed in date is provided in content props", () => {
        component.setProps({
            content: { date: "" }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when invalid date is provided in content props", () => {
        component.setProps({
            content: { date: "xyz" }
        });
        expect(component.exists()).toBe(true);
    });
});