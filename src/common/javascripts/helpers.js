import _ from "lodash";
import defaultImage from "../../assets/default.jpeg";

export function getQuommons(props, component) {
    let parentArray = [`qui-${component}`],
        childArray = [""];

    if (props.massive) childArray.push(`size-massive`);
    else if (props.huge) childArray.push(`size-huge`);
    else if (props.big) childArray.push(`size-big`);
    else if (props.normal) childArray.push(`size-normal`);
    else if (props.small) childArray.push(`size-small`);
    else if (props.tiny) childArray.push(`size-tiny`);
    else if (props.asSize) childArray.push(`size-${props.asSize}`);

    if (props.compact) childArray.push(`pad-compact`);
    else if (props.fitted) childArray.push(`pad-fitted`);
    else if (props.relaxed) childArray.push(`pad-relaxed`);
    else if (props.padded) childArray.push(`pad-padded`);
    else if (props.asPadded) childArray.push(`pad-${props.asPadded}`);

    if (props.spaced) parentArray.push(`margin-spaced`);
    else if (props.snug) parentArray.push(`margin-snug`);
    else if (props.normal) parentArray.push(`margin-normal`);
    else if (props.asMargin) parentArray.push(`margin-${props.asMargin}`);

    if (props.gutter) parentArray.push(`gutter-down`);

    if (props["center-aligned"] || props["center-align"])
        childArray.push(`center-aligned`);
    else if (props["left-aligned"] || props["left-align"])
        childArray.push(`left-aligned`);
    else if (props["right-aligned"] || props["right-align"])
        childArray.push(`right-aligned`);
    else if (props.asAligned) childArray.push(`${props.asAligned}-aligned`);

    if (props["float-left"]) parentArray.push(`float-left`);
    else if (props["float-right"]) parentArray.push(`float-right`);
    else if (props["inline"]) parentArray.push(`float-inline`);
    else if (props["float-none"]) parentArray.push(`float-none`);
    else if (props.asFloated) parentArray.push(`float-${props.asFloated}`);

    if (props.primary) {
        childArray.push(`variant-primary`);
        childArray.push(`variant-primary-text`);
    } else if (props.secondary) {
        childArray.push(`variant-secondary`);
        childArray.push(`variant-secondary-text`);
    } else if (props.positive) {
        childArray.push(`variant-positive`);
        childArray.push(`variant-positive-text`);
    } else if (props.warning) {
        childArray.push(`variant-warning`);
        childArray.push(`variant-warning-text`);
    } else if (props.negative) {
        childArray.push(`variant-negative`);
        childArray.push(`variant-negative-text`);
    } else if (props.info) {
        childArray.push(`variant-info`);
        childArray.push(`variant-info-text`);
    } else if (props.asVariant) {
        childArray.push(`variant-${props.asVariant}`);
        childArray.push(`variant-${props.asVariant}-text`);
    }

    if (props.isHidden || props.hidden) parentArray.push("is-hidden");
    if (props.isDisabled || props.disabled) parentArray.push("is-disabled");
    if (props.isFluid || props.fluid) {
        parentArray.push("is-fluid");
        childArray.push("is-fluid");
    }
    if (props.isLoading || props.loading) parentArray.push("is-loading");

    return {
        parentClasses: parentArray.join(" "),
        childClasses: childArray.join(" "),
    };
}

export function getTranslation(tObj, key) {
    let dict = tObj && tObj.dictionary ? JSON.parse(tObj.dictionary) : null;
    let tgt = key ? key : tObj && tObj.tgt ? tObj.tgt : null;
    return dict && tgt && dict[tObj.lang] && dict[tObj.lang][tgt]
        ? dict[tObj.lang][tgt]
        : null;
}

export function getAnimation(props) {
    let animObj = props.withAnimation || {
        animation:'static',
        duration:null,
        delay:null
    };
    if (props.zoom) animObj.animation = "zoom";
    else if (props.fade) animObj.animation = "fade";
    else if (props.slideDown) animObj.animation = "slideDown";
    else if (props.slideUp) animObj.animation = "slideUp";
    else if (props.slideLeft) animObj.animation = "slideLeft";
    else if (props.slideRight) animObj.animation = "slideRight";
    else if (props.collapse) animObj.animation = "collapse";

    const initialVariants = {
        zoom: {
            scale: 0,
        },
        fade: {
            opacity: 0,
        },
        slideRight: {
            opacity: 0,
            x: -80,
        },
        slideDown: {
            opacity: 0,
            y: -40,
        },
        slideUp: {
            opacity: 0,
            y: 40,
        },
        slideLeft: {
            opacity: 0,
            x: 80,
        },
        collapse: {
            scale: 5,
            opacity: 0,
        },
        static: {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
        }
    };
    let transitionObj = {
        duration: animObj?.duration,
        delay: animObj?.delay,
    };
    const animationVariants = {
        zoom: {
            scale: 1,
            transition: transitionObj,
        },
        fade: {
            opacity: 1,
            transition: transitionObj,
        },
        slideRight: {
            x: 0,
            opacity: 1,
            transition: transitionObj,
        },
        slideDown: {
            y: 0,
            opacity: 1,
            transition: transitionObj,
        },
        slideUp: {
            y: 0,
            opacity: 1,
            transition: transitionObj,
        },
        slideLeft: {
            x: 0,
            opacity: 1,
            transition: transitionObj,
        },
        collapse: {
            scale: 1,
            opacity: 1,
            transition: transitionObj,
        },
        static: {
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
            transition: transitionObj,
        }
    };
    return {
        from: initialVariants[animObj.animation],
        to: animationVariants[animObj.animation],
    };
}

export const resolveImage = (srcImg, imgLibrary) => {
    if (
        srcImg === undefined ||
        srcImg === null ||
        srcImg === "" ||
        srcImg === " "
    )
        return defaultImage;
    else {
        let img = Array.isArray(srcImg)
            ? srcImg[0]
            : typeof srcImg === "object"
            ? srcImg["image"]
            : srcImg;
        let libraryImg = _.find(imgLibrary, { id: img });

        if (libraryImg != null) {
            return libraryImg.image;
        } else {
            return img.indexOf("data:") !== -1 ||
                img.indexOf("assets/images/") !== -1
                ? img
                : img.indexOf(".jpg") !== -1 ||
                  img.indexOf(".JPG") !== -1 ||
                  img.indexOf(".jpeg") !== -1 ||
                  img.indexOf(".JPEG") !== -1 ||
                  img.indexOf(".gif") !== -1 ||
                  img.indexOf(".GIF") !== -1 ||
                  img.indexOf(".png") !== -1 ||
                  img.indexOf(".PNG") !== -1 ||
                  img.indexOf(".svg") !== -1
                ? defaultImage
                : defaultImage;
        }
    }
};
