const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        date: req.body.date
    });
    newItem.save().then(item => res.json(item));
}); 42

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ succes: true })))
        .catch(err => res.status(404).json({ success: false }))
});
module.exports = router;