// src/components/Button.stories.js
import React from "react";

import ImageCarousel from "../components/ImageCarousel/ImageCarousel.react";

export default {
    title: "Design System/Carousel/ImageCarousel",
    component: ImageCarousel,
    argTypes: {},
};

const Template = (args) => <ImageCarousel {...args} />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { exclude: [] },
};
Default.args = {
    carouselItems: [
        "/assets/images/defaults/default-carousel-1.jpg",
        "/assets/images/defaults/default-carousel-2.jpg",
        "/assets/images/defaults/default-carousel-3.jpg",
    ],
};
