const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController.js');

// Créer un commentaire
router.post('/', commentController.createComment);

// Obtenir un commentaire spécifique par son ID
router.get('/:commentId', commentController.getCommentById);

// Mettre à jour un commentaire spécifique par son ID
router.put('/:commentId', commentController.updateCommentById);

// Supprimer un commentaire spécifique par son ID
router.delete('/:commentId', commentController.deleteCommentById);

module.exports = router;
