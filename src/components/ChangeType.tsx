import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): JSX.Element {
    const [isShortAnswer, setIsShortAnswer] = useState<boolean>(true);

    return (
        <div>
            <div>{isShortAnswer ? "Short Answer" : "Multiple Choice"}</div>
            <Button
                onClick={() => {
                    setIsShortAnswer(!isShortAnswer);
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
