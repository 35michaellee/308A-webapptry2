export function renderResults(results) {
    var container = document.getElementById('recipeContainer');
    container.innerHTML = '';

    results.forEach(function (recipe) {
        var recipeDiv = document.createElement('div');

        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 200px; height: 150px;">
            <p>ID: ${recipe.id}</p>
            <h4>Nutritional Information:</h4>
            <ul>
                ${recipe.nutrition.nutrients.map(nutrient => `<li>${nutrient.name}: ${nutrient.amount} ${nutrient.unit}</li>`).join('')}
            </ul>
            <p>Summary: ${recipe.summary}</p>
            <a href="${recipe.sourceUrl}" target="_blank">Link to Recipe</a>
            <hr>
        `;

        container.appendChild(recipeDiv);
    });
}