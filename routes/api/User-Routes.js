const router = require('express').Router();

const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// get and post all user

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// get put delete one user

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add/remove friend

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;