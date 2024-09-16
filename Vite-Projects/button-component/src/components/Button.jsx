import React, { useState } from "react";
import {
    BUTTON_SIZES,
    BUTTON_STATES,
    BUTTON_VARIANTS,
    ICONS,
} from "../lib/constants";

const Button = (props) => {
    React.useEffect(() => {
        setVariant(props.variant ?? BUTTON_VARIANTS.SECONDARY);
        setBtnState(props.btnState ?? BUTTON_STATES.NORMAL);
        setSize(props.size ?? BUTTON_SIZES.MEDIUM);
        setIcons(props.icons ?? ICONS.NONE);
        setTabIndex(props.tabIndex ?? null);
    }, []);

    // React.useEffect(() => {
    //     setBtnState(BUTTON_STATES.FOCUS);
    // }, [props.isFocused]);

    const [btnState, setBtnState] = React.useState(null);
    const [variant, setVariant] = React.useState(null);
    const [size, setSize] = React.useState(null);
    const [icons, setIcons] = React.useState(null);
    const [tabIndex, setTabIndex] = React.useState(null);
    // const [isHoveredOver, setIsHoveredOver] = React.useState("");

    const handleOnMouseEnter = () => {
        if (btnState === BUTTON_STATES.NORMAL) {
            setBtnState(BUTTON_STATES.HOVERED);
            // setIsHoveredOver("hoveredOver");
        }
    };

    const handleOnMouseLeave = () => {
        // if (isHoveredOver) {
        //     setIsHoveredOver("");
        // }

        if(btnState === BUTTON_STATES.FOCUS)
            return

        setBtnState(BUTTON_STATES.NORMAL);
    };

    const handleOnClick = () => {
        if (btnState === BUTTON_STATES.FOCUS) {
            setBtnState(BUTTON_STATES.NORMAL);
            return
        }

        if (btnState !== BUTTON_STATES.DISABLED) {
            setBtnState(BUTTON_STATES.FOCUS);
        }
    };

    return (
        <button
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            tabIndex={`${tabIndex}`}
            onClick={handleOnClick}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className={`base-btn btn${btnState} ${variant} ${size} icon-${icons}`}
        >
            Button
        </button>
    );
};

export default Button;
