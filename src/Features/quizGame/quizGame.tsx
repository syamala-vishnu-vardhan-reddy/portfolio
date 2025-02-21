import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";

// Define API Response Types
interface TriviaAPIResponse {
  results: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}

// Define Types
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Function to Fetch Questions
const fetchQuestions = async (amount: number = 5): Promise<Question[]> => {
  try {
    const response = await axios.get<TriviaAPIResponse>(
      "https://opentdb.com/api.php",
      {
        params: {
          amount,
          type: "multiple",
        },
      }
    );

    return response.data.results.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      ),
      correctAnswer: q.correct_answer,
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

const QuizGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
      setLoading(false);
    };
    loadQuestions();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#111",
          color: "#FFD700",
        }}
      >
        <CircularProgress sx={{ color: "#FFD700" }} />
      </Box>
    );
  }

  if (questions.length === 0) {
    return (
      <Box sx={{ textAlign: "center", color: "#FFD700", padding: 3 }}>
        <Typography variant="h5">
          Failed to load questions. Try again!
        </Typography>
        <Button
          sx={{ mt: 2, bgcolor: "#FFD700", color: "#000" }}
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#111",
          color: "#FFD700",
          padding: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Quiz Game
        </Typography>

        {gameOver ? (
          <Box textAlign="center">
            <Typography variant="h5">Game Over!</Typography>
            <Typography variant="h6">
              Your Score: {score} / {questions.length}
            </Typography>
            <Button
              sx={{ mt: 2, bgcolor: "#FFD700", color: "#000" }}
              onClick={() => window.location.reload()}
            >
              Play Again
            </Button>
          </Box>
        ) : (
          <Card
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "#222",
              color: "#FFD700",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </Typography>

              <Grid container spacing={2}>
                {currentQuestion.options.map((option) => (
                  <Grid item xs={12} sm={6} key={option}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor:
                          selectedAnswer === option
                            ? option === currentQuestion.correctAnswer
                              ? "green"
                              : "red"
                            : "#FFD700",
                        color: "#000",
                        "&:hover": { bgcolor: "#E5C100" },
                      }}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedAnswer}
                    >
                      {option}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default QuizGame;
