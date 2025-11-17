import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerInput">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
