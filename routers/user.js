const express = require('express');
const router = express.Router();
const {getAllUsers, getSingleUser, addUser, updateUser, deleteUser} = require('../controllers/user');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;