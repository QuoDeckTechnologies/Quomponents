import React, { useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard.react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from "@mui/material/Backdrop";

export default {
	title: "Design System/CourseCard/CourseCard",
	component: CourseCard,
	argTypes: {
		content: {
			published: false,
			courseType: "",
			wrapper: "",
			tags: [],
			courseName: "",
			description: "",
			courseImage: "",
			points: "",
			identifier: "",
			date: {
				start_date: "",
				end_date: "",
			},
			sequential: false,
		},
		withAnimation: {
			table: {
				courseType: "with-Params",
				defaultValue: {
					animation: "",
					duration: 0,
					delay: 0,
				},
			},
		},
		asFloated: {
			control: "select",
			options: ["left", "right", "inline"],
			table: {
				category: "as-Flags",
			},
		},
		isHidden: {
			table: {
				courseType: "is-Toggles",
				defaultValue: false,
			},
		},
		isDisabled: {
			table: {
				courseType: "is-Toggles",
				defaultValue: false,
			},
		},
		arcFn: {
			table: {
				courseType: "Events",
				defaultValue: null,
			},
		},
		onClick: {
			table: {
				courseType: "Events",
				defaultValue: null,
			},
		},
	},
	decorators: [
		(story) => (
			<div
				style={{
					width: "100%",
					textAlign: "center",
					fontSize: "1.25em",
				}}
			>
				{story()}
			</div>
		),
	],
	parameters: {
		componentSubtitle: "Displays a basic button for general-purpose use",
		a11y: { disable: true },
		docs: { iframeHeight: 200 },
	},
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CourseCard {...args} />;
export const Default = Template.bind({});
Default.args = {
	content: {
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
	},
	withAnimation: {
		animation: "zoom",
		duration: 0.5,
		delay: 0,
	},
	asFloated: "inline",
	isDisabled: false,
	isHidden: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<CourseCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
		},
	},
};

// -------------------------------------------------------------
// Story with Menu Button
// -------------------------------------------------------------
const ExampleTemplate = (args) => {
	const [openModalOne, setOpenModalOne] = useState(false);
	const [openModalTwo, setOpenModalTwo] = useState(false);
	return (
		<div>
			<CourseCard
				arcFn={() => setOpenModalOne(true)}
				content={{
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
				}}
			/>
			<div
				style={{
					position: "absolute",
					flexDirection: "column",
					display: "flex",
				}}
			>
				<Backdrop
					open={openModalOne}
					sx={{ zIndex: 10 }}
					onClick={() => setOpenModalOne(false)}
				/>
				<Backdrop
					open={openModalTwo}
					sx={{ zIndex: 21 }}
					onClick={() => setOpenModalTwo(false)}
				/>
				{openModalOne && (
					<div
						className="qui-first-imported-component"
						style={{
							position: "absolute",
							zIndex: 20,
							left: "0",
							marginTop: "-10em",
						}}
					>
						<div
							className="qui-test-component-element"
							style={{
								width: "10em",
								backgroundColor: "#ffbf00",
								marginBottom: "0.1em",
								cursor: "pointer",
							}}
						>
							Heading
						</div>
						<a href="http://localhost:6006/?path=/story/design-system-accentline-accentline--default">
							<div
								className="qui-test-component-element"
								style={{
									width: "10em",
									backgroundColor: "#454545",
									color: "white",
									marginBottom: "0.1em",
									cursor: "pointer",
								}}
							>
								Redirects
							</div>
						</a>
						<div
							className="qui-test-component-element"
							style={{
								width: "10em",
								backgroundColor: "#454545",
								color: "white",
								cursor: "pointer",
							}}
							onClick={() => setOpenModalTwo(true)}
						>
							Opens a modal
						</div>
						<div
							className="qui-test-component-element"
							style={{
								width: "10em",
								backgroundColor: "#d97575",
								marginTop: "0.1em",
								cursor: "pointer",
							}}
							onClick={() => setOpenModalOne(false)}
						>
							Delete
						</div>
					</div>
				)}
				{openModalTwo && (
					<div
						className="qui qui-second-imported-component"
						style={{
							width: "50%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							zIndex: 22,
							background: "white",
							padding: "1em",
							marginTop: "-20em",
						}}
					>
						<h1>Testing Second Modal</h1>
						<ArcMenu
							type="close"
							arcIcon="close"
							position="top-right"
							onClick={() => setOpenModalTwo(false)}
						/>
						<button onClick={(e) => args.onClick(e)}>Click</button>
					</div>
				)}
			</div>
		</div>
	);
};
export const MenuButtonUseCase = ExampleTemplate.bind({});
MenuButtonUseCase.parameters = {
	docs: {
		source: {
			code: `<ArcMenu {...${JSON.stringify(
				MenuButtonUseCase.args,
				null,
				2
			)}}/>`,
		},
	},
};

export const FullScreen = (args) => {
	const baseObj1 = {
		...Object.assign({}, Default.args, args, {}),
	};
	return (
		<div style={{ width: "500px" }}>
			<CourseCard {...Object.assign({}, baseObj1, {})} />
		</div>
	);
};
