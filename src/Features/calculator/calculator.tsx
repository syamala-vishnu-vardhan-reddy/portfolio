import { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";

export default function Calculator() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "↵") {
      setInput(input.slice(0, -1));
    } else if (["+", "-", "*", "/", "%"].includes(value)) {
      if (["+", "-", "*", "/", "%"].includes(input.slice(-1))) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttonStyle = (value: string) => ({
    backgroundColor: value === "=" ? "orange" : "white",
    color:
      value === "="
        ? "white"
        : ["+", "-", "*", "/", "%", "AC", "↵"].includes(value)
        ? "orange"
        : "black",
    borderRadius: "8px",
    padding: "0.75rem",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "lightgrey",
      color:
        value === "="
          ? "white"
          : ["+", "-", "*", "/", "%", "AC", "↵"].includes(value)
          ? "orange"
          : "black",
    },
  });

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
          height: "667px",
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
            backgroundColor: "white",
            borderBottom: "1px solid lightgray",
            textAlign: "right",
            fontSize: "2rem",
            color: "black",
          }}
        >
          {input || "0"}
        </Typography>

        {/* Calculator Buttons */}
        <Grid container spacing={1} sx={{ padding: "1rem" }}>
          {[
            "AC",
            "↵",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            ".",
            "=",
          ].map((value) => (
            <Grid item xs={3} key={value}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  ...buttonStyle(value),
                }}
                onClick={() =>
                  value === "=" ? calculate() : handleClick(value)
                }
              >
                {value}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
