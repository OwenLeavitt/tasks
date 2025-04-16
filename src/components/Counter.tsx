import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <div>{value}</div>
            <Button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                Add One
            </Button>
        </div>
    );
}
