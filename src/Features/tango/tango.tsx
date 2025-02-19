import { useState } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";

export default function Tango() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBmi = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
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
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          width: "375px",
          height: "auto", // Removed fixed height to adjust based on content
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            padding: "1rem",
            borderBottom: "1px solid lightgray",
            textAlign: "center",
            fontSize: "2rem",
            color: "black",
          }}
        >
          BMI Calculator
        </Typography>

        {/* Input Fields */}
        <Grid container direction="column" spacing={2} sx={{ padding: "1rem" }}>
          <Grid item>
            <TextField
              label="Weight (kg)"
              value={weight}
              onChange={handleChange(setWeight)}
              fullWidth
              variant="outlined"
              inputProps={{ type: "number" }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Height (cm)"
              value={height}
              onChange={handleChange(setHeight)}
              fullWidth
              variant="outlined"
              inputProps={{ type: "number" }}
            />
          </Grid>
        </Grid>

        {/* Calculate Button */}
        <Grid item sx={{ padding: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange", // Keep the button color as orange
              color: "white", // Button text color
              borderRadius: "8px",
              padding: "0.75rem",
              fontSize: "1rem",
              width: "100%", // Ensuring the button fills its container width
            }}
            onClick={calculateBmi}
          >
            Calculate BMI
          </Button>
        </Grid>

        {/* Result */}
        {bmi && (
          <Grid item sx={{ padding: "1rem" }}>
            <Typography variant="h6">Your BMI: {bmi}</Typography>
            <Typography variant="body1">Category: {category}</Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
