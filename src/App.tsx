import React from "react";
import "./App.css";
import rug from "./assets/photos/authentic_persian_rug.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <h1>Goofy Goober</h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "5px",
                                backgroundColor: "red",
                            }}
                        />
                        <img
                            src={rug}
                            alt='A meme featuring several Persian rugs with the text: "Friend, Girlfriend, Boyfriend, Best friend" (all with "end" underlined). Next to them it says "Only authentic persian rug Has no END," highlighting that unlike friendships or relationships that may end, Persian rugs are timeless.'
                        />
                        <ul>
                            <li>Girlfriend X</li>
                            <li>Boyfriend X</li>
                            <li>Bestfriend X</li>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </ul>
                        <header className="App-header">
                            UM COS420 with React Hooks and TypeScript
                        </header>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "5px",
                                backgroundColor: "red",
                            }}
                        />
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
