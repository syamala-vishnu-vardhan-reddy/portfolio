import React from 'react'
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material'
import { Link } from 'react-router-dom'

const Projects: React.FC = () => {
  return (
    <>
      <Typography variant='h4' gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image='src/Features/portfolio/images/project1.jpg'
              alt='Project 1'
            />
            <CardContent>
              <Typography variant='h5' component='div'>
                Project 1
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                The weather app helps you check the weather in different
                locations. You can enter a city or town name, and it will show
                you the current temperature and weather conditions there. It's
                like having a mini weather forecast right at your fingertips!
              </Typography>
            </CardContent>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/weather'
              sx={{ m: 2 }}
            >
              Open
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image='src/Features/portfolio/images/project2.jpg'
              alt='Project 2'
            />
            <CardContent>
              <Typography variant='h5' component='div'>
                Project 2
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                The to-do list app is a simple tool to help you organize your
                tasks and keep track of what needs to be done. You can add
                tasks, mark them as completed, and delete them when they're
                done. It's like having a digital checklist to stay on top of
                your daily tasks and priorities.
              </Typography>
            </CardContent>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/todo-list'
              sx={{ m: 2 }}
            >
              Open
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image='src/Features/portfolio/images/project3.jpg'
              alt='Project 3'
            />
            <CardContent>
              <Typography variant='h5' component='div'>
                Project 3
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                This project showcases an e-commerce application where users can
                browse products, add them to the cart, and proceed to checkout.
                It demonstrates the complete flow from product listing to
                payment.
              </Typography>
            </CardContent>
            <Button
              variant='contained'
              color='primary'
              href='https://av-ecommerce-client.onrender.com'
              target='_blank'
              sx={{ m: 2 }}
            >
              Open
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects
