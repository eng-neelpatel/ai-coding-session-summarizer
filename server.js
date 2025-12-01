const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/sessions', (req, res) => {
  res.json({
    sessions: [
      {
        id: 1,
        date: '2025-11-30',
        summary: 'Worked on array manipulation problems',
        topics: ['Arrays', 'Two Pointers'],
        difficulty: 'Medium',
        duration: 120
      }
    ]
  });
});

app.post('/api/github/sync', async (req, res) => {
  const { username } = req.body;
  // TODO: Implement GitHub API integration
  res.json({ message: 'GitHub sync initiated', username });
});

app.post('/api/ai/summarize', async (req, res) => {
  const { sessionData } = req.body;
  // TODO: Implement AI summarization
  res.json({
    summary: 'AI-generated summary of your coding session',
    topics: ['DSA', 'Problem Solving'],
    difficulty: 'Medium'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
