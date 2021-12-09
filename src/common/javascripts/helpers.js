export function getQuommons(props) {
    let parentArray = [""],
        childArray = [""];

    if (props.asSize) childArray.push(`size-${props.asSize}`);
    if (props.asPadded) childArray.push(`pad-${props.asPadded}`);
    if (props.asAligned) childArray.push(`${props.asAligned}-aligned`);
    if (props.asFloated) parentArray.push(`float-${props.asFloated}`);
    if (props.asVariant) childArray.push(`variant-${props.asVariant}`);

    if (props.isHidden) parentArray.push("is-hidden");
    if (props.isDisabled) parentArray.push("is-disabled");
    if (props.isFluid) {
        parentArray.push("is-fluid");
        childArray.push("is-fluid");
    }
    if (props.isLoading) parentArray.push("is-loading");

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

export function getAnimation(animObj) {
    if (animObj?.animation) {
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
        };
        return {
            from: initialVariants[animObj.animation],
            to: animationVariants[animObj.animation],
        };
    } else return { from: {}, to: {} };
}
