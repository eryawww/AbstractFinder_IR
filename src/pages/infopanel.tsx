"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recipe = {
  title: "Karnataka Style Avarekalu Chitranna",
  description:
    "A delightful dish made from field beans tossed with lemon rice, originating from Karnataka. Often enjoyed during special occasions and festivals. Serve with mango pickle for an authentic experience.",
  cuisine: "Karnataka",
  url: "https://www.archanaskitchen.com/karnataka-style-avarekalu-chitranna-recipe-field-beans-tossed-with-lemon-rice",
};

const ingredients = [
  { name: "Field Beans", image: "https://via.placeholder.com/100" },
  { name: "Lemon", image: "https://via.placeholder.com/100" },
  { name: "Rice", image: "https://via.placeholder.com/100" },
];

const steps = [
  "Cook the rice until fluffy and let it cool.",
  "Prepare a seasoning with curry leaves, mustard seeds, and green chilies.",
  "Toss the cooked rice with the seasoning, adding field beans and lemon juice.",
];

const RecipeDetail: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white shadow-xl rounded-xl p-6 flex flex-col lg:flex-row gap-8">
        <Image
          src="https://via.placeholder.com/600x400"
          alt="Dish Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800">{recipe.title}</h1>
          <Badge variant="secondary" className="bg-yellow-300 text-yellow-900">
            {recipe.cuisine}
          </Badge>
          <p className="text-gray-600 text-lg">{recipe.description}</p>
          <Button
            asChild
            className="px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-600 transition-transform hover:scale-105"
          >
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              View Full Recipe
            </a>
          </Button>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Ingredients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {ingredients.map((ingredient, index) => (
            <Card
              key={index}
              className="text-center shadow-md rounded-lg transition-transform hover:scale-105"
            >
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={100}
                height={100}
                className="mx-auto rounded-full shadow-sm"
              />
              <CardContent>
                <p className="font-medium text-gray-700 mt-4">{ingredient.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Steps</h2>
        <div className="space-y-6 mt-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="shadow-md border-l-4 border-yellow-500 p-4 hover:bg-yellow-50 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="font-bold text-2xl text-yellow-600">
                  {index + 1}.
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;
