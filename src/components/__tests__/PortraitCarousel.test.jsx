//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import PortraitCarousel from '../Carousel/PortraitCarousel/PortraitCarousel.react'

describe('PortraitCarousel', () => {
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
            <PortraitCarousel
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
    // it("should render correctly without throwing error , with withColor prop",
    //     () => {
    //         let divTag = component.find("div").at(3)
    //         expect(divTag.props().style.backgroundColor).toBe("green")
    //     });
    it('should pass', () => {
        const wrapper = shallow(<PortraitCarousel onClick={() => console.log("Testing SlickPrev")} />);
        let slickPrevDiv = wrapper.find(".qui-slick-prev").simulate("click", { current: { slickPrev: "" } })
    });

    it('should pass', () => {
        const wrapper = shallow(<PortraitCarousel onClick={() => console.log("Testing SlickPrev")} />);
        let slickNextDiv = wrapper.find(".qui-slick-next").simulate("click", { current: { slickNext: "" } })
    });
})