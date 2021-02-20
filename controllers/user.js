const User = require('../models/User');
const asyncErrorWrapper = require('express-async-handler');
const CustomError = require('../helpers/error/CustomError');

//User koleksiyonunda'ki bütün dökümanları almamızı sağlayan controller
const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
    const users = await User.find();
    
    res
        .status(200)
        .json({
            success: true,
            data: users
        });

});

//User koleksiyonundan id girerek tek bir döküman almamızı sağlayan controller
const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
   
    res
        .status(200)
        .json({
            success: true,
            data: user
        });
    
});

//User koleksiyonuna yeni bir kullanıcı eklememizi sağlayan controller
const addUser = asyncErrorWrapper(async (req, res, next) => {
    const user = req.body;
    const users = await User.create(user);
    try{
    res
        .status(200)
        .json({
            success: true,
            data: users
        });
    }
    catch(err){
        return next(new TypeError("sad"));
    }
});

//Kullanıcı güncellememizi sağlayan controller
const updateUser = asyncErrorWrapper(async (req, res, next) => {
    const { name, email, password } = req.body;
    const id = req.params.id;
    let user = await User.findById(id);
    user.name = name;
    user.email = email;
    user.password = password;
    user = await user.save();

    res
        .status(200)
        .json({
            success: true,
            data: user
        });
});

//Kullanıcı silmemizi sağlayan controller
const deleteUser = asyncErrorWrapper(async (req, res, next) => {
    const id = req.params.id;

    let user = await User.findByIdAndDelete(id);

    res
        .status(200)
        .json({
            success: true,
            data: "User deleted was successfully."
        });
});




module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    updateUser,
    deleteUser
};