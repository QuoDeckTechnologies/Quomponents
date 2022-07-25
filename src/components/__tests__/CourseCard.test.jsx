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
import CourseCard from "../CourseCard/CourseCard.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import IconBlock from "../IconBlock/IconBlock.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";

Object.assign(navigator, {
	clipboard: {
		writeText: () => { },
	},
});

const dictionary = JSON.stringify({
	hi: {
		courseCard: {
			isSequential: {
				true: "अनुक्रमिक पाठ्यक्रम",
				false: "गैर अनुक्रमिक पाठ्यक्रम"
			},
			months: {
				Jan: "जनवरी",
				Feb: "फ़रवरी",
				Mar: "मार्च",
				Apr: "अप्रैल",
				May: "मई",
				Jun: "जून",
				Jul: "जुलाई",
				Aug: "अगस्त",
				Sep: "सितम्बर",
				Oct: "अक्टूबर",
				Nov: "नवम्बर",
				Dec: "दिसम्बर",
			},
			share: "शेयर",
			rewardLabel: "पूर्ण करे जीतने के लिए",
			menu: [
				"विवरण संपादित करें",
				"सामग्री संपादित करें",
				"शिक्षार्थियों को प्रबंधित करें",
				"विश्लेषण देखें",
				"पाठ्यक्रम हटाएं"
			]
		}
	}
});

describe("CourseCard", () => {

	// -------------------------------------
	// Run common tests
	// -------------------------------------

	const args = {
		target: CourseCard,
		required: {
			onClick: () => { },
		},
		translations: {
			tgt: "button",
			lang: { valid: "hi", invalid: "xx" },
			dictionary: JSON.stringify({
				hi: {
					loading: "बस एक मिनट...",
					button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
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

	hasValid("hidden", args);
	hasValid("disabled", args);
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
		description: "Take this quick profile test to check how well you are prepared for a sales job",
		courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
		points: 200,
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

	it("should render translation of Check Answer with withTranslation prop and when passed purpose as quiz", () => {
		component.setProps({
			withTranslation: {
				lang: "hi",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

	it("should render submitAnswer translation with withTranslation prop and when passed nothing in the purpose props", () => {
		component.setProps({
			withTranslation: {
				lang: "hi",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
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
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith("https://www.quodeck.com/XrPmy_MND");
	});

	it("should show courseImage when passed courseImage in the Gamified Course Card", () => {
		let content = {
			courseType: "exam",
			wrapper: "carnival",
			courseImage: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
			date: {
				start_date: "2032-03-30T18:30:00.000Z",
				end_date: "2021-05-10T12:55:18.458Z",
			},
		};
		component.setProps({ content: content });
		component.find(BannerCard).simulate("click");
		expect(component.find(BannerCard).props().content.image).toBe("https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg");
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
		expect(component.find(BannerCard).props().content.image).toBe("assets/courses/carnival/play_backdrop.jpg");
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
		expect(component.find(BannerCard).props().content.image).toBe("default.jpeg");
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
		expect(component.find(BannerCard).props().content.image).toBe("assets/courses/carnival/play_backdrop.jpg");
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

	it("should show sequential course card in english", () => {
		component.setProps({ content: { sequential: true } });
		expect(component.find(".qui-course-card-name").text()).toBe("Sequential Course");
	});

	it("should show non sequential course card in english", () => {
		component.setProps({ content: { sequential: false } });
		expect(component.find(".qui-course-card-name").text()).toBe("Non Sequential Course");
	});

	it("should show sequential course card in hindi", () => {
		component.setProps({
			content: { sequential: true },
			withTranslation: {
				lang: "hi",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-course-card-name").text()).toBe("अनुक्रमिक पाठ्यक्रम");
	});

	it("should show non sequential course card in hindi", () => {
		component.setProps({
			content: { sequential: false },
			withTranslation: {
				lang: "hi",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
		expect(component.find(".qui-course-card-name").text()).toBe("गैर अनुक्रमिक पाठ्यक्रम");
	});

	it("should render correctly when translation lang is not matched and sequential is false", () => {
		component.setProps({
			content: { sequential: false },
			withTranslation: {
				lang: "mr",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when translation lang is not matched and sequential is true", () => {
		component.setProps({
			content: { sequential: true },
			withTranslation: {
				lang: "mr",
				tgt: "courseCard",
				dictionary: dictionary,
			},
		});
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when date is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2021-05-5T12:55:18.154Z",
					end_date: "2021-05-10T12:55:18.154Z",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render the suffix as 'st' when date of yyyy/mm/01 format is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2022-02-01",
					end_date: "2022-05-01",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render the suffix as 'nd' when date of yyyy/mm/02 format is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2022-02-02",
					end_date: "2022-05-02",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render the suffix as 'rd' when date of yyyy/mm/03 format is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2022-05-03",
					end_date: "2022-05-04",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render the suffix as 'th' when date of yyyy/mm/05 format is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2022-05-05",
					end_date: "2022-05-05",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render the suffix as 'st' when date of yyyy/mm/31 format is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "2022-05-31",
					end_date: "2022-05-31",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});

	it("should render correctly when invalid date is provided in content props", () => {
		component.setProps({
			content: {
				date: {
					start_date: "abc",
					end_date: "xyz",
				}
			}
		});
		expect(component.exists()).toBe(true);
	});
});
