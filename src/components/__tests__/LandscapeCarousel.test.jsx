//--------------------------------------
// Import from NPM
// -------------------------------------
import React from "react";
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import LandscapeCarousel from "../Carousel/LandscapeCarousel/LandscapeCarousel.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

describe("LandscapeCarousel", () => {
  let dataprops = {
    asVariant: "warning",
    withColor: {
      backgroundColor: "",
      textColor: "",
    },
  };
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: LandscapeCarousel,
    required: {
      content: [
        {
          id: "first-slide",
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          header: "Balloon Burst",
          tag: "new",
          selected: true,
          props: {
            ...dataprops,
            asVariant: "primary",
          },
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          selected: false,
          header: "Cityscape",
          props: {
            ...dataprops,
            asVariant: "secondary",
          },
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          selected: false,
          header: "GhostBuster",
          props: {
            ...dataprops,
            asVariant: "warning",
          },
        },
      ],
      onClick: () => {},
    },
  };

  hasValid("defaults", args);

  hasValid("colors", args);
  hasValid("animations", args);

  let component, content;

  (content = [
    {
      id: "first-slide",
      image:
        "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
      header: "Balloon Burst",
      tag: "new",
      selected: true,
      props: {
        ...dataprops,
        asVariant: "primary",
      },
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
      tag: "premium",
      selected: false,
      header: "Cityscape",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
      props: {
        ...dataprops,
        asVariant: "warning",
      },
    },
  ]),
    beforeEach(() => {
      jest.resetAllMocks();
      component = shallow(
        <LandscapeCarousel content={content} onClick={() => {}} />
      );
    });
  it("should pass conditional true when the slide is selected {true} from the props ", () => {
    component.setProps({
      content: [
        {
          image:
            "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
          tag: "new",
          header: "Component",
          content: "subtitle",
          selected: true,
        },
        {
          image:
            "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
          tag: "new",
          header: "Component",
          content: "subtitle",
          selected: false,
        },
      ],
    });
  });
  it("should render and handle click event slickPrev on previous arrows", () => {
    const wrapper = shallow(<LandscapeCarousel onClick={() => {}} />);
    wrapper.find(".qui-landscape-slick-prev").simulate("click");
  });
  it("should render and handle click event slickNext on next arrow", () => {
    const wrapper = shallow(<LandscapeCarousel onClick={() => {}} />);
    wrapper.find(".qui-landscape-slick-next").simulate("click");
  });
  it("should render and handle click event when clicked on BannerCard at 1", () => {
    const wrapper = mount(
      <LandscapeCarousel
        content={[
          {
            id: "first-slide",
            image:
              "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            header: "Balloon Burst",
            tag: "new",
            selected: true,
            props: {
              ...dataprops,
              asVariant: "primary",
            },
          },
          {
            id: "second-slide",
            image:
              "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            tag: "premium",
            selected: false,
            header: "Cityscape",
            props: {
              ...dataprops,
              asVariant: "secondary",
            },
          },
          {
            id: "third-slide",
            image:
              "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
            tag: "restricted",
            selected: false,
            header: "GhostBuster",
            props: {
              ...dataprops,
              asVariant: "warning",
            },
          },
        ]}
        onClick={() => {}}
      />
    );
    wrapper
      .find(BannerCard)
      .at(1)
      .simulate("click", {
        id: "second-slide",
        image:
          "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        tag: "premium",
        selected: false,
        header: "Cityscape",
        props: {
          ...dataprops,
          asVariant: "secondary",
        },
      });
  });
  it("should render and handle click event when clicked on BannerCard at 0 ", () => {
    const wrapper = mount(
      <LandscapeCarousel
        content={[
          {
            id: "first-slide",
            image:
              "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
            header: "Balloon Burst",
            tag: "new",
            selected: true,
            props: {
              asVariant: "primary",
              withColor: {
                backgroundColor: "#ffff00",
                textColor: "",
              },
            },
          },
          {
            id: "second-slide",
            image:
              "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            tag: "premium",
            selected: false,
            header: "Cityscape",
            props: {
              ...dataprops,
              asVariant: "secondary",
            },
          },
          {
            id: "third-slide",
            image:
              "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
            tag: "restricted",
            selected: false,
            header: "GhostBuster",
            props: {
              ...dataprops,
              asVariant: "warning",
            },
          },
        ]}
        onClick={() => {}}
      />
    );
    wrapper.find(BannerCard).at(0).simulate("click");
  });
});
