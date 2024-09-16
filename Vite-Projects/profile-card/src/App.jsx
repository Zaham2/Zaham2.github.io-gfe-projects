import React from "react";
import ProfileCard from "./components/ProfileCard";
import ThemeSwitchButton from "./components/ThemeSwitchButton";
import {
    BUTTON_SIZES,
    BUTTON_VARIANTS,
    ButtonWrapper,
} from "../../../shared-component-library";

function App() {
    return (
        <>
            <ThemeSwitchButton />
            <ProfileCard />
            <ButtonWrapper
                variant={BUTTON_VARIANTS.PRIMARY}
                size={BUTTON_SIZES.MEDIUM}
            />
        </>
    );
}

export default App;
