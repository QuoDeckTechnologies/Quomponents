import React, { useState } from "react";
import _ from "lodash";
import CustomColor from "../CustomColor/CustomColor.react";
import ColorSwatch from "../ColorSwatch/ColorSwatch.react"

import { PaletteSet } from "./PalleteSelect.react";

export default function RibbonDesignMenu(props) {
    const [selectedColor, setColor] = useState();
    const select = (colors) => {
        setColor(colors)
    }
    console.log(selectedColor?.colors)
    // ========================= Render Function =================================

    return (

        <div className={`ribbon-menu-design-container`}>
            <div className="color-pallete-section">
                <div className="color-pallete-section-child-container">

                    {_.map(PaletteSet, (colors, index) => {
                        return (
                            <div className="color-pallete-section-child"
                                onClick={() => select(colors)}
                            >
                                <ColorSwatch
                                    asSize="small"
                                    withColor={{
                                        primaryColor: colors.colors[0],
                                        accentColor: colors.colors[1],
                                        secondaryColor: colors.colors[2],
                                        pageColor: colors.colors[3],
                                    }}
                                />
                            </div>
                        )
                    })}

                </div>
                <div className="label-file">Settings</div>
            </div>
            <div className={`custom-color-container`}>
                <CustomColor
                    asSize="tiny"
                    content={{ color: selectedColor?.colors[3], title: "Page Color" }} />
                <CustomColor {...props}
                    asSize="tiny"
                    content={{ color: selectedColor?.colors[0], title: "Primary Color" }} />
                <CustomColor  {...props}
                    asSize="tiny"
                    content={{ color: selectedColor?.colors[1], title: "Accent Color" }} />
                <CustomColor  {...props}
                    asSize="tiny"
                    content={{ color: selectedColor?.colors[2], title: "Secondary Color" }} />
            </div>
            <div className="parent-vertical-line"></div>
            <div className="overlay-background-section">
                <div className="overlay-background-section-child-container">
                    <div className="overlay-background-section-child">
                        <div className="set-remove"></div>
                        <div className="label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="label-file">Slide Background</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="slide-background-section">
                <div className="slide-background-section-child-container">
                    <div className="slide-background-section-child">
                        <div className="set-remove"></div>
                        <div className="label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="label-file">Overlay Background</div>
            </div>
        </div>
    );
}