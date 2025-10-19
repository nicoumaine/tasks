import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<string>("Short Answer");

    const toggleType = () => {
        setType((prevType) =>
            prevType === "Short Answer" ? "Multiple Choice" : "Short Answer",
        );
    };

    return (
        <div>
            <div>{type}</div>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
