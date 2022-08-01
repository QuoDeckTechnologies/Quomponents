//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from "@testing-library/react";



//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import FlipConfirm from '../Buttons/FlipConfirm/FlipConfirm.react';

describe("FlipConfirm", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  let frontClick = jest.fn

  const dictionary = JSON.stringify({
    en: {
      loading: "Please wait...",
      flipconfirm: {
        text: "Button",
        label: "Do not press this repeatedly...",
        header: "Are you sure you want to do that?",
        yes: "Yes",
        no: "No",
      }
    },
    hi: {
      loading: "बस एक मिनट...",
      flipconfirm: {
        text: "बटन",
        label: "इसे बार-बार न दबाएं...",
        header: "क्या वाकई आपकी इसे करने की इच्छा है?",
        yes: "हां",
        no: "नहीं",
      }

    },
  });


  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(<FlipConfirm
      asEmphasis="contained"
      isCircular={false}
      asVariant="primary"
      asSize="normal"
      asPadded="normal"
      asFloated="none"
      asAligned="center"
      withConfirmation={null}
      withColor={null}
      withIcon={null}
      withLabel={null}
      withAnimation={null}
      withTranslation={null}
      isHidden={false}
      isDisabled={false}
      isFluid={false}
      isLoading={false}
      onClick={() => { }}
    />);
  })

  it("it should render correctly without throwing an error ",
    () => {
      expect(component.exists()).toBe(true);
    });


  it("should render correctly with translation",
    () => {
      component.setProps({
        withTranslation: {
          lang: "en",
          tgt: "FlipConfirm:",
          dictionary: dictionary,
        },
      });
      expect(component.exists()).toBe(true);
    });


  it("should render correctly with translation",
    () => {
      component.setProps({
        withConfirmation: {
          header: "Are you sure you want to do that?",
          yes: "Yes",
          no: "No",
        },
      }),
        expect(component.exists()).toBe(true);
    });

  it("should render correctly if translation object is not returned",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "",
          dictionary: dictionary,
        },
        withConfirmation: {
          header: "Are you sure you want to do that?",
          yes: "Yes",
          no: "No",
        },
      });
      expect(component.exists()).toBe(true);
    });

  it("Click testing", () => {
    let wrapper = shallow(<FlipConfirm onClick={() => { }}
    />);
    wrapper.find("Button").at(0).simulate('click', { clientX: 100, clientY: 100 });
    wrapper.find("Button").at(1).simulate('click', { clientX: 100, clientY: 100 });
    wrapper.find("Button").at(2).simulate('click', { clientX: 100, clientY: 100 });
    // wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });

  })

  it("Funtion testing", () => {

    const { container } = render(<FlipConfirm onClick={() => { }} />);
    const inputElement = container.querySelector(".qui-btn");
    fireEvent.change(inputElement, { clientX: 100, clientY: 100 });

  })

});