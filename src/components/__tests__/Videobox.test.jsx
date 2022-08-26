//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import YouTube from "react-youtube";
import { Player } from "video-react";
import Vimeo from "@u-wave/react-vimeo";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Videobox from "../Videobox/Videobox.react";

describe("Videobox", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Videobox,
    required: {
      link: "https://www.youtube.com/watch?v=Bwx5nqvSTZ0",
      autoplay: true,
    },
  };

  hasValid("defaults", args);
  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let onReady = jest.fn();
  let onPlay = jest.fn();
  let onPause = jest.fn();
  let onEnd = jest.fn();
  let onError = jest.fn();
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Videobox
        link={"https://www.youtube.com/watch?v=Bwx5nqvSTZ0"}
        isDisabled={false}
        isHidden={false}
        autoplay={true}
        loop={true}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
      ></Videobox>
    );
  });

  it("should render a video if link is provided for youtube player", () => {
    component.setProps({
      link: "https://www.youtube.com/watch?Bwx5nqvSTZ0",
    });
    component.update();
    expect(component.find(YouTube).exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it("should render a video if link is provided for youtube player with different format", () => {
    component.setProps({
      link: "https://www.youtube.com/watch?v=&Bwx5nqvSTZ0",
    });
    component.update();
    expect(component.find(YouTube).exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it("should render a default video if link not provided", () => {
    component.setProps({
      link: "",
    });
    component.update();
    expect(component.find(Player).exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it("should render a video if vimeo link is provided", () => {
    component.setProps({
      link: "https://vimeo.com/686836566",
    });
    component.update();
    expect(component.find(Vimeo).exists()).toBe(true);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onReady", () => {
    component = shallow(<Videobox autoplay={false} onReady={onReady} />);
    component
      .find(".react-player")
      .simulate("ready", { target: { playVideo: () => { } } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onReady is equal to null", () => {
    component = shallow(<Videobox onReady={null} />);
    component
      .find(".react-player")
      .simulate("ready", { target: { playVideo: () => { } } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onError", () => {
    component = shallow(<Videobox onError={onError} />);
    component.find(".react-player").simulate("error");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onPause", () => {
    component = shallow(<Videobox onPause={onPause} />);
    component.find(".react-player").simulate("pause", { target: {} });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onPause is equal to null", () => {
    component = shallow(<Videobox onPause={null} />);
    component.find(".react-player").simulate("pause", { target: {} });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onPlay", () => {
    component = shallow(<Videobox onPlay={onPlay} />);
    component.find(".react-player").simulate("play", { target: {} });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onPlay is equal to null", () => {
    component = shallow(<Videobox onPlay={null} />);
    component.find(".react-player").simulate("play", { target: {} });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if call onEnd", () => {
    component = shallow(<Videobox loop={true} onEnd={onEnd} />);
    component
      .find(".react-player")
      .simulate("end", { target: { playVideo: () => { } } });
    expect(component.exists()).toBe(true);
  });
  
  it("should render correctly if call onEnd is equal to null", () => {
    component = shallow(<Videobox onEnd={null} />);
    component
      .find(".react-player")
      .simulate("end", { target: { playVideo: () => { } } });
    expect(component.exists()).toBe(true);
  });
});
