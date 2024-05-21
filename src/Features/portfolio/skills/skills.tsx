import { Container, Typography, Box, Grid, Paper, Rating } from '@mui/material'

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      rating: 4.5,
      icon: (
        <img
          src={'src/assets/logo/javascriptlogo.png'}
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'React',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/reactlogo.png'}
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'TypeScript',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/typescriptlogo.png'}
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'CSS',
      rating: 3.5,
      icon: (
        <img
          src={'src/assets/logo/csslogo.png'}
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'HTML',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/htmllogo.png'}
          alt='React Logo'
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'Redux',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/redux-icon.png'}
          alt='React Logo'
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'Saga',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/sagalogo.png'}
          alt='React Logo'
          style={{ width: 50, height: 50 }}
        />
      )
    },
    {
      name: 'Material ui',
      rating: 4.0,
      icon: (
        <img
          src={'src/assets/logo/materiallogo.png'}
          alt='React Logo'
          style={{ width: 50, height: 50 }}
        />
      )
    }
  ]

  return (
    <Container sx={{ marginTop: -8, marginLeft: -2 }}>
      <Box mt={8}>
        <Typography variant='h4' align='left' gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map(skill => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <Paper
                elevation={6}
                sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  mb={2}
                >
                  {skill.icon}
                  <Typography variant='h6' ml={1}>
                    {skill.name}
                  </Typography>
                </Box>
                <Rating
                  name={skill.name}
                  value={skill.rating}
                  precision={0.5}
                  readOnly
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Skills
