import React from "react";
import myimage from "./download.jpg";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Owen Leavitt Hello World
            </p>
            <h1>This is a heading!</h1>
            <img src={myimage} alt="An image" />
            My list:
            <ul>
                <li>this</li>
                <li>is</li>
                <li>a</li>
                <li>list</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            First Collumn.
                        </span>
                    </Col>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            The other collumn!
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
