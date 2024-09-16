import React from "react";
import Button from "./Button";

const ButtonWrapper = (props) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleOnFocus = (e) => {
        console.log(e);
        setIsFocused(!!e.target);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="container">
            <Button
                {...props}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />
        </div>
    );
};

export default ButtonWrapper
