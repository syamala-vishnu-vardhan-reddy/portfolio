import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

const QUOTE_API = "https://dummyjson.com/quotes/random";

const QuoteApp = () => {
  const [quote, setQuote] = useState<string>("Fetching quote...");
  const [author, setAuthor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Quote from API
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(QUOTE_API);
      if (!response.ok) throw new Error("Failed to fetch quote");

      const data = await response.json();
      setQuote(data.quote); // Quote text
      setAuthor(data.author); // Author name
    } catch (error) {
      setQuote("Failed to fetch a quote. Try again!");
      setAuthor("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
        Random Quote Generator
      </Typography>

      <Card sx={{ p: 3, boxShadow: 3, bgcolor: "#212121", color: "white" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2 }}>
            {loading ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              `"${quote}"`
            )}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {author && `- ${author}`}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={fetchQuote}
            disabled={loading}
          >
            {loading ? "Loading..." : "Get New Quote"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default QuoteApp;
