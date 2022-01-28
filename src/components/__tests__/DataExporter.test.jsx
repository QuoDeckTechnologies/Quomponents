//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import DataExporter from "../Buttons/DataExporter/DataExporter.react";

describe("DataExporter", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<DataExporter
            content = "Export"
            label="Export"
            iconBtn={false}
            data = {{
                type: "json",
                content: [{
                    "published": false,
                    "tags": [],
                    "_id": "5a22f2",
                    "name": "MERN",
                    "category": "course",
                    "summary": "",
                    "identifier": "9La_ApGyc",
                    "owner": "5a1b6f",
                    "createdAt": "2021-12-01T09:14:55.642Z",
                    "id": "5a22f2"
                },
                {
                    "published": false,
                    "tags": [],
                    "_id": "5a8db2",
                    "name": "Test",
                    "category": "course",
                    "summary": "",
                    "identifier": "PVSa42HZi",
                    "owner": "5a6b0c",
                    "createdAt": "2021-12-09T07:29:13.056Z",
                    "id": "5a8db2"
                }]
            }}
            onDone={()=>{}}
        />);
    });

    it("it should render correctly",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("it should render correctly when clicked",
        () => {
            component.simulate('click')
        });
});