import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <div>{value}</div>
            <Button onClick={increment}>Add One</Button>
        </div>
    );
}
