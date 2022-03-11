//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import SquareWrapperCarousel from '../Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react'
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
        ...originReact,
        useRef: mUseRef,
    };
});
describe('SquareWrapperCarousel', () => {
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
        }
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareWrapperCarousel
                content={content}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    // it('should pass', () => {
    //     let slickPrev = jest.fn()
    //     const mRef = { current: slickPrev };
    //     useRef.mockReturnValueOnce(mRef);
    //     const wrapper = shallow(<SquareWrapperCarousel onClick={()=> console.log("Testing SlickPrev")}/>);
    //     let slickDiv = wrapper.find("div").at(4)        
    // });   
    it('should pass', () => {
        const wrapper = shallow(<SquareWrapperCarousel onClick={()=> console.log("Testing SlickPrev")}/>);
        let slickPrevDiv = wrapper.find(".qui-slick-prev").simulate("click",{current: {slickPrev:""}})     
    });  
    
    it('should pass', () => {
        const wrapper = shallow(<SquareWrapperCarousel onClick={()=> console.log("Testing SlickPrev")}/>);
        let slickNextDiv = wrapper.find(".qui-slick-next").simulate("click",{current: {slickNext:""}})     
    });  
    
})