import React from 'react';
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
import BannerCard from "../Carousel/BannerCard/BannerCard.react"

describe("BannerCard", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: BannerCard,
        required: {
            onClick: () => { },
        },
        translations: {
            tgt: "button",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    bannerCard: { header: "बातचीत कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
                    ribbon: {
                        new: "नया",
                        restricted: "प्रतिबंधित",
                        premium: "अधिमूल्य",
                        free: "नि: शुल्क"
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);
    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    const dictionary1 = JSON.stringify({
        hi: {
            bannerCard: { header: "बातचीत कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
            ribbon: {
                new: "नया",
                restricted: "प्रतिबंधित",
                premium: "अधिमूल्य",
                free: "नि: शुल्क"
            }
        },
    });
    const dictionary2 = JSON.stringify({
        hi: {
            bannerCard: { header: "", content: "" },
            ribbon: {
                new: "नया",
                restricted: "प्रतिबंधित",
                premium: "अधिमूल्य",
                free: "नि: शुल्क"
            }
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <BannerCard
                image="https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg"
                tag="new"
                header="Component"
                content="subtitle"
                asVariant="warning"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isDisabled={false}
                isHidden={false}
                onClick={() => { }}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render translation  with withTranslation prop ", () => {
        component.setProps({
            header: "header",
            content: "content",
            image: "test.jpg",
            withTranslation: {
                lang: "hi",
                tgt: "bannerCard",
                dictionary: dictionary1,
            },
        });
    });
    it("should render translation  with withTranslation prop ", () => {
        component.setProps({
            header: "header",
            content: "content",
            image: "test.jpg",
            withTranslation: {
                lang: "hi",
                tgt: "bannerCard",
                dictionary: dictionary2,
            },
        });
    });
    it("should render with empty header and content ", () => {
        component.setProps({
            header: "",
            content: "",
            image: "test.jpg"
        });
    });
    it("should render when click on bannerCard ", () => {
        component.find(".qui-banner-card").simulate("click");
    });
});