import React, { useState, JSX } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Control
                    value={userAnswer}
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                    }}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
