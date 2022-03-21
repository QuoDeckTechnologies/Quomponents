import React, { useState }  from "react";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../../common/stylesheets/overrule.scss";
import CustomColor from "../../../CustomColor/CustomColor.react";
import ColorSwatch from "../../../ColorSwatch/ColorSwatch.react"

import { PaletteSet } from "../../PalleteSelect.react";
export default function PalleteThemeSection(props) {
    const [selectedColor, setColor] = useState();
    const select = (colors) => {
        setColor(colors)
    }
    // ========================= Render Function =================================

    return (
        <div className={`color-pallete-custom-color-section-container`}>
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
        </div>
    )
}