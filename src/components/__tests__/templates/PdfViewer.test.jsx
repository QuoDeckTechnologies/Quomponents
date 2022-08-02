//--------------------------------------
// Import from NPM
// -------------------------------------
import React from "react"
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import PdfViewer from "../../Templates/PdfViewer/PdfViewer.react";
import Slider from "../../Slider/Slider.react";
import { Document } from 'react-pdf';

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "../common";

describe("PdfViewer", () => {

  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: PdfViewer,
    required: {
      data: {
        pdf: {
          id: "default-pdf",
          extention: ""
        },
      }, onClick: () => { },
    },
  };
  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Setup definitions for the test suite
  // // -------------------------------------
  let component;
  let pdfDocumnet = "data:application/pdf;base64,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"
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(initialState => [initialState, setState]);
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <PdfViewer
        slideId={0}
        handleCompletion={jest.fn()}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when window is resized", () => {
    global.innerWidth = 200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });
  it("should render correctly without throwing error when window is resized to larger viewport", () => {
    global.innerWidth = 1200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });
  it("should render correctly without throwing error when component mounts", () => {
    component = mount(
      <PdfViewer
        data={{
          pdf: {
            id: 'default-pdf',
            extention: ""
          },
        }}
        docLibrary={[{
          id: 'default-pdf',
          doc: "test.pdf"
        }]}
        slideId={0}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
    global.innerWidth = 1200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    global.innerWidth = 200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    global.innerWidth = 330;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    global.innerWidth = 500;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    global.innerWidth = 600;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });
  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <PdfViewer
        data={{
          backgroundImage: {
            id: 'background-image',
            extention: ""
          },
          pdf: {
            id: 'background-image',
            extention: ""
          },
        }}
        imageLibrary={[{
          id: 'background-image',
          image: "test-image1.png"
        }]}
        docLibrary={[{
          id: 'default-pdf',
          doc: "test.pdf"
        }]}
        slideId={0}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
    unmount();
  });
  it("should render correctly without throwing error when data is passed", () => {
    component.setProps({
      data: {
        backgroundImage: {
          id: 'background-image',
          extention: ""
        },
        pdf: {
          id: 'pdf',
          extention: ""
        },
      }
    })
  });
  it("should render correctly without throwing error when clicked on slider ", () => {
    component.setProps({
      data: {
        pdf: {
          id: 'default-pdf',
          extention: ""
        },
      },
      docLibrary:
        [{
          id: 'default-pdf',
          doc: "test.pdf"
        }],
      withColor: {
        sliderBackgroundColor: "#fff"
      }
    })
    component.find(Document).simulate('click')
  });
  it("should render correctly without throwing error when clicked on rotate icon and slider ", () => {
    component.setProps({
      data: {
        pdf: {
          id: 'default-pdf',
          extention: ""
        },
      },
      docLibrary:
        [{
          id: 'default-pdf',
          doc: "test.pdf"
        }],
      withColor: {
        sliderBackgroundColor: "#fff"
      }
    })
    global.innerWidth = 480;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    component.find(Document).simulate('click')
    component.find(Slider).simulate('click')
    component.find(".qui-pdf-rotate-icon").simulate('click')
  });
  it("should render correctly without throwing error when pdf or docLibrary is not found ", () => {
    component.setProps({
      data: {
        pdf: null,
      },
      docLibrary: null,
      withColor: {
        sliderBackgroundColor: "#fff"
      }
    })
  });
  it("should render correctly without throwing error when document gets loaded to screen", () => {
    component.setProps({
      data: {
        pdf: {
          id: "pdf",
          extention: "pdf"
        }
      },
      docLibrary: [{
        id: "pdf",
        doc: "test.pdf"
      }]
    })
    expect(component.find(Document).exists()).toBe(true)
    let data = {
      seenPages: 1, numPages: 23
    }
    component.find(Document).simulate('loadSuccess', data)
  });
  it('should run on handleScroll', () => {
    const pdfDoc = shallow((<PdfViewer handleCompletion={jest.fn()}
      data={{
        pdf: {
          id: "pdf",
          extention: ".pdf"
        }
      }}
      docLibrary={[{
        id: "pdf",
        doc: pdfDocumnet
      }]}
    />));
    const mEvent = {
      target: {
        scrollWidth: 100,
        scrollTop: 1200,
        scrollLeft: 50,
        clientWidth: 50,
      },
    };
    const mEvent1 = {
      target: {
        scrollWidth: 200,
        scrollTop: 1300,
        scrollLeft: 40,
        clientWidth: 10,
      },
    };
    pdfDoc.find('.qui-pdf-viewer').simulate('scroll', mEvent);
    pdfDoc.find('.qui-pdf-viewer').simulate('scroll', mEvent1);
    // pdfDoc.find(".qui-pdf-viewer").props("handleCompletion")({ target: { value: 12 } })
  });
});
