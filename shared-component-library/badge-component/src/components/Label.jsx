import React from "react";

const Label = ({ size, color, text }) => {
    const [labelSize, setLabelSize] = React.useState(null);
    const [labelColor, setLabelColor] = React.useState(null);

    React.useEffect(() => {
        setLabelSize(size);
        setLabelColor(color);
    }, []);

    return (
        <span className={`label ${labelSize} ${labelColor}`}>
            <p className="label-text">{text}</p>
        </span>
    );
};

export default Label;
