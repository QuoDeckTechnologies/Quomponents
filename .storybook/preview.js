import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './globals.scss'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
        default: "light",
        values: [
            {
                name: "dark",
                value: "#454545",
            },
            {
                name: "light",
                value: "#f8f8f8",
            },
        ],
    },
    controls: {
        matchers: {
            // color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        inlineStories: false,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};
