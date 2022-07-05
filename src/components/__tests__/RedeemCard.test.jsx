import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RedeemCard from "../RedeemCard/RedeemCard.react";
import Button from "../Buttons/Button/Button.react";
import defaultImage from "../../assets/default.jpeg";

describe("RedeemCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            redeemCard: {
                button: "मोचन",
                inprogress: "आपका मोचन अनुरोध प्रक्रिया में है",
                completed: "आपने इस ऑफ़र को भुना लिया है"
            }
        },
        en: {
            redeemCard: {
                button: "Redeem",
                inprogress: "YOUR REDEMPTION REQUEST IS IN PROCESS",
                completed: "YOU HAVE REDEEMED THIS OFFER"
            }
        }
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <RedeemCard
                content={{
                    name: "Yamaha FZ16 Bike",
                    description: "A beast on the road, this motorbike commands respect.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
                    cost: 600,
                    stock: {
                        left: 1,
                        total: 1000
                    },
                    status: "Pending"
                }}
                withColor={{
                    textColor: "",
                    accentColor: "#AD2929",
                    buttonTextColor: "",
                    buttonBackgroundColor: "#2C5F2DFF",
                    buttonHoverBackgroundColor: "",
                    buttonHoverTextColor: "",
                    backgroundColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withTranslation={null}
                asFloated="inline"
                isHidden={false}
                isDisabled={false}
                onClick={jest.fn()}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#2C5F2DFF",
            accentColor: "#AD2929",
            buttonTextColor: "#2C5F2DFF",
            buttonBackgroundColor: "#2C5F2DFF",
            buttonHoverBackgroundColor: "#2C5F2DFF",
            buttonHoverTextColor: "#AD2929",
            backgroundColor: "#2C5F2DFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "redeemCard",
                dictionary: dictionary,
            },
        });
        expect(component.find(".qui-redeem-card-status").text()).toBe("मोचन");
    });

    it("should render correctly with withTranslation with tgt null", () => {
        component.setProps({
            withTranslation: {
                lang: "en",
                tgt: "redeemCard",
                dictionary: dictionary,
            },
        });
        expect(component.find(".qui-redeem-card-status").text()).toBe("Redeem");
    });


    it("should render render correctly with lang null", () => {
        component.setProps({
            withTranslation: {
                lang: "mr", 
                tgt: "redeemCard",
                dictionary: dictionary,
            },
        });
        expect(component.find(".qui-redeem-card-status").text()).toBe("Redeem");
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" });
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

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed extra content and should also display showmore button", () => {
        let component = mount(
            <RedeemCard
                content={{
                    name: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
                    cost: 1000000,
                    stock: {
                        left: 1000000,
                        total: 1000000
                    },
                    description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
                    status: "Pending"
                }}
                onClick={jest.fn()}
            />
        );
        component.find(".qui-redeem-card-show-more").simulate('click'); //simulate showmore button and display all content
        component.find(".qui-redeem-card-show-more").simulate('click'); //simulate showmore button and hide the content and show truncated content
        expect(component.exists()).toBe(true);
    });

    it("should render RedeemCard with Pending status", () => {
        let component = mount(
            <RedeemCard
                content={{
                    status: "Pending"
                }}
                onClick={jest.fn()}
            />
        );
        expect(component.find(Button).exists()).toBe(true);
        expect(component.find(Button).text()).toBe("Redeem");
    });

    it("should render RedeemCard with InProgress status", () => {
        let component = mount(
            <RedeemCard
                content={{
                    status: "InProgress"
                }}
                onClick={jest.fn()}
            />
        );
        expect(component.find(".qui-redeem-card-redeem-inprogress").text()).toBe("YOUR REDEMPTION REQUEST IS IN PROCESS");
    });

    it("should render RedeemCard with Completed status", () => {
        let component = mount(
            <RedeemCard
                content={{
                    status: "Completed"
                }}
                onClick={jest.fn()}
            />
        );
        expect(component.find(".qui-redeem-card-redeem-completed").text()).toBe("YOU HAVE REDEEMED THIS OFFER");
    });

    it("should render RedeemCard with default Image when nothing passed in the image props", () => {
        let component = mount(
            <RedeemCard
                content={{
                    image: "",
                }}
                onClick={jest.fn()}
            />
        );
        expect(component.find(".qui-redeem-card-image").props().style.backgroundImage).toBe(`url(${defaultImage})`);
    });

    it("should render RedeemCard with Image when passed image in the image props", () => {
        let component = mount(
            <RedeemCard
                content={{
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU",
                }}
                onClick={jest.fn()}
            />
        );
        expect(component.find(".qui-redeem-card-image").props().style.backgroundImage).toBe(`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU)`);
    });
});