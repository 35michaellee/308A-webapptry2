// cuisineForm.js


import { renderResults } from './renderResults.js';

const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    headers: {
        'X-RapidAPI-Key': '9031173153msh3c2311613afec70p1e00a9jsn508c4514c1dc',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    },
    params: {
        query: 'salad',
        cuisine: 'italian',
        instructionsRequired: 'true',
        addRecipeInformation: 'true',
    }
};

export async function handleCuisineFormSubmit(event) {
    event.preventDefault();
    var selectedCuisine = document.getElementById('cuisine').value;
    options.params.cuisine = selectedCuisine;

    try {
        const response = await axios.request(options);
        renderResults(response.data.results);
    } catch (error) {
        console.error('Error:', error);
    }
}