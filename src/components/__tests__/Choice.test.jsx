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
import Button from "../Buttons/Button/Button.react";

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
							text: "वस्तु 1",
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

	hasValid("colors", args);
	hasValid("animations", args);
	hasValid("translations", args);

	hasValid("hidden", args);
	hasValid("disabled", args);
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
				textSeparator={false}
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

	it("should call choice2 function with the parameter when click on choice1 button", () => {
		component.setProps({ onClick: choice1 });
		let choicebtn = component.find(Button).at(0);
		choicebtn.simulate("click");
	});
	
	it("should call choice2 function with the parameter when click on choice2 button", () => {
		component.setProps({ onClick: choice2 });
		let choicebtn = component.find(Button).at(1);
		choicebtn.simulate("click");
	});

	it("should enable/ disable the OR div when passed props", () => {
		expect(component.find(".qui-or").props().style.display).toBe("none");
		component.setProps({
			textSeparator: true,
		});
		expect(component.find(".qui-or").props().style.display).toBe("flex");
	});
});
