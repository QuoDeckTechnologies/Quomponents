//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import PdfViewer from "../../Templates/PdfViewer/PdfViewer.react";
import Slider from "../../Slider/Slider.react";
import { Document } from 'react-pdf';

describe("PdfViewer", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <PdfViewer
        data={{
          backgroundImage: {
            id: 'background-image',
            extention: ""
          },
        }}
        imageLibrary={[{
          id: 'background-image',
          image: "test-image1.png"
        }]}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage prop", () => {
    let data = {
      backgroundImage: {
        id: 'background-image',
        extention: ""
      },
    }
    let imageLibrary = [{
      id: "background-image",
      image: 'test-image'
    }]
    let colors = {
      backgroundColor: "#fff",
      sliderBackgroundColor: "#fff",
    }
    component.setProps({ data: data, withColor: colors, imageLibrary: imageLibrary })
    expect(component.exists()).toBe(true);
  })
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
          backgroundImage: {
            id: 'background-image',
            extention: ""
          },
          pdf: {
            id: 'default-pdf',
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
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
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
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
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
    component.find(Document).simulate('loadSuccess', 1)
  });
  it("should render correctly without throwing error when pdf is not passed", () => {
    component.setProps({
      data: {
      }
    })
  });
  it("should render correctly without throwing error when pdf passed", () => {
    component.setProps({
      data: {
        pdf: {
          id: "default-pdf",
          extention: "pdf"
        }
      }
    })
  });
  it("should render correctly without throwing error when pdf is passed and given background color", () => {
    component.setProps({
      data: {
        pdf: {
          id: 'default',
          extention: "pdf"
        }
      },
      withColor: {
        backgroundColor: "#ff0000"
      }
    })
  });
  it("should render correctly without throwing error when pdf is not defined", () => {
    component.setProps({
      data: {
        pdf: {
          id: '',
          extention: ""
        },
        backgroundImage: {
          id: "back",
          extention: ""
        }
      },
      imageLibrary: {
        image: "test.png",
        id: "back"
      },
      docLibrary: null
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
});