const Carro = require('../models/model');

exports.index = function (req, res, next) {
	Carro.find({}, function (err, carros) {
		if (err) return next(err);

		res.render('index.ejs', {title: 'Frota ZeroPay', carros: carros});
	})
};

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
        res.redirect('/frota/')
    })
};

exports.visualizar_carro = function (req, res, next) {
    Carro.findOne({placa: req.params.placa}, function (err, carro) {
        if (err) return next(err);
        res.send(carro);
    })
};

exports.editar_carro = function (req, res, next) {
	Carro.findOne({placa: req.params.placa}, function (err, carro) {
        if (err) return next(err);
       	
       	if(carro._id) {
			Carro.findByIdAndUpdate(carro._id, {$set: req.body}, function (err, carro) {
		        if (err) return next(err);
		        res.send('Os dados do carro foram atualizados com sucesso!');
		    });	
		} else {
			res.send('Os não foram alterados devido algum erro.');
		}
    })    
};

exports.excluir_carro = function (req, res, next) {
    Carro.findOne({placa: req.params.placa}, function (err, carro) {
        if (err) return next(err);
       	
       	if(carro._id) {
			Carro.findByIdAndRemove(carro._id, function (err) {
		        if (err) return next(err);
		        res.send('O carro foi excluído com sucesso!');
		    })
		} else {
			res.send('Os não foram alterados devido algum erro.');
		}
    })
};