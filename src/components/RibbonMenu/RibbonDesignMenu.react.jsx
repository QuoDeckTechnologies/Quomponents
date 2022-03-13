import React from "react";

import CustomColor from "../CustomColor/CustomColor.react";
import ColorSwatch from "../ColorSwatch/ColorSwatch.react"

export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-design-container`}>

            <div className={`palete-container`}>
                <div className={`swatch-container`}>
                    <ColorSwatch asSize="small"
                        withColor={{
                            primaryColor: "#F88A8A",
                            accentColor: "#EF2929",
                            secondaryColor: "#685555",
                            pageColor: "#FFFFFF",
                        }}
                    />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#E58E72",
                        accentColor: "#EF8829",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#F8CC8A",
                        accentColor: "#EF8829",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#55771E",
                        accentColor: "#274708",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#87D9AD",
                        accentColor: "#87D9AD",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#8AF8F8",
                        accentColor: "#29B4EF",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#8AB6F8",
                        accentColor: "#293DEF",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#9A8AF8",
                        accentColor: "#4529EF",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#CE8AF8",
                        accentColor: "#8029EF",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#D955EF",
                        accentColor: "#B029EF",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#6B3894",
                        accentColor: "#6B3894",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#211F8A",
                        accentColor: "#22335F",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#D41717",
                        accentColor: "#D41717",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                    <ColorSwatch asSize="small" withColor={{

                        primaryColor: "#9E1212",
                        accentColor: "#ED8B8B",
                        secondaryColor: "#685555",
                    }
                    } />
                    <ColorSwatch asSize="small" withColor={{
                        primaryColor: "#E5DADA",
                        accentColor: "#534F4F",
                        secondaryColor: "#685555",
                        pageColor: "#FFFFFF",
                    }} />
                </div>
                <div className={`label`}>
                    Pallete
                </div>
            </div>
            <div className={`custom-color-container`}>
                <CustomColor
                    {...props}
                    withAnimation={{
                        animation: "slideRight",
                        duration: 0.8,
                        delay: 0
                    }}
                    asSize="tiny"
                    asPadded="fitted"
                    content={{ color: "#fff", title: "Page Color" }} />
                <CustomColor {...props}
                    withAnimation={{
                        animation: "slideLeft",
                        duration: 0.8,
                        delay: 0
                    }}
                    asSize="tiny"
                    asPadded="fitted"
                    content={{ color: "#994040", title: "Primary Color" }} />
                <CustomColor  {...props}
                    withAnimation={{
                        animation: "slideRight",
                        duration: 0.8,
                        delay: 0
                    }}
                    asSize="tiny"
                    asPadded="fitted"
                    content={{ color: "#F4AEAE", title: "Accent Color" }} />
                <CustomColor  {...props}
                    withAnimation={{
                        animation: "slideLeft",
                        duration: 0.8,
                        delay: 0
                    }}
                    asSize="tiny"
                    asPadded="fitted"
                    content={{ color: "#685555", title: "Secondary Color" }} />
            </div>
            <div className={`slide-background`}>

            </div>
            <div className={`slide-background`}>

            </div>
        </div>
    );
}