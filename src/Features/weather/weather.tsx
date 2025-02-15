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

const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(weatherState);

  const handleSearch = () => {
    if (location.trim() !== "") {
      dispatch(fetchDataStart({ location })); // Correctly passing location here
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
          <Typography variant="h4" color="secondary">
            Weather App
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: "12px" }}>
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              disabled={loading}
              sx={{ mb: 2, width: "100%" }}
            >
              {loading ? <CircularProgress size={24} /> : "Search"}
            </Button>
          </Box>

          {data && typeof data !== "string" && data.current && (
            <Card sx={{ mb: 4, borderRadius: "12px" }}>
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ mb: 2, display: "flex", alignItems: "center" }}
                >
                  <LocationOnIcon sx={{ mr: 1 }} /> Weather Details for{" "}
                  {data.location?.name}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <ThermostatIcon sx={{ mr: 1 }} /> Temperature:{" "}
                      {data.current?.temp_c}°C
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <WbSunnyIcon sx={{ mr: 1 }} /> Weather:{" "}
                      {data.current?.condition.text}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <WindIcon sx={{ mr: 1 }} /> Wind Speed:{" "}
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
