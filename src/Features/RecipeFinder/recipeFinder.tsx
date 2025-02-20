// src/App.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import { OpenInNewOutlined } from "@mui/icons-material";

// Define Types
interface Recipe {
  id: number;
  title: string;
  image: string;
  sourceUrl: string;
}

interface Ingredient {
  id: string;
  name: string;
  category: string;
}

// API Keys & Endpoints
const RECIPE_API_KEY = "3294f75b5b174594aeb4dc9fd1bad5cf"; // Replace with your API key
const INGREDIENTS_API =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
const RECIPES_API = "https://api.spoonacular.com/recipes/complexSearch";
const RECIPE_DETAILS_API = "https://api.spoonacular.com/recipes"; // For fetching details

const RecipeFinder: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [ingredients, setIngredients] = useState<Record<string, Ingredient[]>>(
    {}
  );
  const [error, setError] = useState<string>("");

  // Fetch Ingredients from API
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(INGREDIENTS_API);
        if (response.data.meals) {
          const ingredientList = response.data.meals.map(
            (meal: {
              idIngredient: string;
              strIngredient: string;
              strType: string;
            }) => ({
              id: meal.idIngredient,
              name: meal.strIngredient,
              category: meal.strType || "Other",
            })
          );

          // Categorize Ingredients
          const categorizedIngredients: Record<string, Ingredient[]> = {};
          ingredientList.forEach((ing: Ingredient) => {
            if (!categorizedIngredients[ing.category]) {
              categorizedIngredients[ing.category] = [];
            }
            categorizedIngredients[ing.category].push(ing);
          });

          setIngredients(categorizedIngredients);
        }
      } catch (err) {
        setError("Failed to load ingredients.");
      }
    };
    fetchIngredients();
  }, []);

  // Fetch Recipes Based on Selected Ingredients
  const fetchRecipes = async () => {
    if (selectedIngredients.length === 0) {
      setError("Please select at least one ingredient.");
      return;
    }
    try {
      const response = await axios.get(RECIPES_API, {
        params: {
          apiKey: RECIPE_API_KEY,
          includeIngredients: selectedIngredients.join(","),
          number: 6,
        },
      });

      const fetchedRecipes = response.data.results.map(
        (recipe: { id: number; title: string; image: string }) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceUrl: "", // Placeholder (Will be fetched separately)
        })
      );

      // Fetch full recipe details to get correct source URL
      const detailedRecipes = await Promise.all(
        fetchedRecipes.map(async (recipe: { id: unknown }) => {
          try {
            const detailsResponse = await axios.get(
              `${RECIPE_DETAILS_API}/${recipe.id}/information`,
              {
                params: { apiKey: RECIPE_API_KEY },
              }
            );
            return {
              ...recipe,
              sourceUrl:
                detailsResponse.data.sourceUrl ||
                `https://spoonacular.com/recipes/${recipe.id}`,
            };
          } catch {
            return recipe;
          }
        })
      );

      setRecipes(detailedRecipes);
      setError("");
    } catch {
      setError("Error fetching recipes. Please try again later.");
    }
  };

  // Handle Ingredient Selection
  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left Sidebar for Ingredients */}
      <Paper
        sx={{
          width: "320px",
          padding: 2,
          bgcolor: "#000", // Black
          color: "#FFD700", // Gold text
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Ingredients
        </Typography>
        {Object.entries(ingredients).map(([category, items]) => (
          <Box key={category} sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#FFD700",
                borderBottom: "2px solid #FFD700",
                paddingBottom: "5px",
              }}
            >
              {category}
            </Typography>
            <List>
              {items.map((ingredient) => (
                <ListItem
                  button
                  key={ingredient.id}
                  onClick={() => toggleIngredient(ingredient.name)}
                  sx={{
                    backgroundColor: selectedIngredients.includes(
                      ingredient.name
                    )
                      ? "#FFD700"
                      : "#222",
                    marginBottom: "5px",
                    borderRadius: "5px",
                    "&:hover": { backgroundColor: "#444" },
                  }}
                >
                  <ListItemText
                    primary={ingredient.name}
                    sx={{ color: "#FFF" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Paper>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          textAlign: "center",
          bgcolor: "#111",
          color: "#FFD700",
        }}
      >
        {/* Navbar */}
        <AppBar position="static" sx={{ bgcolor: "#000" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFD700" }}>
              Recipe Finder
            </Typography>
            <Button
              sx={{ color: "#FFD700", border: "1px solid #FFD700" }}
              onClick={fetchRecipes}
            >
              Find Recipes
            </Button>
          </Toolbar>
        </AppBar>

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {/* Display Recipes */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, bgcolor: "#222", color: "#FFD700" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#FFD700" }}>
                      {recipe.title}
                    </Typography>
                    <Button
                      href={recipe.sourceUrl}
                      target="_blank"
                      sx={{
                        marginTop: 1,
                        bgcolor: "#FFD700",
                        color: "#000",
                        "&:hover": { bgcolor: "#E5C100" },
                      }}
                    >
                      View Recipe
                      <OpenInNewOutlined />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>
              No recipes found. Try selecting different ingredients.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecipeFinder;
