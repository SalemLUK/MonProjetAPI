import fetch from 'node-fetch'; // Importez fetch si ce n'est pas déjà fait dans votre projet

export const postrechercheNutriment = async (Nutriment = undefined) => {
    if (!Nutriment) {
      return [];
    }
  
    const myAPIKey = process.env.myAPIKey; // Assurez-vous de remplacer MY_NUTRITIONIX_API_KEY par le nom de votre variable d'environnement contenant la clé API Nutritionix
    const url = "https://api.nutritionix.com/v2/natural/nutrients"; // Modifiez l'URL pour correspondre à l'API Nutritionix
    
    const options = {
      method: 'POST', // Utilisez la méthode POST pour les requêtes à l'API Nutritionix
      headers: {
        'Content-Type': 'application/json', // Ajoutez l'en-tête Content-Type nécessaire pour les requêtes POST
        'x-app-id': '1ccaa468', // Remplacez VOTRE_APP_ID par votre ID d'application Nutritionix
        'x-app-key': myAPIKey, // Remplacez VOTRE_APP_KEY par votre clé d'application Nutritionix
        'x-remote-user-id': '0' // Vous pouvez mettre n'importe quelle valeur pour l'identifiant utilisateur distant
      },
      body: JSON.stringify({ query: Nutriment, timezone: 'US/Eastern' }) // Corps de la requête contenant la recherche de nutriments et le fuseau horaire
    };
  
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Erreur de recherche de Nutriment');
    }
    const data = await response.json();
    console.log(data);
    return data;
};



