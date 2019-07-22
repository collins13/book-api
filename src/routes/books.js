const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
// const Book = require('../../models/Book');
const bookController = require('../../controller/bookController');

// router.get("/", (req, res) => {
//     res.status(200).json({ message: "hello world" });
// });
router.get('/', bookController.get);
router.post('/', bookController.post);

router.get('/:id', bookController.getById);
router.put('/:id', bookController.put);
router.patch('/:id', bookController.patch);
router.delete('/:id', bookController.delete);

module.exports = router;
