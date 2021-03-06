//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import YouTube from "react-youtube";
import { Player } from "video-react";
import Vimeo from "@u-wave/react-vimeo";
import "video-react/dist/video-react.css";
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
      url: "https://www.youtube.com/watch?v=Bwx5nqvSTZ0",
      autoplay: true,
      loop: false,
      onClick: () => console.log("Button Testing"),
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
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
        url={"https://www.youtube.com/watch?v=Bwx5nqvSTZ0"}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        autoplay={true}
        loop={false}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
      ></Videobox>
    );
  });

  it("should render a video if videoId is provided", () => {
    component.setProps({
      url: "https://www.youtube.com/watch?Bwx5nqvSTZ0",
    });
    component.update();
    expect(component.find(YouTube).exists()).toBe(true);
  });
  it("should render a video if videoId is provided", () => {
    component.setProps({
      url: "https://www.youtube.com/watch?v=&Bwx5nqvSTZ0",
    });
    component.update();
    expect(component.find(YouTube).exists()).toBe(true);
  });
  it("should render a video if videoId not provided", () => {
    component.setProps({
      url: "",
    });
    component.update();
    expect(component.find(Player).exists()).toBe(true);
  });
  it("should render a video if video url is provided", () => {
    component.setProps({
      url: "https://vimeo.com/686836566",
    });
    component.update();
    expect(component.find(Vimeo).exists()).toBe(true);
  });
  it("should rednder correctly when call onReady", () => {
    component = shallow(<Videobox autoplay={false} onReady={onReady} />);
    component
      .find(".react-player")
      .simulate("ready", { target: { playVideo: () => {} } });
  });
  it("should rednder correctly when call onReady", () => {
    component = shallow(<Videobox onReady={null} />);
    component
      .find(".react-player")
      .simulate("ready", { target: { playVideo: () => {} } });
  });
  it("should rednder correctly when call onError", () => {
    component = shallow(<Videobox onError={onError} />);
    component.find(".react-player").simulate("error");
  });
  it("should rednder correctly when call onPlay", () => {
    component = shallow(<Videobox onPlay={onPlay} />);
    component.find(".react-player").simulate("play");
  });
  it("should rednder correctly when call onPause", () => {
    component = shallow(<Videobox onPause={onPause} />);
    component.find(".react-player").simulate("pause", { target: {} });
  });
  it("should rednder correctly when call onPause", () => {
    component = shallow(<Videobox onPause={null} />);
    component.find(".react-player").simulate("pause", { target: {} });
  });
  it("should rednder correctly when call onEnd", () => {
    component = shallow(<Videobox onEnd={onEnd} />);
    component
      .find(".react-player")
      .simulate("end", { target: { playVideo: () => {} } });
  });
  it("should rednder correctly when call onEnd", () => {
    component = shallow(<Videobox loop={true} onEnd={onEnd} />);
    component
      .find(".react-player")
      .simulate("end", { target: { playVideo: () => {} } });
  });
  it("should rednder correctly when call onEnd", () => {
    component = shallow(<Videobox onEnd={null} />);
    component
      .find(".react-player")
      .simulate("end", { target: { playVideo: () => {} } });
  });
  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });
});
