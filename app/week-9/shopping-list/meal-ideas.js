"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;

    // Clean up the ingredient string by removing emoji and quantities
    const cleanedIngredient = ingredient
      .split(" ")
      .pop()
      ?.replace(/[^a-zA-Z\s]/g, "");

    const mealIdeas = await fetchMealIdeas(cleanedIngredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h2>

      {meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-4 p-2 border rounded hover:bg-gray-50"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-20 h-20 object-cover rounded"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
