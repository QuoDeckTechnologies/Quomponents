import React from "react";
import _ from "lodash";
import CustomColor from "../CustomColor/CustomColor.react";
import ColorSwatch from "../ColorSwatch/ColorSwatch.react"

import { PaletteSet } from "./PalleteSelect.react";

export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-design-container`}>
            <div className="color-pallete-section">
                <div className="color-pallete-section-child-container">
                    <div className="color-pallete-section-child">
                        {_.map(PaletteSet, (colors, index) => {
                            return (
                                <ColorSwatch
                                    asSize="small"
                                    withColor={{
                                        primaryColor: colors.colors[0],
                                        accentColor: colors.colors[1],
                                        secondaryColor: colors.colors[2],
                                        pageColor: colors.colors[3],
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="label-file">Settings</div>
            </div>
            <div className={`custom-color-container`}>
                <CustomColor
                    asSize="tiny"
                    content={{ color: "#fff", title: "Page Color" }} />
                <CustomColor {...props}
                    asSize="tiny"
                    content={{ color: "#994040", title: "Primary Color" }} />
                <CustomColor  {...props}
                    asSize="tiny"
                    content={{ color: "#F4AEAE", title: "Accent Color" }} />
                <CustomColor  {...props}
                    asSize="tiny"
                    content={{ color: "#685555", title: "Secondary Color" }} />
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