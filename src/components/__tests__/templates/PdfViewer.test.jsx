//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import PdfViewer from "../../Templates/PdfViewer/PdfViewer.react";

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
          title: "This is Title",
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
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
});
