const express = require('express');
const router = express.Router();
const user = require('../models/user')


//get back users
router.get('/', async (req,res) => {
    try{
        const AllUsers = await user.find();
            res.json(AllUsers);
        } catch(err){
            res.json({message: err});
        }
});

//submits users
router.post('/', async (req,res) => {
    const User = new user({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    try{
    const userSaved = await User.save()
   res.json(userSaved);
    } catch(err){
        res.json({message: err});
    }
});

//get specific user
router.get('/:userId',  async (req,res) => {
    try {
   const User = await user.findById(req.params.userId);
   res.json(User)
} catch(err){
    res.json({message: err});
}
   
});

//delete user
router.delete('/:userId',  async (req,res) => {
    try {
   const removedUser = await user.findByIdAndDelete({_id: req.params.userId});
   res.json(removedUser)
} catch(err){
    res.json({message: err});
}
   
});

//update a user
router.patch('/:userId',  async (req,res) => {
    try {
   const updatedUser = await user.findByIdAndUpdate({_id: req.params.userId}, {$set: {name: req.body.name}});
   res.json(updatedUser)
} catch(err){
    res.json({message: err});
}
   
});



module.exports = router;