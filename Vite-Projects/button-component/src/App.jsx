import React from "react";
import Button from "./components/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS, ICONS } from "./lib/constants";

function App() {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleOnFocus = (e) => {
        console.log(e);
        setIsFocused(e.target);
    };

    const handleOnBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="container">
            <Button
                id={1}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.PRIMARY}
                size={BUTTON_SIZES.MEDIUM}
                tabIndex={1}
            />
            <Button
                id={2}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.SECONDARY}
                size={BUTTON_SIZES.LARGE}
                tabIndex={2}
            />
            <Button
                id={3}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.TERTIARY}
                size={BUTTON_SIZES.XLARGE}
                tabIndex={3}
            />
            <Button
                id={4}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.LINK}
                size={BUTTON_SIZES.TWO_X_LARGE}
                tabIndex={4}
            />
            <Button
                id={5}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.DESTRUCTIVE}
                size={BUTTON_SIZES.TWO_X_LARGE}
                tabIndex={5}
            />

            <Button
                id={6}
                isFocused={isFocused}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                variant={BUTTON_VARIANTS.SECONDARY}
                size={BUTTON_SIZES.TWO_X_LARGE}
                tabIndex={6}
                icons={ICONS.LEFT}
            />
        </div>
    );
}

export default App;
