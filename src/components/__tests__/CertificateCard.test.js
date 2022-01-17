//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import CertificateCard from '../CertificateCard/CertificateCard.react'

describe('CertificateCard',()=>{

    let component;
    const dictionary = JSON.stringify({
        hi: {
          CertificateCard: {
            text: {
              notstarted: "शुरू नही हुआ",
              inprogress: "चालू है",
              completed: "पूरा है",
            },
            label: "बातचीत कौशल 101",
          },
        },
      });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <CertificateCard 
                asStatus = "in progress"
                asVariant = "primary"
                withColor = {null}
                withIcon = {null}
                withLabel = {null}
                withAnimation = {null}
                withTranslation = {null}
                isHidden = {false}
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
            asStatus : "completed",
            withIcon : {
                icon : 'https://media.istockphoto.com/vectors/certificate-template-vector-id1097299164'
            }
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when status is `not started`",
    () => {
        component.setProps({
            asStatus : "not started",
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with translation",
    () => {
        component.setProps({
            withLabel: {
                content: "Negotiation Skills 101",
              },
            withTranslation: {
                lang: "hi",
                tgt: "CertificateCard",
                dictionary: dictionary,
            }
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly if translation object is not returned",
    () => {
        component.setProps({
            withLabel : null,
            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            }
        });
        expect(component.exists()).toBe(true);
    });

})