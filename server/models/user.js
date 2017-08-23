var mongoose = require ('mongoose');

var User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {User};
