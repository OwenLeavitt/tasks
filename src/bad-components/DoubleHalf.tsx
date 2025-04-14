import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ double }: { double: () => void }): React.JSX.Element {
    return <Button onClick={double}>Double</Button>;
}

function Halver({ halve }: { halve: () => void }): React.JSX.Element {
    return <Button onClick={halve}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10); // default initial value

    const double = () => {
        setValue(2 * value);
    };
    const halve = () => {
        setValue(0.5 * value);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler double={double} />
            <Halver halve={halve} />
        </div>
    );
}
