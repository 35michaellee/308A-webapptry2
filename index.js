
const dogAPI="live_IFow6B5q1w9kKsLSb4t7cOV0d1WzrM2CiNDRwTNtsIbt2H1zzULux4mBxOWeWebu";
const googleAPIKEY="AIzaSyD25Fx-VIfJhxow4SGI27aEMuc8nhOT9CU";
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  params: {
    query: 'salad',
    cuisine: 'italian',
    addRecipeInformation: 'true',
    
  },
  headers: {
    'X-RapidAPI-Key': '9031173153msh3c2311613afec70p1e00a9jsn508c4514c1dc',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

// Import modules
import { toggleForms } from './toggleForms.js';
import { fetchBreeds, initialLoad, handleDogFormSubmit } from './dogAPI.js';
import { handleCuisineFormSubmit } from './cuisineForm.js';
import { renderResults } from './renderResults.js'; // Add this line

// Add an event listener to your toggle button
document.getElementById('toggleButton').addEventListener('click', toggleForms);

// Fetch breeds and initialize breed options
initialLoad();

// Attach event listener for cuisine form submission
document.getElementById('cuisineForm').addEventListener('submit', handleCuisineFormSubmit);


//dogtypeform submitt
document.getElementById('breedSelect').addEventListener('change', handleDogFormSubmit); 


