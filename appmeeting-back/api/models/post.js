const mongoose = require('mongoose');

// Schéma du modèle de publication
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    // Ajoutez d'autres champs ici en fonction de vos besoins
});

// Créez le modèle de publication en utilisant le schéma
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
