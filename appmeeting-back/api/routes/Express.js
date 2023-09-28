const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Créer une instance de l'application Express
const app = express();

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB (assurez-vous d'ajuster l'URL de connexion)
mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connecté à MongoDB');
    })
    .catch((error) => {
        console.error('Erreur de connexion à MongoDB :', error);
    });

// Importez le modèle de publication
const Post = require('./models/post'); // Assurez-vous que le chemin est correct en fonction de l'emplacement de votre modèle

// Routes pour les opérations CRUD sur les publications

// Liste de toutes les publications
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Créer une nouvelle publication
app.post('/api/posts', async (req, res) => {
    const { title, content, start_date, end_date } = req.body;
    
    const post = new Post({
        title,
        content,
        start_date,
        end_date,
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtenir une publication par ID
app.get('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Publication non trouvée' });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mettre à jour une publication par ID
app.put('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const { title, content, start_date, end_date } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(postId, { title, content, start_date, end_date }, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ message: 'Publication non trouvée' });
        }

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Supprimer une publication par ID
app.delete('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        const deletedPost = await Post.findByIdAndRemove(postId);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Publication non trouvée' });
        }

        res.json({ message: 'Publication supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Port d'écoute du serveur Express
const port = process.env.PORT || 3000;

// Démarrer le serveur Express
app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});
