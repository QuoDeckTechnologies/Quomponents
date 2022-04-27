//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Choice from "../../Templates/Choice/Choice.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("Choice", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------

	let component, data, options;
	data = {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		image: "",
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		backgroundImage:
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
		choice: [
			{
				correct: "checked",
				text: "Item1",
			},
			{
				correct: "",
				text: "Item2",
			},
		],
	};

	let colors = {
		questionColor: "#000000",
		answerColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		backgroundColor: "#000",
	};

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<Choice
				data={data}
				withColor={colors}
				slideId={1}
				options={options}
				asEmphasis="contained"
				asSize="normal"
				asFloated="inline"
				withAnimation={null}
				isHidden={false}
				isDisabled={false}
				onClick={() => console.log("Choice Testing")}
			/>
		);
	});

	it("should render correctly without throwing error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asVariant prop as primary", () => {
		component.setProps({ asVariant: "primary" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asVariant prop as secondary", () => {
		component.setProps({ asVariant: "secondary" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asVariant prop as warning", () => {
		component.setProps({ asVariant: "warning" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asVariant prop as error", () => {
		component.setProps({ asVariant: "error" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asVariant prop as success", () => {
		component.setProps({ asVariant: "success" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed withAnimation props", () => {
		let animation = {
			animation: "zoom",
			duration: 0.5,
			delay: 0,
		};
		component.setProps({ withAnimation: animation });
		expect(component.exists()).toBe(true);
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

	it("should render title and subtitle when we doesn't pass image", () => {
		component.setProps({
			data: {
				title: "Neque porro quisquam est qui dolorem",
				subtitle:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
				choice: [
					{
						correct: "checked",
						text: "Item1",
					},
					{
						correct: "",
						text: "Item2",
					},
				],
			},
		});
		expect(component.find(SlideHeader).props().content.title).toBe(
			"Neque porro quisquam est qui dolorem"
		);
		expect(component.find(SlideHeader).props().content.subTitle).toBe(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
		);
	});

	it("should render image instead of title and sutitle", () => {
		component.setProps({
			data: {
				image:
					"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
				choice: [
					{
						correct: "checked",
						text: "Item1",
					},
					{
						correct: "",
						text: "Item2",
					},
				],
			},
		});
		expect(component.find(".qui-slide-choice-image").props().src).toBe(
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
		);
	});

	it("should render default backgroundcolor if we doesn't pass background color", () => {
		component.setProps({
			data: {
				backgroundImage: "",
				choice: [
					{
						correct: "checked",
						text: "Item1",
					},
					{
						correct: "",
						text: "Item2",
					},
				],
			},
			withColor: {
				backgroundColor: "",
			},
		});
		expect(
			component.find(".qui-slide-choice-card").props().style.backgroundColor
		).toBe("#ffffff");
	});

	it("should render backgroundcolor if we pass background color", () => {
		component.setProps({
			data: {
				backgroundImage: "",
				choice: [
					{
						correct: "checked",
						text: "Item1",
					},
					{
						correct: "",
						text: "Item2",
					},
				],
			},
			withColor: {
				backgroundColor: "#000",
			},
		});
		expect(
			component.find(".qui-slide-choice-card").props().style.backgroundColor
		).toBe("#000");
	});
});
