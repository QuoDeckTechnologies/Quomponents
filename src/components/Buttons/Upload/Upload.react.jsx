// Import npm packages
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.react";
Upload.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

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

    /**
    Use to define the file type which is supported to upload.
  */
    withFileType: PropTypes.shape({
        type: PropTypes.oneOf([
            "video/*",
            "image/*",
            ".mp3",
            ".docx",
            ".xls",
            ".xlsx",
            ".zip",
            ".qdf",
            ".pdf",
            ""
        ]),
        capture: PropTypes.string
    }),

    /**
     Use to toggle a multiple to upload more than one files
   */
    isMultiple: PropTypes.bool,

    //=====================================
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
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Upload.defaultProps = {
    // Component Specific props
    //=======================================
    asEmphasis: "contained",
    isCircular: false,
    withFileType: null,
    isMultiple: false,

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

export default function Upload(props) {
    const fileInputRef = useRef();

    function handleChange(e) {
        // get the files
        let files = e.target.files;

        if (files[0].type.match('image.*')
            || files[0].type.match('video.*')
            || files[0].type.match('audio.*')
            || files[0].type.match('application.*')
        ) {
            // Process each file
            var allFiles = [];
            for (var i = 0; i < files.length; i++) {
                let file = files[i];

                // Make new FileReader
                let reader = new FileReader();

                // Convert the file to base64 text
                reader.readAsDataURL(file);

                // on reader load somthing...
                reader.onload = () => {
                    // Make a fileInfo Object
                    let fileInfo = {
                        name: file.name,
                        type: file.type,
                        size: Math.round(file.size / 1000) + " kB",
                        base64: reader.result,
                        file: file
                    };

                    // Push it to the state
                    allFiles.push(fileInfo);

                    // If all files have been processed
                    if (allFiles.length === files.length) {
                        // Apply Callback function
                        if (props.isMultiple) props.onClick(allFiles);
                        else props.onClick(allFiles[0]);
                    }
                };

            }
        }
        else {
            let file = e.target.files[0]
            props.onClick(file);
        }
    }


    function uploadFile() {
        return fileInputRef.current.click()
    }

    // ========================= Render Function =================================

    return (
        <div>
            <input
                ref={fileInputRef}
                type="file"
                onChange={handleChange}
                multiple={props.isMultiple}
                accept={props.withFileType?.type}
                capture={props.withFileType?.capture}
                hidden
            />
            <Button
                {...props}
                onClick={uploadFile}
            />
        </div>
    );
}