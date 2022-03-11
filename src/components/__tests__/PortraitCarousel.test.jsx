//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow ,mount} from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import PortraitCarousel from '../Carousel/PortraitCarousel/PortraitCarousel.react'

describe('PortraitCarousel', () => {
    let component, content;
  
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
            <PortraitCarousel
                content={content}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it('should pass click on slickPrev', () => {
        const wrapper = shallow(<PortraitCarousel onClick={() => console.log("Testing SlickPrev")} />);
        let slickPrevDiv = wrapper.find(".qui-slick-prev").simulate("click", { current: { slickPrev: "" } })
    });

    it('should pass click on slickNext ', () => {
        const wrapper = shallow(<PortraitCarousel onClick={() => console.log("Testing SlickNext")} />);
        let slickNextDiv = wrapper.find(".qui-slick-next").simulate("click", { current: { slickNext: "" } })
    });
    it('should pass Conditional True ', () => {
        component.setProps({
            selected : true ,
        })
        console.log(component.find(".qui-checkbox").props().children.props.className)
        expect(component.find(".qui-checkbox").props().children.props.className).toBe("fas fa-check-square")
    });
    it('should pass Conditional false ', () => {
        component.setProps({
            selected : false ,
        })
        console.log(component.find(".qui-checkbox").props().children.props.className)
        expect(component.find(".qui-checkbox").props().children.props.className).toBe("fas fa-check-square")
    });

    test('should render and handle click event correctly when previousSibling exists', () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { slickPrev: "" } });
        const wrapper = shallow(<PortraitCarousel onClick={() => console.log("Testing SlickPrev")}/>);
        wrapper.find(".qui-slick-prev").simulate('click');
        expect(useRefSpy).toBeCalledTimes(1);
        expect(click).toBeCalledTimes(1);
      });
    

    // test('Given invalid details the form should display an error', () => {

    //     const login = mount(<PortraitCarousel selected={false}/>);
    //     expect(login.find('qui-checkbox').hasClass('far fa-square')).toBeTruthy();
      
    //   })
      
    // test('Given invalid details the form should display an error', () => {

    //     const login = mount(<PortraitCarousel selected={true}/>);
    //     expect(login.find('qui-checkbox').hasClass('fas fa-check-square')).toBeTruthy();
      
    //   })
      
})