//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import LearnerTableRow from "../LearnerTableRow/LearnerTableRow.react";

describe("EarnCard", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      loading: "बस एक मिनट...",
      bannercard: { header: "", content: "" },
      ribbon: {
        new: "नया",
        restricted: "प्रतिबंधित",
        premium: "अधिमूल्य",
        free: "नि: शुल्क",
      },
      earncard: {
        title: "क्वोडेक इमर्जिंग लीडरशिप प्रोग्राम",
        description:
          "अपने करियर को सितारों तक ले जाने के इस विशेष अवसर के लिए आवेदन करने का मौका जीतें",
        dates: {
          end_date: "3 मई",
          start_date: "28 फरवरी",
        },
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <LearnerTableRow
        content={{
          enrolledLearners: [
            {
              _id: "",
              username: "sysadmin",
              first_name: "System",
              last_name: "Administrator",
            },
          ],
        }}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onUnenrollLearner={() => {}}
        onSendMessage={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on checkbox", () => {
    component.find('.qui-learner-checkbox').simulate('click')
  });
  it("should render correctly without throwing error when clicked on icons", () => {
    component.find('.far').at(1).simulate('click')
    component.find('.fas').simulate('click')
  });
});
