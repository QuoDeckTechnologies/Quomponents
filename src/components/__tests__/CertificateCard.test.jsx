//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import CertificateCard from '../CertificateCard/CertificateCard.react'

describe('CertificateCard', () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: CertificateCard,
        required: {
        },
        translations: {
            tgt: "certificateCard",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    certificateCard: {
                        text: {
                            notstarted: "शुरू नही हुआ",
                            inprogress: "चालू है",
                            completed: "पूरा है",
                        },
                        label: "बातचीत कौशल 101",
                    },
                },
            })
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CertificateCard
                asStatus="in progress"
                withColor={null}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render correctly when status is completed and certificate image is provided",
        () => {
            component.setProps({
                asStatus: "completed",
                withIcon: {
                    icon: 'https://media.istockphoto.com/vectors/certificate-template-vector-id1097299164'
                }
            });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly when status is `not started`",
        () => {
            component.setProps({
                asStatus: "not started",
            });
            expect(component.exists()).toBe(true);
        });
})