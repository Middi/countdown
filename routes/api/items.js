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
        date: req.body.date,
        id: req.body.id
    });
    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Item.findOneAndRemove({ id: req.params.id },  function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Item Deleted!'});
    });
});
module.exports = router;