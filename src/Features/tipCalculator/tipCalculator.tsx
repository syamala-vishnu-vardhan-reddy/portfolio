import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Slider,
  Grid,
} from "@mui/material";

// Tip percentage options
const tipOptions = [10, 15, 20];

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [peopleCount, setPeopleCount] = useState<number>(1);

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalBill = billAmount + tipAmount;
  const perPersonAmount = totalBill / peopleCount;

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
          color: "#FFF",
          padding: 3,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#FFD700",
            textShadow: "1px 1px 4px rgba(255, 215, 0, 0.7)",
          }}
        >
          Tip Calculator
        </Typography>

        {/* Bill Amount Input */}
        <TextField
          label="Bill Amount ($)"
          type="number"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            bgcolor: "#222",
            borderRadius: "5px",
            color: "#FFF",
            input: { color: "#FFD700" },
          }}
          onChange={(e) => setBillAmount(parseFloat(e.target.value) || 0)}
        />

        {/* Tip Percentage Selection */}
        <Typography variant="h6" sx={{ mt: 2, color: "#FFD700" }}>
          Tip Percentage: {tipPercentage}%
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          {tipOptions.map((tip) => (
            <Grid item key={tip}>
              <Button
                variant={tipPercentage === tip ? "contained" : "outlined"}
                onClick={() => setTipPercentage(tip)}
                sx={{
                  bgcolor: tipPercentage === tip ? "#FFD700" : "transparent",
                  color: tipPercentage === tip ? "#000" : "#FFD700",
                  border: "1px solid #FFD700",
                  fontWeight: "bold",
                }}
              >
                {tip}%
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Custom Tip Slider */}
        <Slider
          value={tipPercentage}
          onChange={(_, value) => setTipPercentage(value as number)}
          min={5}
          max={50}
          step={1}
          sx={{ color: "#FFD700", width: "80%" }}
        />

        {/* Number of People Input */}
        <TextField
          label="Split Between (People)"
          type="number"
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#222",
            borderRadius: "5px",
            color: "#FFF",
            input: { color: "#FFD700" },
          }}
          onChange={(e) =>
            setPeopleCount(Math.max(1, parseInt(e.target.value) || 1))
          }
        />

        {/* Calculated Values */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: "#FFD700", fontWeight: "bold" }}
          >
            Tip Amount: ${tipAmount.toFixed(2)}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#FFD700", fontWeight: "bold" }}
          >
            Total Bill: ${totalBill.toFixed(2)}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#FFD700", fontWeight: "bold" }}
          >
            Per Person: ${perPersonAmount.toFixed(2)}
          </Typography>
        </Box>

        {/* Reset Button */}
        <Button
          sx={{
            mt: 3,
            bgcolor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#E5C100" },
          }}
          onClick={() => {
            setBillAmount(0);
            setTipPercentage(15);
            setPeopleCount(1);
          }}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

export default TipCalculator;
