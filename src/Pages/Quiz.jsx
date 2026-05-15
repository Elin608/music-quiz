
import quizQuestions from "../assets/questions.js";
import { useState } from "react";
import "./Quiz.css";
let audio;
function Quiz() {
    const [currentQuestion, setCurrentQuestion] =
        useState(0);

    const [message, setMessage] = useState("");


    const [score, setScore] =
        useState(0);
    const [isFinished, setIsFinished] = useState(false);


    const playSong = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        audio = new


            Audio(quizQuestions[currentQuestion].audio);

        audio.currentTime = 0;
        audio.play();

    };

    const stopSong = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    };



    if (isFinished) {



        return (
            <div clasName="quiz-card">
                <h1>Quiz Finished!</h1>


                <p>Your final score is: {score}</p>
            </div>
        );
    }

    return (
        <div className="quiz-card">
            <h1>🎵 Music Quiz</h1>
            <h2>{quizQuestions[currentQuestion].question}</h2>
            <p>Question {currentQuestion + 1} / {quizQuestions.length}</p>

            <p>Score: {score}</p>

            <button onClick={playSong}
            >Play song</button>

            <button onClick={stopSong}>Stop song</button>

            <div className="quiz-options">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button key={index}
                        onClick={() => {
                            if (option === quizQuestions[currentQuestion].correctAnswer) {
                                setMessage("Correct!");
                                setScore(score + 1);
                            } else {
                                setMessage("Wrong answer");
                            }
                            if (currentQuestion < quizQuestions.length - 1) {
                                setCurrentQuestion(currentQuestion + 1);
                            } else {
                                setIsFinished(true);
                            }
                        }}

                    >
                        {option}
                    </button>
                ))}
            </div>
            <p>{message}</p>
        </div>
    );
}
export default Quiz;
