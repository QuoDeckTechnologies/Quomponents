//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import SquareCarousel from '../Carousel/SquareCarousel/SquareCarousel.react'

describe('SquareCarousel', () => {

    
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareCarousel
                content={null}
                withAnimation="slideUp"
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

})