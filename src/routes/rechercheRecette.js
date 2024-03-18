import { Router } from "express"

export const getrechercheRecette = async (searchTerms = undefined) => {
    if (!searchTerms) {
      return []
    }
  
    const apiKey = process.env.APIKEY
    console.log(apiKey)
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerms}`
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };
  
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Erreur de recherche recette');
    }
    const data = await response.json();
    return data.results;
}
