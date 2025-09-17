import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Goofy Goober</h1>
            <img src="/authentic_persian_rug.jpg" alt='A meme featuring several Persian rugs with the text: "Friend, Girlfriend, Boyfriend, Best friend" (all with "end" underlined). Next to them it says "Only authentic persian rug Has no END," highlighting that unlike friendships or relationships that may end, Persian rugs are timeless.' />
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
