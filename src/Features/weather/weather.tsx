import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataStart, weatherState } from './slice/weatherslice'
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
  Alert,
  Grid
} from '@mui/material'

const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(weatherState)

  const handleSearch = () => {
    if (location.trim() !== '') {
      console.log('Dispatching fetchDataStart with location:', location)
      dispatch(fetchDataStart({ location }))
    } else {
      console.warn('Location is empty')
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  React.useEffect(() => {
    if (error) {
      setSnackbarMessage(error)
      setSnackbarOpen(true)
    }
  }, [error])

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Typography variant='h4' gutterBottom>
          Weather App
        </Typography>
        <TextField
          label='Enter location'
          variant='outlined'
          fullWidth
          value={location}
          onChange={e => setLocation(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleSearch}
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
        {data ? (
          <div>
            <Typography variant='h2'>
              Weather Details for {data.location.name}
            </Typography>
            <Typography variant='body1'>
              Temperature: {data.current.temp_c}°C
            </Typography>
            <Typography variant='body1'>
              Weather: {data.current.condition.text}
            </Typography>
            <Typography variant='h3'>Forecast</Typography>
            <Grid container spacing={2}>
              {data.forecast.forecastday.map((forecastDay, index) => (
                <Grid item key={index}>
                  <Typography variant='h4'>{forecastDay.date}</Typography>
                  <Typography variant='body1'>
                    Max Temp: {forecastDay.day.maxtemp_c}°C
                  </Typography>
                  <Typography variant='body1'>
                    Min Temp: {forecastDay.day.mintemp_c}°C
                  </Typography>
                  <Typography variant='body1'>
                    Sunrise: {forecastDay.astro.sunrise}
                  </Typography>
                  <Typography variant='body1'>
                    Sunset: {forecastDay.astro.sunset}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          !loading && (
            <Typography variant='body1' color='textSecondary'>
              No data
            </Typography>
          )
        )}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity='error'
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  )
}

export default WeatherApp
