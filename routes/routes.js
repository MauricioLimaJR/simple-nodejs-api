const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const frotaController = require('../controllers/controller');

// CRUD routes
router.post('/adicionar', frotaController.adicionar_carro);
router.get('/:placa', frotaController.visualizar_carro);
router.put('/:placa/editar', frotaController.editar_carro);
router.delete('/:placa/excluir', frotaController.excluir_carro);

module.exports = router;