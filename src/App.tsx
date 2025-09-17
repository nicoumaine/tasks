import React from "react";
import "./App.css";
import rug from "./assets/photos/authentic_persian_rug.jpg";
import { Container, Row, Col, Button} from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
        <Container>
            <Row>
            <Col>
            <h1>Goofy Goober</h1>
            <img src={rug} alt='A meme featuring several Persian rugs with the text: "Friend, Girlfriend, Boyfriend, Best friend" (all with "end" underlined). Next to them it says "Only authentic persian rug Has no END," highlighting that unlike friendships or relationships that may end, Persian rugs are timeless.' />
            <ul>
            <li>Girlfriend X</li>
            <li>Boyfriend X</li>
            <li>Bestfriend X</li>
            <Button onClick={ () => { console.log("Hello world!") } }>Log Hello World</Button>
        </ul>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            </Col>
            <Col>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default App;
