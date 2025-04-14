import React from "react";
// import myimage from "./download.jpg";
import "./App.css";
// import { ChangeType } from "./components/ChangeType";
// import { RevealAnswer } from "./components/RevealAnswer";
// import { TwoDice } from "./components/TwoDice";
// import { Counter } from "./components/Counter";
// import { Button, Col, Container, Row } from "react-bootstrap";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <DoubleHalf />
            <ColoredBox />
            <ChooseTeam />
        </div>
    );
}

export default App;
