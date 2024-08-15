const express = require('express');
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerForEvent,
} = require('../controllers/eventController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .post(protect, createEvent)
  .get(protect, getEvents);

router.route('/:id')
  .get(protect, getEventById)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

router.post('/:id/register', protect, registerForEvent);

module.exports = router;
