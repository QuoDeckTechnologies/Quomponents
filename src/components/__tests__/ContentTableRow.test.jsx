//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import ContentTableRow from '../ContentTableRow/ContentTableRow.react'

describe("ContentTableRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<ContentTableRow
            content = {{
                fileName : 'dummy file-name.pdf'
            }}
            withAnimation = {null}
            isDisabled = {false}
            isHidden = {false}
            onClick = {()=>{}}
        />);
    })

    it("it should render correctly without throwing an error",() => {
        expect(component.exists()).toBe(true);
    });
    it("it should render correctly without throwing an error when zip file is uploaded",() => {
        let component = mount(<ContentTableRow content={{fileName:'dummyfile-name.zip'}} onClick={()=>{}}/>)
        expect(component.exists()).toBe(true);
    });
    it("it should render correctly without throwing an error when qdf file is uploaded",() => {
        let component = mount(<ContentTableRow content={{fileName:'dummyfile-name.qdf'}} onClick={()=>{}}/>)
        expect(component.exists()).toBe(true);
    });
    it("it should render correctly without throwing an error when other extention file is uploaded",() => {
        let component = mount(<ContentTableRow content={{fileName:'dummyfile-name'}} onClick={()=>{}}/>)
        expect(component.exists()).toBe(true);
    });
    it("it should render correctly without throwing an error when clicked on checkbox and menu button",() => {
        component.find('.qui-content-checkbox').simulate('click')
        component.find('.qui-content-menu').simulate('click')
    });
    it("it should render correctly without throwing an error when input is provided",() => {
        component.find('.qui-content-input').simulate('change',{
            target : { value : 'Editted file name' }
        })
    });
});