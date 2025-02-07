const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  subjectName: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  resources: [
    {
      type: {
        type: String,
        enum: ['pdf', 'video', 'ppt'],
        required: true
      },
      url: {
        type: String,
        required: true
      },
      addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
        required: true
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
        required: true
      }
    }
  ]
}, {
  timestamps: true
});

const ResourceSchema = mongoose.models.ResourceSchema || mongoose.model('ResourceSchema', resourceSchema);

module.exports = ResourceSchema;
