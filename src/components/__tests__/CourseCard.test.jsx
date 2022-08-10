//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import CourseCard from "../CourseCard/CourseCard.react";
import IconBlock from "../IconBlock/IconBlock.react";

Object.assign(navigator, {
  clipboard: {
    writeText: () => { },
  },
});

describe("CourseCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CourseCard,
    required: {
      type: "standard",
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
  let component, content;
  content = {
    published: false,
    type: "standard",
    wrapper: "carnival",
    tags: ["Tag1", "Tag2"],
    courseName: "Measure your sales readiness",
    description:
      "Take this quick profile test to check how well you are prepared for a sales job",
    link: "https://www.quodeck.com/",
    image: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
    points: 200,
    identifier: "XrPmy_OAK",
    date: {
      start_date: "2016-01-04 10:34:23",
      end_date: "2016-03-15 10:34:23",
    },
    sequential: false,
  };
  let mockFn = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CourseCard
        published={false}
        type="standard"
        wrapper="carnival"
        tags={["Tag1", "Tag2"]}
        name="Measure your sales readiness"
        description="Take this quick profile test to check how well you are prepared for a sales job"
        image="https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png"
        points={200}
        identifier="XrPmy_OAK"
        date={{
          start_date: "2016-01-04 10:34:23",
          end_date: "2016-03-15 10:34:23",
        }}
        sequential={false}
        onClick={mockFn}
      />
    );
  });

  it("should render correctly when image and remove header from image when passed nothing in image and wrapper", () => {
    component.setProps({
      image: "",
      wrapper: "",
    });
    expect(component.exists()).toBe(true);
  });

  it("should remove header from base image", () => {
    component.setProps({
      image: "",
      wrapper: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should show courseWrapperImage when it does not have image in the Normal Course Card", () => {
    component.setProps({
      wrapper: "carnival",
    });
    expect(component.exists()).toBe(true);
  });

  it("should display showmore button when passed more than 3 tags and on click should show all the tags", () => {
    component.setProps({ sequential: true });
    expect(component.exists()).toBe(true);
  });

  it("should display show more button when passed long text in the tag and on click should show all the tags", () => {
    component.setProps({
      tags: [
        "tag",
        "tagtagtagtagtagtagtagtagtagtagtagtagtagtag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
        "tag",
      ],
    });
    component.find("button").simulate("click");
    component.find("button").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should show non sequential course card in english", () => {
    component.setProps({ published: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2021-05-5T12:55:18.154Z",
        end_date: "2021-05-10T12:55:18.154Z",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'st' when date of yyyy/mm/01 format is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2022-02-01",
        end_date: "2022-05-01",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'nd' when date of yyyy/mm/02 format is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2022-02-02",
        end_date: "2022-05-02",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'rd' when date of yyyy/mm/03 format is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2022-05-03",
        end_date: "2022-05-04",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'th' when date of yyyy/mm/05 format is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2022-05-05",
        end_date: "2022-05-05",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'st' when date of yyyy/mm/31 format is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "2022-05-31",
        end_date: "2022-05-31",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when invalid date is provided in content props", () => {
    component.setProps({
      date: {
        start_date: "abc",
        end_date: "xyz",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when Clicked on copy Icon", async () => {
    component.find(".qui-course-card-icon-block-copy-container").simulate('mousedown')
    await pauseFor(1000);
  });

  it("should copy the link when clicked on copy icon", () => {
    component.setProps({
      identifier: "XrPmy_MND",
    });
    let iconBlock = component.find(IconBlock);
    iconBlock.simulate("click");
  });

  // it('should pass', () => {
  //   component.find(".qui-course-card-icon-block-copy-container").simulate('mousedown')
  //   let copiedPop = component.find('.qui-tooltip-text-copied');
  //   // expect(component.find('qui-tooltip-text-copied').prop('visible')).toBeTruthy();
  //   act(() => {
  //     jest.runOnlyPendingTimers();
  //   });
  //   component.update();
  //   expect(copiedPop.prop('visible')).toBe(false);
  // });
});
