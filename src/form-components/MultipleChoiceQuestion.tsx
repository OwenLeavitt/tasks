import React, { useState, JSX } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceQuestionProps {
    options: string[];
    expectedAnswer: string;
}

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: MultipleChoiceQuestionProps): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Select
                    value={selectedChoice}
                    onChange={(e) => {
                        setSelectedChoice(e.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
