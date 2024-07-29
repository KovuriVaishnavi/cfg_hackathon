const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentFeedbackSchema = new Schema({
  from_username: {
    type: 'String',
    required: true,
  },
  to_username: {
    type: 'String',
    required: true,
  },
  answer1: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  answer2: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  },
  answer3: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const volunteerFeedbackSchema = new Schema({
  from_username: {
    type: "String",
    required: true,
  },
  to_username: {
    type: "String",
    required: true,
  },
  answer1: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  answer2: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  },
  answer3: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const coordinatorFeedbackSchema = new Schema({
  from_username: {
    type: "String",
    required: true,
  },
  to_username: {
    type: "String",
    required: true,
  },
  answer1: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  answer2: {
    type: Number,
    min: 1,
    max: 3,
    required: true
  },
  answer3: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const StudentFeedback = mongoose.model('StudentFeedback', studentFeedbackSchema);
const VolunteerFeedback = mongoose.model('VolunteerFeedback', volunteerFeedbackSchema);
const CoordinatorFeedback = mongoose.model('CoordinatorFeedback', coordinatorFeedbackSchema);

module.exports = { StudentFeedback, VolunteerFeedback, CoordinatorFeedback };
