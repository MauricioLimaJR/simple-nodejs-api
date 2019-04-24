const Carro = require('../models/model');

exports.adicionar_carro = function (req, res, next) {

    let carro = new Carro({
    	modelo: req.body.modelo,
		anoFabricacao: req.body.anoFabricacao,
		marca: req.body.marca,
		placa: req.body.placa,
		kilometragem: req.body.kilometragem 
    });

    carro.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Carro adicionado na frota com sucesso!')
    })
};

exports.visualizar_carro = function (req, res, next) {
	/*findById(id, projection, options, callback) {
	.findOne({_id: id}, projection, options, callback);*/
    Carro.findOne({placa: req.params.placa}, function (err, carro) {
    // Carro.findById(req.params.placa, function (err, carro) {
        if (err) return next(err);
        res.send(carro);
    })
};

exports.editar_carro = function (req, res, next) {
    Carro.findByIdAndUpdate(req.params.placa, {$set: req.body}, function (err, carro) {
        if (err) return next(err);
        res.send('Os dados do carro foram atualizados com sucesso!');
    });
};

exports.excluir_carro = function (req, res, next) {
    Carro.findByIdAndRemove(req.params.placa, function (err) {
        if (err) return next(err);
        res.send('O carro foi excluído com sucesso!');
    })
};