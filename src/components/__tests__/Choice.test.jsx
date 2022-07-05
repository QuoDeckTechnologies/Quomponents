//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Choice from "../Buttons/Choice/Choice.react";

describe("Choice", () => {

	// -------------------------------------
	// Run common tests
	// -------------------------------------

	const args = {
		target: Choice,
		required: {
			options: [
				{
					correct: "checked",
					text: "Item1",
				},
				{
					correct: "",
					text: "Item2",
				},
			],
			onClick: () => { },
		},
		translations: {
			tgt: "options",
			lang: { valid: "hi", invalid: "xx" },
			dictionary: JSON.stringify({
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
			}),
		},
	};

	hasValid("defaults", args);

	hasValid("variants", args);
	hasValid("sizes", args);
	hasValid("positions", args);
	hasValid("padding", args);
	hasValid("alignment", args);

	hasValid("colors", args);
	hasValid("animations", args);
	hasValid("translations", args);

	hasValid("toggles", args);

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
				isChoice={false}
				asEmphasis="contained"
				onClick={() => { }}
			/>
		);
	});

	it("should render correctly when passed asEmphasis prop as text", () => {
		let colors = {
			primaryBackgroundColor: "#000066",
			secondaryBackgroundColor: "#003366",
			accentColor: "",
			primaryTextColor: "#ffffff",
			secondaryTextColor: "#ffffff",
		}
		component.setProps({ asEmphasis: "text" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

	it("should render correctly when passed asEmphasis prop as contained", () => {
		let colors = {
			primaryBackgroundColor: "#000066",
			secondaryBackgroundColor: "#003366",
			accentColor: "",
			primaryTextColor: "#ffffff",
			secondaryTextColor: "#ffffff",
		}
		component.setProps({ asEmphasis: "contained" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

	it("should render correctly when passed asEmphasis prop as outlined", () => {
		let colors = {
			primaryBackgroundColor: "#000066",
			secondaryBackgroundColor: "#003366",
			accentColor: "",
			primaryTextColor: "#ffffff",
			secondaryTextColor: "#ffffff",
		}
		component.setProps({ asEmphasis: "outlined" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

	it("should call choice1 function with the parameter when click on choice1 button", () => {
		component.setProps({ onClick: choice1 });
		let choicebtn = component.find(".qui-choice1");
		choicebtn.simulate("click");
		expect(choice1).toBeCalledWith(0);
	});

	it("should call choice2 function with the parameter when click on choice2 button", () => {
		component.setProps({ onClick: choice2 });
		let choicebtn = component.find(".qui-choice2");
		choicebtn.simulate("click");
		expect(choice2).toBeCalledWith(1);
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
		expect(component.find(".qui-or").props().style.display).toBe("none");
		component.setProps({
			isChoice: true,
		});
		expect(component.find(".qui-or").props().style.display).toBe("flex");
	});
});
