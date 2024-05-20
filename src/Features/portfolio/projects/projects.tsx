import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Projects: React.FC = () => {
  return (
    <section className='projects' id='projects'>
      <Container>
        <Typography variant='h2' gutterBottom>
          Projects
        </Typography>
        <div className='project-list'>
          <div className='project-item'>
            <img
              src='src/Features\portfolio\images\project1.jpg'
              alt='Project 1'
              style={{ width: '300px', height: '200px' }}
            />
            <Typography variant='h3'>Project 1</Typography>
            <Typography variant='body1'>
              The weather app helps you check the weather in different
              locations. You can enter a city or town name, and it will show you
              the current temperature and weather conditions there. It's like
              having a mini weather forecast right at your fingertips!
            </Typography>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/todo-list'
            >
              View Todo List
            </Button>
          </div>
          <div className='project-item'>
            <img
              src='src/Features/portfolio/images/projec.jpg'
              alt='Project 2'
              style={{ width: '300px', height: '200px' }}
            />
            <Typography variant='h3'>Project 2</Typography>
            <Typography variant='body1'>
              The to-do list app is a simple tool to help you organize your
              tasks and keep track of what needs to be done. You can add tasks,
              mark them as completed, and delete them when they're done. It's
              like having a digital checklist to stay on top of your daily tasks
              and priorities.
            </Typography>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/weather'
            >
              View Weather
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
