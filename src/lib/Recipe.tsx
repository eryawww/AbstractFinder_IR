class Recipe {
    title: string;
    description: string | null;
    cuisine: string;
    url: string;
    wikidata: string | null;
    ingredients: string[];
    steps: string[];
    category: string;
    totalSteps: number;
    loves: number;
    totalIngredients: number;
    tags: string;
    author: string;
    rating: number;
    cookTime: string;
    prepTime: string;
    diet: string;
    image: string | null;
    country: string | null;

    constructor(
        title: string,
        description: string | null,
        cuisine: string,
        url: string,
        wikidata: string | null,
        steps: string[],
        ingredients: string[],
        category: string,
        totalSteps: number,
        loves: number,
        totalIngredients: number,
        tags: string,
        author: string,
        rating: number,
        cookTime: string,
        prepTime: string,
        diet: string,
        image: string | null,
        country: string | null
    ) {
        this.title = title;
        this.description = description?? `${title} yang dibuat dengan ${ingredients}`;
        this.cuisine = cuisine;
        this.url = url;
        this.wikidata = wikidata;
        this.steps = steps;
        this.ingredients = ingredients;
        this.category = category;
        this.totalSteps = totalSteps;
        this.loves = loves;
        this.totalIngredients = totalIngredients;
        this.tags = tags;
        this.author = author;
        this.rating = rating;
        this.cookTime = cookTime;
        this.prepTime = prepTime;
        this.diet = diet;
        this.image = image;
        this.country = country;
    }

    static parse(json: any): Recipe {
        return new Recipe(
            json.title,
            json.description,
            json.cuisine,
            json.url,
            json.wikidata,
            json.steps,
            json.ingredients,
            json.category,
            json.totalSteps,
            json.loves,
            json.totalIngredients,
            json.tags,
            json.author,
            json.rating,
            json.cookTime,
            json.prepTime,
            json.diet,
            json.image,
            json.country
        );
    }

    static to_json(recipe: Recipe): any {
        return {
            title: recipe.title,
            description: recipe.description,
            cuisine: recipe.cuisine,
            url: recipe.url,
            wikidata: recipe.wikidata,
            steps: recipe.steps,
            loves: recipe.loves,
            ingredients: recipe.ingredients,
            category: recipe.category,
            totalSteps: recipe.totalSteps,
            totalIngredients: recipe.totalIngredients,
            tags: recipe.tags,
            author: recipe.author,
            rating: recipe.rating,
            cookTime: recipe.cookTime,
            prepTime: recipe.prepTime,
            diet: recipe.diet,
            image: recipe.image,
            country: recipe.country
        };
    }
}

export default Recipe;