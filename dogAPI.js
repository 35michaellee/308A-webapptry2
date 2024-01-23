
import { renderResultsDog } from './renderResultsDog.js';
const apiKey = "live_IFow6B5q1w9kKsLSb4t7cOV0d1WzrM2CiNDRwTNtsIbt2H1zzULux4mBxOWeWebu";


axios.defaults.headers.common["x-api-key"] =
  "live_XpOmzl4ceu5cTZUci3VCwCDlwaR1Q6dSkORcrUG7NRqtJsf82yWkFB7v2htb6fl5";
axios.defaults.baseURL = "https://api.thedogapi.com/v1";



// Fetch breed images
export async function fetchBreedImages(selectedBreedId) {
    try {
        let params={
            limit: 10,
            breed_ids: selectedBreedId,
          };
        const response = await axios.get('/images/search', { params });
        // Log the request URL string
        const requestUrl = axios.getUri({ url: '/images/search', params });
    
        console.log(requestUrl+"&api_key="+apiKey,response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching Australian Terrier images:", error);
        throw error;
      }
    }

// Fetch breeds
export async function fetchBreeds() {
    try {
        const response = await axios.get("/breeds");
        return response.data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        throw error;
    }
}

// Initial load
export async function initialLoad() {
    try {
        const breeds = await fetchBreeds();
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);  // Make sure breedSelect is defined
        });
    } catch (error) {
        console.error("Error during initial load:", error);
    }
}

// Handle dog form submit
export async function handleDogFormSubmit(event) {
    event.preventDefault();
    
    // Get the selected dog breed
    var selectElement = document.getElementById('breedSelect');
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedText = selectedOption.text;
    renderResultsDog(selectedText);

    // Fetch breed images and handle results
    try {
        let images = await fetchBreedImages(selectedText);
        //console.log(images);

        // Render results with selected text and images
        renderResultsDog(selectedText, images);
    } catch (error) {
        console.error('Error handling dog form submit:', error);
        // Handle the error appropriately
    }
}


// import {renderResultsDog} from './renderResultsDog.js';





// axios.defaults.headers.common["x-api-key"] = "live_IFow6B5q1w9kKsLSb4t7cOV0d1WzrM2CiNDRwTNtsIbt2H1zzULux4mBxOWeWebu";
// axios.defaults.baseURL = "https://api.thedogapi.com/v1";

// export async function fetchBreedImages(selectedBreedId) {
//     try {
//       const response = await axios.get(
//         `/images/search?limit=10&breed_ids=${selectedBreedId}`
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching breed images:", error);
//       throw error;
//     }
//   }


// export async function handleDogFormSubmit(event) {
//     event.preventDefault();

// var selectElement = document.getElementById('breedSelect');

// var selectedIndex = selectElement.selectedIndex;

// var selectedOption = selectElement.options[selectedIndex];

// var selectedText = selectedOption.text;

// // Log or use the selected text as needed
// //console.log("Selected Text:", selectedText);
// try {
//     // Fetch breed images and wait for all promises to resolve
//     let imagesPromises = fetchBreedImages(selectedText);
//     //let images = await Promise.all(imagesPromises);

//     console.log(typeof(imagesPromises));

//     // Render results with selected text and images
//    // renderResultsDog(selectedText, images);
// } catch (error) {
//     console.error('Error fetching breed images:', error);
//     // Handle the error appropriately
// }
// renderResultsDog(selectedText);
// }
























// export async function fetchBreeds() {
//     try {
//         const response = await axios.get("/breeds");
       
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching breeds:", error);
//         throw error;
//     }
// }

// export async function initialLoad() {
//     try {
//         const breeds = await fetchBreeds();
//         breeds.forEach(breed => {
//             const option = document.createElement("option");
//             option.value = breed.id;
//             option.textContent = breed.name;
//             breedSelect.appendChild(option);
//         });
//     } catch (error) {
//         console.error("Error during initial load:", error);
//     }
// }

// export async function  handledogFormSubmit(event){
//     event.preventDefault();
    
//      // Get the selected dog type value
//      var selectElement = document.getElementById('breedSelect');
//      var selectedOption = selectElement.options[selectElement.selectedIndex];

//      // Get the text content of the selected option
//      var selectedText = selectedOption.text;
//       //console.log(selectedText);

//      // Display the selected dog type
//      try {
//         renderResultsDog(selectedText);
        
//     } catch (error) {
//         console.error('Error:', error);
//     }

//      //make api response 
     
//     //  var resultContainer = document.getElementById('dogTypeResult');
//     //  resultContainer.innerHTML = `<p>You selected: ${selectedText}</p>`;

//     // try {
//     //     const response = await axios.request(options);
//     //     renderResults(response.data.results);
//     // } catch (error) {
//     //     console.error('Error:', error);
//     // }

// }