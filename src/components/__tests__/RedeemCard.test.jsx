import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import RedeemCard from "../RedeemCard/RedeemCard.react";
import Button from "../Buttons/Button/Button.react";
import defaultImage from "../../assets/default.jpeg";

describe("RedeemCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: RedeemCard,
    translations: {
      tgt: "redeemCard",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          redeemCard: {
            button: "मोचन",
            inprogress: "आपका मोचन अनुरोध प्रक्रिया में है",
            completed: "आपने इस ऑफ़र को भुना लिया है",
          },
        },
        en: {
          redeemCard: {
            button: "Redeem",
            inprogress: "YOUR REDEMPTION REQUEST IS IN PROCESS",
            completed: "YOU HAVE REDEEMED THIS OFFER",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("padding", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("translations", args);
  hasValid("animations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <RedeemCard
        id=""
        name="Yamaha FZ16 Bike"
        description="A beast on the road this motorbike commands respect."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
        cost={600}
        stock={{
          left: 1,
          total: 1000,
        }}
        status="Pending"
        asPadded="normal"
        asFloated="inline"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render correctly when passed extra content and should also display showmore button", () => {
    let component = mount(
      <RedeemCard
        name="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
        cost={1000000}
        stock={{
          left: 1000000,
          total: 1000000,
        }}
        description="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        status="Pending"
        onClick={jest.fn()}
      />
    );
    component.find(".qui-redeem-card-show-more").simulate("click"); //simulate showmore button and display all content
    component.find(".qui-redeem-card-show-more").simulate("click"); //simulate showmore button and hide the content and show truncated content
    expect(component.exists()).toBe(true);
  });

  it("should render RedeemCard with Pending status", () => {
    let component = mount(<RedeemCard status="Pending" onClick={jest.fn()} />);
    expect(component.find(Button).exists()).toBe(true);
    expect(component.find(Button).text()).toBe("Redeem");
  });

  it("should render RedeemCard with InProgress status", () => {
    let component = mount(
      <RedeemCard status="InProgress" onClick={jest.fn()} />
    );
    expect(component.find(".qui-redeem-card-redeem-inprogress").text()).toBe(
      "YOUR REDEMPTION REQUEST IS IN PROCESS"
    );
  });

  it("should render RedeemCard with Completed status", () => {
    let component = mount(
      <RedeemCard status="Completed" onClick={jest.fn()} />
    );
    expect(component.find(".qui-redeem-card-redeem-completed").text()).toBe(
      "YOU HAVE REDEEMED THIS OFFER"
    );
  });

  it("should render RedeemCard with default Image when nothing passed in the image props", () => {
    let component = mount(<RedeemCard image="" onClick={jest.fn()} />);
    expect(
      component.find(".qui-redeem-card-image").props().style.backgroundImage
    ).toBe(`url(${defaultImage})`);
  });

  it("should render RedeemCard with Image when passed image in the image props", () => {
    let component = mount(
      <RedeemCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU"
        onClick={jest.fn()}
      />
    );
    expect(
      component.find(".qui-redeem-card-image").props().style.backgroundImage
    ).toBe(
      `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeATjmpNd-h_Ks3g4SsBtHhLZ5F3FURym4w7KBqmteMxBmPRLX6oFwH2g1CRT_ckAzzFw&usqp=CAU)`
    );
  });
});
