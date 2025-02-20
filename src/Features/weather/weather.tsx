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
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import WindIcon from "@mui/icons-material/Air";
import { HorizontalScrollContainer } from "./HorizontalScrollContainer"; // Importing custom scrollbar

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

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (error) {
      setSnackbarMessage(error);
      setSnackbarOpen(true);
    }
  }, [error]);

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
          <Typography variant="h4" sx={{ color: "yellow" }}>
            Weather App
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{ p: 4, mt: 4, borderRadius: "12px", backgroundColor: "black" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <TextField
              label="Enter location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              sx={{
                mb: 2,
                backgroundColor: "#222",
                borderRadius: "8px",
                input: { color: "yellow" },
                label: { color: "yellow" },
              }}
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
              sx={{
                mb: 2,
                width: "100%",
                backgroundColor: "yellow",
                color: "black",
                "&:hover": { backgroundColor: "#ffcc00" },
              }}
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "black" }} />
              ) : (
                "Search"
              )}
            </Button>
          </Box>

          {/* Main Weather Card */}
          {data && typeof data !== "string" && data.current && (
            <Card
              sx={{
                mb: 4,
                borderRadius: "12px",
                backgroundColor: "#222",
                color: "yellow",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    color: "yellow",
                  }}
                >
                  <LocationOnIcon sx={{ mr: 1, color: "yellow" }} /> Weather
                  Details for {data.location?.name}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <ThermostatIcon sx={{ mr: 1, color: "yellow" }} />{" "}
                      Temperature: {data.current?.temp_c}°C
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <WbSunnyIcon sx={{ mr: 1, color: "yellow" }} /> Weather:{" "}
                      {data.current?.condition.text}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <WindIcon sx={{ mr: 1, color: "yellow" }} /> Wind Speed:{" "}
                      {data.current.wind_kph} kph
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CardMedia
                      component="img"
                      image={data.current.condition.icon}
                      alt={data.current.condition.text}
                      sx={{ width: "100px", height: "100px", mx: "auto" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {/* Hourly Weather Timeline with Custom Scrollbar */}
          {data?.forecast?.forecastday[0]?.hour && (
            <HorizontalScrollContainer>
              {data.forecast.forecastday[0].hour.map((hourData, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 120,
                    textAlign: "center",
                    padding: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#222",
                    color: "yellow",
                    boxShadow: "0 4px 8px rgba(255, 255, 0, 0.5)",
                    marginRight: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="body2" sx={{ color: "yellow" }}>
                      {hourData.time.split(" ")[1]} {/* Extracts only time */}
                    </Typography>
                    <img
                      src={hourData.condition.icon}
                      alt={hourData.condition.text}
                    />
                    <Typography variant="h6" sx={{ color: "yellow" }}>
                      {hourData.temp_c}°C
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </HorizontalScrollContainer>
          )}

          {/* Snackbar for errors */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Paper>
      </Container>
    </>
  );
};

export default WeatherApp;
