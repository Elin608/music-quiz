
import quizQuestions from "../assets/questions.js";
import { useState } from "react";

let audio;
function Quiz() {
    const [currentQuestion, setCurrentQuestion] =
        useState(0);

    const [message, setMessage] = useState("");


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

    return (
        <div>
            <h1>Music Quiz</h1>
            <h2>{quizQuestions[currentQuestion].question}</h2>

            <button onClick={playSong}>
                Play song
            </button>

            <button onClick={stopSong}>
                Stop song
            </button>

            {quizQuestions[currentQuestion].options.map((option, index) => (




                <button
                    key={index}
                    onClick={() => {
                        if (option ===
                            quizQuestions[currentQuestion].correctAnswer) {
                            setMessage("Correct!");
                        } else {
                            setMessage("Wrong answer")
                        }

                        if (currentQuestion <
                            quizQuestions.length - 1) {

                            setCurrentQuestion(currentQuestion + 1);
                        } else {
                            setMessage("Quiz finished!");
                        }
                    }}
                    >





                    {option}
                </button>
    ))
}
<p>{message}</p>

        </div >
    );
}
export default Quiz;

