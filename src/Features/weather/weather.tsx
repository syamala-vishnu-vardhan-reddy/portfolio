import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart, weatherState } from "./slice/weatherslice";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
  Alert,
  Paper,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { HorizontalScrollContainer } from "./HorizontalScrollContainer";

const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(weatherState);

  const handleSearch = () => {
    if (location.trim() !== "") {
      dispatch(fetchDataStart({ location }));
    } else {
      setSnackbarMessage("Please enter a location");
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    if (error) {
      setSnackbarMessage(error);
      setSnackbarOpen(true);
    }
  }, [error]);

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: "12px",
          backgroundColor: "black",
          color: "yellow",
        }}
      >
        <TextField
          label="Enter location"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ mb: 2, input: { color: "yellow" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "yellow" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "yellow", color: "black" }}
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "black" }} />
          ) : (
            "Search"
          )}
        </Button>

        {data && data.current && (
          <Card
            sx={{
              mt: 4,
              backgroundColor: "#222",
              color: "yellow",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h4">{data.location?.name}</Typography>
              <Typography variant="h6">
                {data.current?.temp_c}°C, {data.current?.condition.text}
              </Typography>
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
            </CardContent>
          </Card>
        )}

        {data && data.forecast && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
              Hourly Forecast
            </Typography>
            <HorizontalScrollContainer>
              {data.forecast.forecastday[0].hour.map((hour, index) => (
                <Card
                  key={index}
                  sx={{
                    p: 1,
                    m: 1,
                    backgroundColor: "#333",
                    textAlign: "center",
                    color: "yellow",
                    minWidth: 100,
                  }}
                >
                  <Typography variant="body2">
                    {hour.time.split(" ")[1]}
                  </Typography>
                  <img src={hour.condition.icon} alt={hour.condition.text} />
                  <Typography variant="body2">{hour.temp_c}°C</Typography>
                </Card>
              ))}
            </HorizontalScrollContainer>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="error">{snackbarMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default WeatherApp;
