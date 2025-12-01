const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  source: {
    type: String,
    enum: ['github', 'leetcode', 'manual'],
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  topics: [{
    type: String
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  duration: {
    type: Number, // in minutes
    default: 60
  },
  commits: [{
    sha: String,
    message: String,
    url: String,
    files: [String]
  }],
  problems: [{
    title: String,
    url: String,
    difficulty: String,
    status: String
  }],
  aiAnalysis: {
    improvements: [String],
    nextSteps: [String],
    strengths: [String]
  },
  metadata: {
    linesOfCode: Number,
    languagesUsed: [String],
    filesModified: Number
  }
}, {
  timestamps: true
});

// Index for faster queries
SessionSchema.index({ userId: 1, date: -1 });
SessionSchema.index({ topics: 1 });

module.exports = mongoose.model('Session', SessionSchema);
