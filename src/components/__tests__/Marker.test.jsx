//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount, shallow } from "enzyme";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import Marker from "../Marker/Marker.react";
describe("Marker", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: Marker,
    required: {
      content: {},
      onClick: () => {},
    },
  };
  hasValid("defaults", args);

  hasValid("sizes", args);

  hasValid("animations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "110",
                name: "Assesment format",
                readerType: "quiz",
                sequence: 1,
              },
            ],
            sequence: 1,
          },
        }}
        completion={{ 110: null }}
        sequential={true}
        status="incomplete"
        asSize="normal"
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
      />
    );
  });
  it("should open popup when click if status is equal to current and sequential is set to true", () => {
    component = mount(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "512",
                name: "Assesment format",
                readerType: "xyz",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: null,
                sequence: 0,
              },
            ],
            sequence: 0,
          },
        }}
        completion={{ 512: 90 }}
        sequential={true}
        status="current"
        onClick={() => {}}
      />
    );
    component.find(".qui-marker-click").simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should open popup when click if status is equal to current and sequential is set to false", () => {
    component = shallow(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "512",
                name: "Assesment format",
                readerType: "xyz",
                sequence: 0,
              },
            ],
            sequence: 0,
          },
        }}
        completion={{ 512: 90 }}
        sequential={true}
        status="current"
        onClick={() => {}}
        onOpenDeck={() => {}}
      />
    );
    component.find(".qui-icons-name").simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should open popup when click if status is equal to complete and sequential is set to true", () => {
    component = shallow(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "512",
                name: "Assesment format",
                readerType: "videck",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "docdeck",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "assessment",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "survey",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "adaptive",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "quiz",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "casestudy",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "deck",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "qdf",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "game",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "certdeck",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: "xyz",
                sequence: 0,
              },
              {
                _id: "512",
                name: "Assesment format",
                readerType: null,
                sequence: 0,
              },
            ],
            sequence: 0,
          },
        }}
        completion={{ 512: 100 }}
        sequential={true}
        status="complete"
        onClick={() => {}}
        onOpenDeck={() => {}}
      />
    );
    component.find(".qui-icons-name").at(0).simulate("click");
    component.find(".qui-icons-name").at(1).simulate("click");
    component.find(".qui-icons-name").at(2).simulate("click");
    component.find(".qui-icons-name").at(3).simulate("click");
    component.find(".qui-icons-name").at(4).simulate("click");
    component.find(".qui-icons-name").at(5).simulate("click");
    component.find(".qui-icons-name").at(6).simulate("click");
    component.find(".qui-icons-name").at(7).simulate("click");
    component.find(".qui-icons-name").at(8).simulate("click");
    component.find(".qui-icons-name").at(9).simulate("click");
    component.find(".qui-icons-name").at(10).simulate("click");
    component.find(".qui-icons-name").at(11).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should open popup when click if status is equal to complete and sequential is set to false", () => {
    component = shallow(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "512",
                name: "Assesment format",
                readerType: "xyz",
                sequence: 0,
              },
            ],
            sequence: 0,
          },
        }}
        completion={{ 512: 100 }}
        sequential={false}
        status="complete"
        onClick={() => {}}
        onOpenDeck={() => {}}
      />
    );
    component.find(".qui-icons-name").simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should call handleclose when click", () => {
    component = shallow(
      <Marker
        content={{
          wrapper: "carnival",
          inset: 1,
          node: {
            _id: "511",
            name: "First Topic",
            description: "This is first new topic of this course",
            contentList: [
              {
                _id: "512",
                name: "Assesment format",
                readerType: "xyz",
                sequence: 0,
              },
            ],
            sequence: 0,
          },
        }}
        completion={{ 512: 90 }}
        sequential={true}
        status="current"
        onClick={() => {}}
      />
    );
    component.find("#marker").simulate("close");
    expect(component.exists()).toBe(true);
  });
});
