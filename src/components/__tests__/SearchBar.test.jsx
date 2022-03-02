//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import SearchBar from '../SearchBar/SearchBar.react';

describe("SearchBar", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            SearchBar: {
                placeHolder: "खोजें...",
            }
        },
    });


    beforeEach(() => {
        jest.resetAllMocks();

        component = shallow(<SearchBar
            asSize="normal"
            asFloated="inline"
            withColor={null}
            withIcon={null}
            withAnimation={null}
            withTranslation={null}
            isHidden={false}
            isDisabled={false}
            isClosed={null}
            isFluid={null}
            onClick={() => console.log('test')}
            placeHolder="Search..."
        />);
    })

    it("should render correctly without throwing an error if icon props is false", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withTranslation Props", () => {
        expect(component.find("input").props().placeholder).toBe("Search...")
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "SearchBar",
                dictionary: dictionary,
            },
        });
        expect(component.find("input").props().placeholder).toBe("खोजें...");
    });


    it("should render closed Search Bar", () => {
        component.setProps({ isClosed: true });
        component.setProps({ isFluid: false });

        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        expect(searchBarChildContainer.props().className).toBe('search-bar-child-container search-bar-child-container-closed');
        expect(inputBox.props().className).toBe('search-bar-input-field search-bar-input-closed');
        expect(button.props().className).toBe('search-bar-icon search-bar-icon-closed');
    });

    it("should render opened Search Bar when clicked", () => {
        component.setProps({ isClosed: false });

        let searchBarContainer = component.find("div").at(2);
        let searchBarChildContainer = component.find("div").at(3);
        let inputBox = component.find("input");
        let button = component.find("button");

        searchBarContainer.simulate('click')
        expect(searchBarChildContainer.props().className).toBe("search-bar-child-container undefined");
        expect(inputBox.props().className).toBe("search-bar-input-field undefined");
        expect(button.props().className).toBe("search-bar-icon undefined");
    });
});