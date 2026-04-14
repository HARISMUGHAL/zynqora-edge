const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Operator name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Network alias (email) is required'],
    index: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  message: { 
    type: String 
  },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'qualified', 'closed'],
    default: 'new' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Lead', leadSchema);
