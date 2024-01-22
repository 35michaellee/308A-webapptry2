



const dogAPI = "live_IFow6B5q1w9kKsLSb4t7cOV0d1WzrM2CiNDRwTNtsIbt2H1zzULux4mBxOWeWebu";

axios.defaults.headers.common["x-api-key"] = dogAPI;
axios.defaults.baseURL = "https://api.thedogapi.com/v1";
const breedSelect = document.getElementById("breedSelect");

export async function fetchBreeds() {
    try {
        const response = await axios.get("/breeds");
        return response.data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        throw error;
    }
}

export async function initialLoad() {
    try {
        const breeds = await fetchBreeds();
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error during initial load:", error);
    }
}

