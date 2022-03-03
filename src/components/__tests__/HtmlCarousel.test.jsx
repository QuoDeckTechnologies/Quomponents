//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import HtmlCarousel from '../Carousel/HtmlCarousel/HtmlCarousel.react'

describe('HtmlCarousel', () => {
    let component, content;
    let colors = {
        backgroundColor: "red",
        accentColor: "green",
        textColor: "blue",
    }
    content = [{
        image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
        tag: "new",
        header: "Component",
        content: "subtitle",
        selected: true,
        props: {
            asVariant: "primary",
            withColor: {
                backgroundColor: "red",
                accentColor: "green",
                textColor: "blue",
            }
        }
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <HtmlCarousel
                content={content}
                withColor={colors}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
})