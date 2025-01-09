import React from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link, Route, Routes, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import WeatherApp from "../../weather/weather";
import TodoList from "../../todo/todoList";
import Calculator from "../../calculator/calculator";
import Tango from "../../tango/tango";
import EMICalculator from "../../EMICalulator/EMICalculator";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    id: "weather",
    title: "Weather",
    description:
      "The weather app helps you check the weather in different locations. You can enter a city or town name, and it will show you the current temperature and weather conditions.",
    image: "/assets/logo/project1.jpg",
    component: <WeatherApp />,
    internal: true,
  },
  {
    id: "Ecommerce",
    title: "Ecommerce",
    description:
      "An e-commerce website is an online store where customers can buy products,services,digital items.A virtual storefront, allowing customers to browse products, add them to their cart, and make purchases.",
    image: "/assets/logo/project3.jpg",
    component: "https://av-ecommerce-client.onrender.com/",
    internal: false,
  },
  {
    id: "todo-list",
    title: "TodoList",
    description:
      "The to-do list app is a simple tool to help you organize your tasks. You can add tasks, mark them as completed, and delete them when they're done.",
    image: "/assets/logo/project2.jpg",
    component: <TodoList />,
    internal: true,
  },
  {
    id: "tango",
    title: "tango",
    description:
      "The to-do list app is a simple tool to help you organize your tasks. You can add tasks, mark them as completed, and delete them when they're done.",
    image: "/assets/logo/project2.jpg",
    component: <Tango />,
    internal: true,
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A user-friendly calculator for basic and advanced mathematical operations. It supports addition, subtraction, multiplication, and division.",
    image: "/assets/logo/project3.jpg",
    component: <Calculator />,
    internal: true,
  },
  {
    id: "EMICalculator",
    title: "EMICalculator",
    description:
      "A calculator designed to calculate the EMI for loans, helping users estimate monthly payments.",
    image: "/assets/logo/project3.jpg",
    component: <EMICalculator />,
    internal: true,
  },
];

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <Typography variant="h6" color="error">
        Project not found!
      </Typography>
    );
  }

  return (
    <Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button
                variant="text"
                color="secondary"
                component={Link}
                to="/projects"
              >
                <ArrowBackIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="error" component={Link} to="/">
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid>{project.component}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Projects: React.FC = () => {
  return (
    <Grid>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Typography variant="h4" gutterBottom>
                Projects
              </Typography>
              <Grid
                container
                spacing={4}
                sx={{ margin: 0, padding: 0, width: "100%" }}
              >
                {projects.map((project) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                      {project.internal ? (
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to={`/projects/${project.id}`}
                          sx={{ m: 2 }}
                        >
                          Open
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          href={project.component as string}
                          sx={{ m: 2 }}
                          target="_blank"
                        >
                          lanch
                          <OpenInNewIcon />
                        </Button>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          }
        />
        <Route path=":projectId" element={<ProjectDetails />} />
      </Routes>
    </Grid>
  );
};

export default Projects;
