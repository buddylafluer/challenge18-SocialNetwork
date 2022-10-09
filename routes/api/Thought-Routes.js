const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// create a thought

router
  .route('/:userId')
  .post(addThought);

//get all thoughts

  router
  .route('/')
  .get(getAllThoughts);

// get put delete with id

router
.route('/:id')
.get(getThoughtById)
.put(updateThought);



// add/remove reaction

 router
 .route('/:userId/:thoughtId')
 .put(addReaction)
 .delete(removeThought);

 router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;