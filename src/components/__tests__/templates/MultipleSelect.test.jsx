//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import MultipleSelect from "../../Templates/MultipleSelect/MultipleSelect.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("MultipleSelect", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, data;
	data = {
		title: "Neque porro quisquam est qui dolorem",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
		backgroundImage: { id: "", extention: "" },
		question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
		options: [
			{
				name: "Item 1",
				isSelected: false,
			},
			{
				name: "Item 2",
				isSelected: false,
			},
			{
				name: "Item 3",
				isSelected: false,
			},
			{
				name: "Item 4",
				isSelected: false,
			}
		],
	}

	let colors = {
		questionColor: "#000000",
		answerColor: "#000000",
		slideHeaderTextColor: "#ffffff",
		slideHeaderAccentColor: "#AD2929",
		slideHeaderBackgroundColor: "#AD292980",
		backgroundColor: "#fff",
	};

	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<MultipleSelect
				data={data}
				slideId={1}
				asEmphasis="contained"
				withColor={colors}
				withAnimation={null}
				isHidden={false}
				isDisabled={false}
				onClick={() => console.log("MultipleSelect Testing")}
			/>
		);
	});

	it("should render correctly without throwing error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asEmphasis prop as text", () => {
		let colors = {
			slideHeaderTextColor: "#ffffff",
			slideHeaderAccentColor: "#AD2929",
			slideHeaderBackgroundColor: "#AD292980",
			buttonBackgroundColor: "#AD2929",
			buttonTextColor: "#ffffff",
			buttonHoverBackgroundColor: "#AD292980",
			buttonHoverTextColor: "#AD2929"
		}
		component.setProps({ asEmphasis: "text" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

	it("should render correctly when passed asEmphasis prop as contained", () => {
		let colors = {
			slideHeaderTextColor: "#ffffff",
			slideHeaderAccentColor: "#AD2929",
			slideHeaderBackgroundColor: "#AD292980",
			buttonBackgroundColor: "#AD2929",
			buttonTextColor: "#ffffff",
			buttonHoverBackgroundColor: "#AD292980",
			buttonHoverTextColor: "#AD2929"
		}
		component.setProps({ asEmphasis: "contained" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

	it("should render correctly when passed asEmphasis prop as outlined", () => {
		let colors = {
			slideHeaderTextColor: "#ffffff",
			slideHeaderAccentColor: "#AD2929",
			slideHeaderBackgroundColor: "#AD292980",
			buttonBackgroundColor: "#AD2929",
			buttonTextColor: "#ffffff",
			buttonHoverBackgroundColor: "#AD292980",
			buttonHoverTextColor: "#AD2929"
		}
		component.setProps({ asEmphasis: "outlined" })
		component.setProps({ withColor: colors })
		expect(component.exists()).toBe(true);
	})

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
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
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
				image: { id: "header-image", extension: "" },
			},
			imageLibrary: [{
				id: "header-image",
				image:
					"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
			}],
		});
		expect(component.find(".qui-slide-multiple-select-image").props().src).toBe(
			"https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
		);
	});

	it("should render default backgroundcolor if we doesn't pass background color", () => {
		component.setProps({
			data: {
				backgroundImage: { id: "", extention: "" },
				MultipleSelect: [
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
			component.find(".qui-slide-multiple-select-card").props().style.backgroundColor
		).toBe("#ffffff");
	});

	it("should render backgroundImage if we pass background image id", () => {
		component.setProps({
			data: {
				backgroundImage: { id: "background-image", extention: "" }
			},
			withColor: {
				backgroundColor: "",
			},
		});
	});

	it("should render backgroundcolor if we pass background color", () => {
		component.setProps({
			withColor: {
				backgroundColor: "#000",
			},
		});
		expect(
			component.find(".qui-slide-multiple-select-card").props().style.backgroundColor
		).toBe("#000");
	});

	it("should return the index of selected option", () => {
		component.setProps({
			options: [
				{
					name: "Item 1",
					isSelected: false,
				},
				{
					name: "Item 2",
					isSelected: false,
				},
				{
					name: "Item 3",
					isSelected: false,
				},
				{
					name: "Item 4",
					isSelected: false,
				}
			],
		})
		let onClick = jest.fn();
		component.setProps({ onClick: onClick })
		component.find(".qui-slide-multiple-select-container").children().simulate('click', 3)
		expect(onClick).toBeCalledWith(3);
		component.find(".qui-slide-multiple-select-container").children().simulate('click', 1)
		expect(onClick).toBeCalledWith(1);
	});
});
