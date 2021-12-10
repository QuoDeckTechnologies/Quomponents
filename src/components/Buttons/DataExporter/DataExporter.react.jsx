
import PropTypes from "prop-types";
import Button from "../Button/Button.react";

DataExporter.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    we can export file or json data using this component.
    To export data select type as "json" and pass data in array of object format to content field.
    To export file using url select type as "file" and pass file url to content field.
    This is required field.
    */
    data: PropTypes.shape({
        type: PropTypes.oneOf(["json", "file"]).isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]).isRequired
    }).isRequired,
    /**
    Button Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon button 
    */
    isCircular: PropTypes.bool,

    // Quommon props
    //=======================================

    /**
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    /**
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to define the entry animation of the component
    */
    withAnimation: PropTypes.shape({
        animation: PropTypes.oneOf([
            "zoom",
            "collapse",
            "fade",
            "slideDown",
            "slideUp",
            "slideLeft",
            "slideRight",
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),

    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    Use to toggle a loading state for the component
    */
    isLoading: PropTypes.bool,
    /**
    Use this function to perform action once data is exported
    */
    onDone: PropTypes.func,
};

DataExporter.defaultProps = {
    // Component Specific props
    //=======================================
    data: { type: "json", content: [] },
    asEmphasis: "contained",
    isCircular: false,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isLoading: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/

export default function DataExporter(props) {

    function exportData() {
        let { data } = props;
        if (data) {
            let url = data.content;
            if (data.type === "json" && data.content.length > 0) {
                let content = data.content;
                let replacer = (key, value) => (value === null ? "" : value);
                let header = Object.keys(content[0]);
                let csv = content.map((row) =>
                    header
                        .map((fieldName) =>
                            JSON.stringify(row[fieldName], replacer)
                        )
                        .join(",")
                );
                csv.unshift(header.join(","));
                csv = csv.join("\r\n");
                url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
            }

            let hiddenElement = document.createElement("a");
            hiddenElement.href = url;
            hiddenElement.target = "_blank";
            hiddenElement.download = `exported_data_${Date.now()}.csv`;
            hiddenElement.click();
            props.onDone();
        }
    }

    return (<Button
        {...props}
        onClick={exportData}
    />);
}