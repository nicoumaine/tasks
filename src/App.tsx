import React from "react";
import rug from "./assets/photos/authentic_persian_rug.jpg";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Goofy Goober</h1>
            <img
                src={rug} // if you moved it to public/, change to: src="/assets/photos/authentic_persian_rug.jpg"
                alt='A meme featuring several Persian rugs with the text: "Friend, Girlfriend, Boyfriend, Best friend" (all with "end" underlined). Next to them it says "Only authentic persian rug Has no END," highlighting that unlike friendships or relationships that may end, Persian rugs are timeless.'
            />

            <ul>
                <li>
                    Girlfriend X
                    <div
                        style={{
                            width: "80px",
                            height: "20px",
                            backgroundColor: "red",
                            marginTop: "5px",
                        }}
                    ></div>
                </li>
                <li>
                    Boyfriend X
                    <div
                        style={{
                            width: "80px",
                            height: "20px",
                            backgroundColor: "red",
                            marginTop: "5px",
                        }}
                    ></div>
                </li>
                <li>
                    Bestfriend X
                    <div
                        style={{
                            width: "80px",
                            height: "20px",
                            backgroundColor: "red",
                            marginTop: "5px",
                        }}
                    ></div>
                </li>
                <Button onClick={() => console.log("Hello world!")}>
                    Log Hello World
                </Button>
            </ul>

            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;


