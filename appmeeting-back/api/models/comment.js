const mongoose = require('mongoose');

// Schéma du modèle de commentaire
const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Si vous avez un modèle User
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Si vous avez un modèle Post
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Créez le modèle de commentaire à partir du schéma
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
