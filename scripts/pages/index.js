import { photographerFactory } from "../factories/photographerFactory.js";
import { fetchJsonData } from "../utils/fetchJsonData.js";

 // Generates the HTML for each photographer
 async function generatePhotographerHtml(photographers) {
   // Get the section element that will contain the photographer cards
   const photographersSection = document.querySelector(".photographer-section");

   // Loop through the photographers array and create a card for each one

   photographers.forEach((photographer) => {
     // Create a photographer model object from the data
     const photographerModel = photographerFactory(photographer);
     // Get the DOM element for the photographer card
     const userCardDOM = photographerModel.getPhotographerCardDOM();
     // Add the card to the photographers section
     photographersSection.appendChild(userCardDOM);
   });
 }

 // Fetches the photographer data and renders the cards
 async function renderPhotographerProfiles() {
   // Get the data for the photographers
   const { photographers } = await fetchJsonData();
   // Generate the HTML for the photographer cards
   generatePhotographerHtml(photographers);
 }

 // Render all photographer profiles
 renderPhotographerProfiles();

async function getPhotographers() {
        return fetch('/data/photographers.json')
                .then(response =>  response.json())
                .catch(error => console.log(error))

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        const data = await getPhotographers();
        console.log(data)
        displayData(data.photographers);
    }
    
    init();
