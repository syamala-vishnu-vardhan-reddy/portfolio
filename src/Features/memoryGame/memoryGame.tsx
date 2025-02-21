import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

// Define Card Type
interface MemoryCard {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Card Icons
const cardValues = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍍", "🥝", "🍓"];

const generateCards = (): MemoryCard[] => {
  const pairedCards = [...cardValues, ...cardValues]
    .map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5); // Shuffle Cards
  return pairedCards;
};

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<MemoryCard[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setCards((prevCards) =>
          prevCards.map((card, idx) =>
            idx === firstIndex || idx === secondIndex
              ? { ...card, isMatched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, idx) =>
              idx === firstIndex || idx === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 800);
      }
      setFlippedCards([]);
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.every((card) => card.isMatched)) {
      setGameOver(true);
    }
  }, [cards]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !cards[index].isFlipped) {
      setCards((prevCards) =>
        prevCards.map((card, idx) =>
          idx === index ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards([...flippedCards, index]);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
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
          Memory Game
        </Typography>

        {gameOver ? (
          <Box textAlign="center">
            <Typography variant="h5">Congratulations! 🎉</Typography>
            <Typography variant="h6">Moves: {moves}</Typography>
            <Button
              sx={{ mt: 2, bgcolor: "#FFD700", color: "#000" }}
              onClick={resetGame}
            >
              Play Again
            </Button>
          </Box>
        ) : (
          <>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {cards.map((card, index) => (
                <Grid item xs={3} key={card.id}>
                  <Card
                    sx={{
                      height: 80,
                      width: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      bgcolor: card.isFlipped ? "#FFD700" : "#222",
                      color: "#000",
                      cursor: card.isFlipped ? "default" : "pointer",
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <CardContent>
                      {card.isFlipped || card.isMatched ? card.value : "❓"}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography sx={{ mt: 3 }}>Moves: {moves}</Typography>

            <Button
              sx={{ mt: 2, bgcolor: "#FFD700", color: "#000" }}
              onClick={resetGame}
            >
              Restart Game
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default MemoryGame;
