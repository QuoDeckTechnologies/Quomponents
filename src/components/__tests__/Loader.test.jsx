//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Loader from "../Loaders/Loader/Loader.react";

describe("Loader", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        en: {
            loading: "Please wait...",
            loader: {
                header: "Did you know ?",
                content: [
                    "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
                    "Virtual training takes 40-60% less time to complete than classroom training.",
                    "eLearning produces an 18% increase in employee engagement in the workplace.",
                    "eLearning courses consume 90% less energy than traditional learning.",
                    "IBM saved $200 million by adopting a virtual training program for its employees.",
                ],
            },
        },
        hi: {
            loading: "बस एक मिनट...",
            loader: {
                header: "क्या तुम्हें पता था ?",
                content: [
                    "गैर-मोबाइल डिवाइस उपयोगकर्ताओं के विपरीत मोबाइल डिवाइस (स्मार्टफोन, टैबलेट, स्मार्टवॉच, आदि) का उपयोग करने पर उत्पादकता में 43% की वृद्धि होती है।",
                    "आभासी प्रशिक्षण कक्षा प्रशिक्षण की तुलना में 40-60% कम समय लेता है।",
                    "ई-लर्निंग कार्यस्थल में कर्मचारियों की व्यस्तता में 18% की वृद्धि करता है।",
                    "ई-लर्निंग पाठ्यक्रम पारंपरिक शिक्षा की तुलना में 90% कम ऊर्जा की खपत करते हैं।",
                    "आईबीएम ने अपने कर्मचारियों के लिए वर्चुअल ट्रेनिंग प्रोग्राम को अपनाकर 200 मिलियन डॉलर की बचत की।",
                ],
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<Loader
            asVariant="primary"
            asSize="normal"
            asPadded="normal"
            asAligned="center"
            withColor={null}
            withIcon={null}
            withLabel={null}
            withAnimation={null}
            withTranslation={null}
            isHidden={false}
            isFluid={true}
        />);
    })

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asAligned prop as left", () => {
        component.setProps({ asAligned: "left" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asAligned prop as right", () => {
        component.setProps({ asAligned: "right" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asAligned prop as center", () => {
        component.setProps({ asAligned: "center" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withIcon props", () => {
        let icon = { icon: "fa fa-asterisk fa-spin", size: "10px" }
        component.setProps({ withIcon: icon })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withLabel props", () => {
        let label = {
            format: "caption",
            header: "Did you know?",
            content: [
                "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
                "Virtual training takes 40-60% less time to complete than classroom training.",
                "eLearning produces an 18% increase in employee engagement in the workplace.",
                "eLearning courses consume 90% less energy than traditional learning.",
                "IBM saved $200 million by adopting a virtual training program for its employees.",
            ],
            textColor: "#000000",
        }
        component.setProps({ withLabel: label })
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

    it("should render correctly when passed withTranslation props", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "loader",
                dictionary: dictionary,
            }
        })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly with withTranslation and withLabel prop", () => {
        component.setProps({
            withLabel: {
                format: "caption",
                header: "Did you know?",
                content: [
                    "Productivity increases by 43% when using a mobile device (smartphone, tablet, smartwatch, etc.) in contrast to non-mobile device users",
                    "Virtual training takes 40-60% less time to complete than classroom training.",
                ],
                textColor: "#000000",
            },
            withTranslation: {
                lang: "hi",
                tgt: "loader",
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

    it("should render correctly when passed isFluid props as false", () => {
        component.setProps({ isFluid: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isFluid props as true", () => {
        component.setProps({ isFluid: true })
        expect(component.exists()).toBe(true);
    })
});