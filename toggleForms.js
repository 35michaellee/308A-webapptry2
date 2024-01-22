
export function toggleForms() {
    var cuisineForm = document.getElementById('recipeFinder');
    var dogTypeForm = document.getElementById('dogFinder');

    cuisineForm.classList.toggle('hidden');
    dogTypeForm.classList.toggle('hidden');
}