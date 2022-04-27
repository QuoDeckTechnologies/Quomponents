//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Choice from "../Buttons/Choice/Choice.react";

describe("Choice", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, options, choice1, choice2;
	options = [
		{
			correct: "checked",
			text: "Item1",
		},
		{
			correct: "",
			text: "Item2",
		},
	];
	const dictionary = JSON.stringify({
		hi: {
			options: [
				{
					correct: "checked",
					text: "वस्तु 1",
				},
				{
					correct: "",
					text: "वस्तु 2",
				},
			],
		},
	});
	let colors = {
		primaryBackgroundColor: "red",
		secondaryBackgroundColor: "green",
		accentColor: "blue",
		primaryTextColor: "green",
		secondaryTextColor: "grey",
	};
	choice1 = jest.fn();
	choice2 = jest.fn();
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<Choice
				withColor={colors}
				options={options}
				asEmphasis="contained"
				asSize="normal"
				asFloated="inline"
				withAnimation={null}
				withTranslation={null}
				isHidden={false}
				isDisabled={false}
				isFluid={false}
				isChoice={true}
				onClick={() => console.log("Choice Testing")}
			/>
		);
	});

	it("should render correctly without throwing error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should call choice1 function with the parameter when click on choice1 button", () => {
		component.setProps({ onClick: choice1 });
		let choicebtn = component.find(".qui-choice1");
		choicebtn.simulate("click");
		expect(choice1).toBeCalledWith("Item1");
	});

	it("should call choice2 function with the parameter when click on choice2 button", () => {
		component.setProps({ onClick: choice2 });
		let choicebtn = component.find(".qui-choice2");
		choicebtn.simulate("click");
		expect(choice2).toBeCalledWith("Item2");
	});

	it("should render correctly with withTranslation prop", () => {
		expect(component.find(".qui-choice1").text()).toBe("Item1");
		expect(component.find(".qui-choice2").text()).toBe("Item2");
		component.setProps({
			withTranslation: {
				lang: "hi",
				tgt: "options",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-choice1").text()).toBe("वस्तु 1");
		expect(component.find(".qui-choice2").text()).toBe("वस्तु 2");
	});

	it("should render correctly when passed withTranslation Props", () => {
		component.setProps({
			withTranslation: {
				lang: "hi",
				tgt: "",
				dictionary: dictionary,
			},
		});
		expect(component.find("div").at(4).text().placeholder).toBe(undefined);
	});

	it("should render correctly when passed text in asEmphasis props", () => {
		let style = {
			background: "transparent",
			border: "none",
			boxShadow: "none",
			color: "green",
		};
		component.setProps({
			withColor: colors,
			asEmphasis: "text",
		});
		expect(component.find(".qui-choice1").props().style).toStrictEqual(style);
		expect(component.find(".qui-choice2").props().style).toStrictEqual(style);
	});

	it("should render correctly when passed outlined in asEmphasis props", () => {
		let style1 = {
			background: "transparent",
			borderColor: "red",
			boxShadow: "none",
			color: "red",
		};
		let style2 = {
			background: "transparent",
			borderColor: "green",
			boxShadow: "none",
			color: "green",
		};
		component.setProps({
			withColor: colors,
			asEmphasis: "outlined",
		});
		expect(component.find(".qui-choice1").props().style).toStrictEqual(style1);
		expect(component.find(".qui-choice2").props().style).toStrictEqual(style2);
	});

	it("should enable/ disable the OR div when passed props", () => {
		expect(component.find(".qui-or").exists()).toBe(true);
		component.setProps({
			isChoice: false,
		});
		expect(component.find(".qui-or").exists()).toBe(true);
	});
});
