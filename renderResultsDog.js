export function renderResultsDog(results) {
    var resultContainer = document.getElementById('dogTypeResult');
    resultContainer.innerHTML = `<p>You selected: ${results}</p>`;
    
}