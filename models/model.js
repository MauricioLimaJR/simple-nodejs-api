const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarroSchema = new Schema({
	modelo: {type: String, required: true, max: 20},
	anoFabricacao: {type: Number, required: true},
	marca: {type: String, required: true, max: 20},
	placa: {type: String, required: true, max: 6},
	kilometragem: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Carro', CarroSchema);