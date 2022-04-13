//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import CourseCard from "../CourseCard/CourseCard.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";

Object.assign(navigator, {
	clipboard: {
		writeText: () => {},
	},
});

describe("CourseCard", () => {
	// -------------------------------------
	// Setup definitions for the test suite
	// -------------------------------------
	let component, content;
	content = {
		published: false,
		courseType: "standard",
		wrapper: "carnival",
		tags: ["Tag1", "Tag2"],
		courseName: "Measure your sales readiness",
		description:
			"Take this quick profile test to check how well you are prepared for a sales job",
		courseImage:
			"https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: "200",
		identifier: "XrPmy_OAK",
		date: {
			start_date: "2016-01-04 10:34:23",
			end_date: "2016-03-15 10:34:23",
		},
		sequential: false,
	};
	let mockFn = jest.fn();

	jest.spyOn(navigator.clipboard, "writeText");
	beforeEach(() => {
		jest.resetAllMocks();
		component = shallow(
			<CourseCard
				content={content}
				asSize="normal"
				asPadded="normal"
				asFloated="inline"
				isHidden={false}
				isDisabled={false}
				onClick={mockFn}
			/>
		);
	});

	it("should render correctly without throwing error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asSize prop as tiny", () => {
		component.setProps({ asSize: "tiny" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asSize prop as small", () => {
		component.setProps({ asSize: "small" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asSize prop as normal", () => {
		component.setProps({ asSize: "normal" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asSize prop as big", () => {
		component.setProps({ asSize: "big" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asSize prop as huge", () => {
		component.setProps({ asSize: "huge" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asSize prop as massive", () => {
		component.setProps({ asSize: "massive" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asPadded prop as fitted", () => {
		component.setProps({ asPadded: "fitted" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asPadded prop as commpact", () => {
		component.setProps({ asPadded: "compact" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asPadded prop as normal", () => {
		component.setProps({ asPadded: "normal" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asPadded prop as relaxed", () => {
		component.setProps({ asPadded: "relaxed" });
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when passed asFloated prop as left", () => {
		component.setProps({ asFloated: "left" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asFloated prop as right", () => {
		component.setProps({ asFloated: "right" });
		expect(component.exists()).toBe(true);
	});
	it("should render correctly when passed asFloated prop as inline", () => {
		component.setProps({ asFloated: "inline" });
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

	it("should simulate the ArcMenu on click", () => {
		component.setProps({ arcFn: jest.fn() });
		let arcMenu = component.find(ArcMenu);
		arcMenu.simulate("click");
	});

	it("should copy the link when clicked on copy icon", () => {
		component.setProps({
			content: { category: "profiler", identifier: "XrPmy_MND" },
		});
		let iconBlock = component.find(IconBlock);
		iconBlock.simulate("click");
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
			"https://www.quodeck.com/XrPmy_MND"
		);
	});

	it("should show courseImage when passed courseImage in the Gamified Course Card", () => {
		let content = {
			courseType: "exam",
			wrapper: "carnival",
			courseImage:
				"https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		component.find(BannerCard).simulate("click");
		expect(component.find(BannerCard).props().content.image).toBe(
			"https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg"
		);
	});

	it("should show courseWrapperImage when passed wrapper in the Gamified Course Card", () => {
		let content = {
			courseType: "exam",
			courseImage: "",
			wrapper: "carnival",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		expect(component.find(BannerCard).props().content.image).toBe(
			"assets/courses/carnival/play_backdrop.jpg"
		);
	});

	it("should show default image and remove header from image when passed nothing in courseImage and wrapper", () => {
		let content = {
			courseType: "standard",
			courseImage: "",
			wrapper: "",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		expect(component.find(BannerCard).props().content.image).toBe(
			"default.jpeg"
		);
		expect(component.find(BannerCard).props().content.header).toBe("");
	});

	it("should remove header from base image", () => {
		let content = {
			courseType: "standard",
			courseImage: "",
			wrapper: "none",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		expect(component.find(BannerCard).props().content.header).toBe("");
	});

	it("should show courseWrapperImage when it does not have courseImage in the Normal Course Card", () => {
		let content = {
			courseType: "standard",
			wrapper: "carnival",
			courseImage: "",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		expect(component.find(BannerCard).props().content.image).toBe(
			"assets/courses/carnival/play_backdrop.jpg"
		);
	});

	it("should display showmore button when passed more than 3 tags and on click should show all the tags", () => {
		component.setProps({ content: { tags: ["Tag1", "Tag2", "Tag3", "Tag4"] } });
		let showMore = component.find("button");
		expect(showMore.exists()).toBe(true);
		component.find("button").simulate("click");
		component.find("button").simulate("click");
	});

	it("should display showmore button when passed long text in the tag and on click should show all the tags", () => {
		component.setProps({
			content: { tags: ["Pneumonoultramicroscopicsilicovolcanoconiosis"] },
		});
		let showMore = component.find("button");
		expect(showMore.exists()).toBe(true);
		component.find("button").simulate("click");
		component.find("button").simulate("click");
	});

	it("should show the published nugget card", () => {
		component.setProps({ content: { published: true } });
		expect(component.find(NuggetBlock).props().status).toBe("published");
	});

	it("should show sequential course card", () => {
		component.setProps({ content: { sequential: true } });
		expect(component.find(".qui-course-card-name").text()).toBe(
			"Sequential Course"
		);
	});

	it("should show non sequential course card", () => {
		component.setProps({ content: { sequential: false } });
		expect(component.find(".qui-course-card-name").text()).toBe(
			"Non Sequential Course"
		);
	});
});
