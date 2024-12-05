"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Recipe from "@/lib/Recipe";
import { INFOPAGE_ROUTE_PARAMS } from "@/lib/const";

const RecipeDetail: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>()

  useEffect(() => {
    const route_session_params = sessionStorage.getItem(INFOPAGE_ROUTE_PARAMS)
    if (route_session_params == null) {
      console.error("Please Access This Page From /")
    } else {
      const routerSavedParamsJson = JSON.parse(route_session_params)
      setRecipe(Recipe.parse(routerSavedParamsJson))
    }
  }, []);

  const hasImage = recipe?.image;
  return (
    recipe ?
      <div className="p-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen flex flex-col lg:flex-row gap-8">
        {/* Case not access from / */}
        {/* Main Content */}
        <div className="flex-1 space-y-12">
          {/* Hero Section */}
          <section
            className={`relative bg-white shadow-lg rounded-xl p-6 flex flex-col ${hasImage ? "lg:flex-row" : "text-center"
              } gap-8`}
          >
            {hasImage ? (
              <Image
                src={recipe.image!}
                alt={recipe.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            ) : null}
            <div className={`flex-1 space-y-4 ${!hasImage ? "mx-auto" : ""}`}>
              <h1 className="text-4xl font-extrabold text-gray-800">{recipe.title}</h1>
              {recipe.category && (
                <Badge variant="secondary" className="bg-green-200 text-green-900">
                  {recipe.category}
                </Badge>
              )}
              {recipe.description && (
                <p className="text-gray-600">{recipe.description}</p>
              )}
              <Button
                asChild
                className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105"
              >
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  View Full Recipe
                </a>
              </Button>
            </div>
          </section>

          {/* Ingredients Section */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold text-gray-800">Ingredients</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {recipe.ingredients.map((ingredient, index) => (
                  <Card
                    key={index}
                    className="shadow-md rounded-lg p-4 transition-transform hover:scale-105"
                  >
                    <CardContent>
                      <p className="font-medium text-gray-700">{ingredient}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Steps Section */}
          {recipe.steps && recipe.steps.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold text-gray-800">Steps</h2>
              <div className="space-y-6 mt-6">
                {recipe.steps.map((step, index) => (
                  <Card
                    key={index}
                    className="shadow-md border-l-4 border-blue-500 p-4 hover:bg-blue-50 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="font-bold text-2xl text-blue-600">
                        {index + 1}.
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Information Panel */}
        <aside className="w-full lg:w-80 bg-white shadow-lg rounded-xl p-6 space-y-6 sticky top-8">
          <h2 className="text-2xl font-bold text-gray-800">Information</h2>
          {recipe.category && (
            <Card className="bg-gray-50 shadow-sm rounded-lg p-4">
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-700">Category</h3>
                <p className="text-gray-600">{recipe.category}</p>
              </CardContent>
            </Card>
          )}
          {recipe.totalIngredients && (
            <Card className="bg-gray-50 shadow-sm rounded-lg p-4">
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Ingredients
                </h3>
                <p className="text-gray-600">{recipe.totalIngredients}</p>
              </CardContent>
            </Card>
          )}
          {recipe.totalSteps && (
            <Card className="bg-gray-50 shadow-sm rounded-lg p-4">
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-700">Total Steps</h3>
                <p className="text-gray-600">{recipe.totalSteps}</p>
              </CardContent>
            </Card>
          )}
        </aside>
      </div>
      :
      <h1>Please Acess The Website from the / route </h1>
  );
};

export default RecipeDetail;