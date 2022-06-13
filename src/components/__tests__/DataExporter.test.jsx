//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import DataExporter from "../DataExporter/DataExporter.react";

describe("DataExporter", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let mockData = [{ id: 1, name: "Test User1" }, { id: 2, name: "Test User2" }];

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<DataExporter
            label="Export"
            iconBtn={false}
            data={mockData}
        />);
    });

    it("it should render correctly without throwing an error if iconBtn props is false",
        () => {
            component.setProps({ iconBtn: false });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly without throwing an error if iconBtn props is true",
        () => {
            component.setProps({ iconBtn: true });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly without throwing an error if iconBtn props is undefined ",
        () => {
            component.setProps({ iconBtn: undefined });
            expect(component.exists()).toBe(true);
        });

    it("should render Default button if iconBtn props is false ",
        () => {
            component.setProps({ iconBtn: false });
            expect(component.find("#export-btn").exists()).toBe(true);
        });

    it("should render Icon button if iconBtn props is true ",
        () => {
            component.setProps({ iconBtn: true });
            expect(component.find("#export-icon-btn").exists()).toBe(true);
        });
});