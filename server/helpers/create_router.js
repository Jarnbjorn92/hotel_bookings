const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

    const router = express.Router()

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(err)
            res.status(500);
            res.json({status: 500, error:err})
         })
         });
    
         router.get('/:id', (req,res) => {
            const id = req.params.id
            collection
            .findOne({_id: ObjectID(id)})
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err)
                res.status(err)
                res.status(500)
                res.json({status: 500, error:err})
         })
        });

        router.post('/', (req, res) => {
            const newBookingData = req.body
            collection.insertOne(newBookingData)
            .then((results) => {
                res.json(results.ops[0])
            })
            .catch((err) => {
                console.error(err)
                res.status(err)
                res.status(500)
                res.json({status: 500, error:err})
         })
        });

        router.delete('/:id', (req, res) => {
            const id = req.params.id
            collection.deleteOne({_id: ObjectID(id)})
            .then((results) => {
                res.json(results)
            })
            .catch((err) => {
                console.log(err)
                res.status(500)
                res.json({status: 500, error: err})
               })
            })

            return router
};

module.exports = createRouter;