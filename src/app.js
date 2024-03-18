import express, {Router} from 'express';
import logger from 'pino-http';
import {getrechercheRecette} from "./routes/rechercheRecette.js";
import {getdetailRecette} from "./routes/detailRecherche.js";
import { postrechercheNutriment } from "./routes/rechercheNutriment.js"; // Importez la fonction de recherche de nutriments
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' }));

const router = Router();
app.use('/', router);


// Route pour servir la page d'accueil
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
router.get('/rechercheRecette', async (req, res) => {
    const terms = req.query.search;
    const data = await getrechercheRecette(terms);
    res.json(data);
})
router.get('/detailRecette', async (req, res) => {
    const id = req.query.id;
    const data = await getdetailRecette(id);
    res.json(data);
})

// Nouvelle route pour la recherche de nutriments
router.post('/rechercheNutriment', async (req, res) => {
    const nutriment = req.body.nutriment; // Utilisez req.body pour récupérer le paramètre envoyé dans le corps de la requête
    const data = await postrechercheNutriment(nutriment); // Appelez la fonction de recherche de nutriments
    res.json(data);
});


export default app;
