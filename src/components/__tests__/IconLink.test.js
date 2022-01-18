//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
import renderer,{ act } from 'react-test-renderer'
// import TestRenderer from 'react-test-renderer'
//--------------------------------------
// Import Components
// -------------------------------------
import IconLink from '../Buttons/IconLink/IconLink.react'


describe('IconLink',()=>{
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    
    let component;
    
    const dictionary = JSON.stringify({
        hi: {
            loading: "बस एक मिनट...",
            button: { text: "",label: "होम" },
        },
    });
    
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <IconLink
            asEmphasis = "contained"
            isCircular = {false}
            asVariant = "primary"
            asSize = "normal"
            asPadded = "normal"
            asFloated = "none"
            asAligned = "center"
            withColor = {null}
            withIcon = {null}
            withLabel = {null}
            withAnimation = {null}
            withTranslation = {null}
            isHidden = {false}
            isDisabled = {false}
            isFluid = {false}
            onClick = {()=>console.log('IconLink Testing')}
            />
        );
    });



    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render with withColor prop ",
        () => {
            component.setProps({
                withColor: {
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with isCircular prop",
        () => {
            component.setProps({
                isCircular : true
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withTranslation prop",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "",
                    dictionary: dictionary,
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withTranslation prop",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "button",
                    dictionary: dictionary,
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withLabel prop",
        () => {
            component.setProps({
                withLabel: {
                    format: "caption",
                    content: "Content",
                    textColor : 'black'
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with isCircular prop",
        () => {
            component.setProps({
                isCircular: true,
                content : '',
                withIcon : {
                    icon : 'fas fa-desktop'
                }
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withColor prop when hovered",
        () => {
            const component = renderer.create(<IconLink 
                withColor = {{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={()=>console.log('testing')}
                />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor prop and asEmphasis set to `text` when hovered",
        () => {
            const component = renderer.create(<IconLink 
                asEmphasis = "text"
                withColor = {{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={()=>console.log('testing')}
                />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor prop and asEmphasis set to `outlined` when hovered",
        () => {
            const component = renderer.create(<IconLink 
                asEmphasis = "outlined"
                withColor = {{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={()=>console.log('testing')}
                />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor prop and asEmphasis set to `contained` when hovered",
        () => {
            const component = renderer.create(<IconLink 
                asEmphasis = "contained"
                withColor = {{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={()=>console.log('testing')}
                />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly when hovered or clicked",
        () => {
            const component = renderer.create(<IconLink onClick={()=>console.log('testing')} />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseDown()
                tree.props.onMouseUp()
            })
        });
    it("should render correctly when hovered",
        () => {
            const component = renderer.create(<IconLink onClick={()=>console.log('testing')} />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseLeave()
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly when hovered with translation",
        () => {
            const component = renderer.create(<IconLink 
                withIcon={{
                    icon: "fas fa-desktop"
                }}
                onClick={()=>console.log('testing')} 
                />)
            const tree = component.toJSON()
            act(()=>{
                tree.props.onMouseDown()
            })
        });
})