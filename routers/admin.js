const express = require('express');
const router = express.Router();
const {getAllAdmins, getSingleAdmin, addAdmin, updateAdmin, deleteAdmin, banUser, disbanUser} = require('../controllers/admin');

router.get('/', getAllAdmins);
router.get('/:id', getSingleAdmin);
router.post('/', addAdmin);
router.put('/:id', updateAdmin);
router.put('/:id/ban', banUser);
router.put('/:id/disban', disbanUser);
router.delete('/:id', deleteAdmin);



module.exports = router;