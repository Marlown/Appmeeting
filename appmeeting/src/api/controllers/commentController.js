// Importez ici votre modèle de commentaire s'il existe
const Comment = require('../models/comment'); // Assurez-vous d'importer correctement votre modèle

// Créer un nouveau commentaire
exports.createComment = async (req, res) => {
  try {
    const { text, userId, postId } = req.body;
    const newComment = new Comment({ text, userId, postId });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du commentaire' });
  }
};

// Obtenir un commentaire par son ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du commentaire' });
  }
};

// Mettre à jour un commentaire par son ID
exports.updateCommentById = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du commentaire' });
  }
};

// Supprimer un commentaire par son ID
exports.deleteCommentById = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndRemove(req.params.commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du commentaire' });
  }
};
