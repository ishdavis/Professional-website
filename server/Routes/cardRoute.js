const express = require('express');
const cardRouter = express.Router();
const Card = require('../mongo_models/Card_Schema.js')
cardRouter
    .route('/')
        .post((req,res) => {
            let card = new Card(req.body);
            card.save();
            res.status(201).send(card)
        })
        .get((req,res) => {
            var query = Card.find({});
            query.exec(function(err,cards){
                if(err){
                    res.send(400);
                }
                else{
                    res.send(JSON.stringify(cards));
                }
            });
        })
cardRouter
    .route('/:cardType')
        .post((req,res) => {
            var query = Card.find({cardType: req.params.cardType}).sort({'_id': -1}).limit(req.body.cardLimit);
            query.exec(function(err,cards){
                if(err){
                    res.send(400);
                }
                else{
                    res.send(JSON.stringify(cards));
                }
            });
        })
cardRouter
    .route('/:cardType/:id')
        .post((req,res) => {
            var query;
            if(req.body["direction"] == "next"){
                query = Card.find({cardType: req.params.cardType, '_id': { $lt: req.params.id}}).sort({'_id': -1}).limit(req.body.cardLimit);
            }
            else{
                query = Card.find({cardType: req.params.cardType, '_id': {$gt: req.params.id }}).sort({'_id': 1}).limit(req.body.cardLimit);
            }
            query.exec(function(err,cards){
                if(err){
                    res.send(400);
                }
                else{
                    if(req.body["direction"] != "next"){
                        res.send(JSON.stringify(cards.reverse()));
                    }
                    else{
                        res.send(JSON.stringify(cards));
                    }
                }
            });
        })
        .delete((req,res) => {
            query = Card.findByIdAndRemove(req.params.id);
            query.exec(function(err){
                if(err){
                    res.sendStatus(404);
                }
                else{
                    res.sendStatus(200);
                }
            });
        })
        .get((req,res) => {
            query = Card.findById(req.params.id);
            query.exec(function(err,card){
                if(err){
                    res.sendStatus(404);
                }
                else{
                    res.send(JSON.stringify(card));
                }
            });
        })
        .patch((req,res) => {
            query = Card.findByIdAndUpdate(req.params.id,req.body);
            query.exec(function(err,card){
                if(err){
                    res.sendStatus(404);
                }
                else{
                    res.sendStatus(200);
                }
            });
        })
module.exports = cardRouter;