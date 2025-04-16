import React, { useState, JSX } from "react";
import { Form } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <FormCheck
                type="switch"
                checked={isEditMode}
                onChange={() => {
                    setIsEditMode(!isEditMode);
                }}
                label="Edit Mode"
            />
            {isEditMode ?
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </Form.Group>
                </Form>
            :   <div>
                    {userName} is {isStudent ? "" : "not"} a student
                </div>
            }
        </div>
    );
}
