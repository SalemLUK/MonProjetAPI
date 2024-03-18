export const getdetailRecette = async (id = undefined) => {
    if (!id) {
      return []
    }
  
    const apiKey = process.env.myAPIKey
    console.log(apiKey)
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };
  
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Erreur de detail de recette');
    }
    const data = await response.json();
    return data;
}
