import { useState } from "react";
import { Grid, Button, Typography, TextField, Paper } from "@mui/material";

export default function BmiCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBmi = () => {
    const heightInMeters = parseFloat(height) / 100;
    if (heightInMeters > 0 && parseFloat(weight) > 0) {
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    } else {
      setBmi(null);
      setCategory("");
    }
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        background: "black", // Background in black
        padding: "1rem",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: "400px",
          background: "#FFD700", // Yellow background
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.5)",
          padding: "2rem",
          textAlign: "center",
          color: "black", // Black text
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "black",
            marginBottom: "1rem",
          }}
        >
          BMI Calculator
        </Typography>

        {/* Input Fields */}
        <TextField
          label="Weight (kg)"
          value={weight}
          onChange={handleChange(setWeight)}
          fullWidth
          variant="outlined"
          inputProps={{ type: "number" }}
          sx={{
            marginBottom: "1rem",
            backgroundColor: "white", // White background for visibility
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "& input": {
                color: "black",
              },
            },
          }}
        />
        <TextField
          label="Height (cm)"
          value={height}
          onChange={handleChange(setHeight)}
          fullWidth
          variant="outlined"
          inputProps={{ type: "number" }}
          sx={{
            marginBottom: "1.5rem",
            backgroundColor: "white", // White background for visibility
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "& input": {
                color: "black",
              },
            },
          }}
        />

        {/* Calculate Button */}
        <Button
          variant="contained"
          onClick={calculateBmi}
          sx={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            background: "black",
            color: "yellow",
            fontWeight: "bold",
            borderRadius: "8px",
            "&:hover": {
              background: "#222",
            },
          }}
        >
          Calculate BMI
        </Button>

        {/* Result Display */}
        {bmi && (
          <Paper
            elevation={5}
            sx={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              borderRadius: "12px",
              background: "black",
              color: "yellow",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Your BMI: {bmi}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "0.5rem",
                fontWeight: "bold",
                color:
                  category === "Underweight"
                    ? "#FFA500"
                    : category === "Normal Weight"
                    ? "#00FF00"
                    : category === "Overweight"
                    ? "#FF4500"
                    : "#FF0000",
              }}
            >
              Category: {category}
            </Typography>
          </Paper>
        )}
      </Paper>
    </Grid>
  );
}
