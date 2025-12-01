const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

class AIService {
  async summarizeSession(commitData, problemData) {
    const prompt = `
You are an AI coding coach. Analyze this coding session and provide:
1. A 3-5 sentence summary of what was worked on
2. List of topics/concepts covered (e.g., Arrays, Dynamic Programming, REST APIs)
3. Difficulty assessment (Easy/Medium/Hard)
4. Areas for improvement

Commit Data:
${JSON.stringify(commitData, null, 2)}

Problem Data:
${JSON.stringify(problemData, null, 2)}

Respond in JSON format:
{
  "summary": "...",
  "topics": ["..."],
  "difficulty": "...",
  "improvements": ["..."]
}
`;

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 500
      });

      const response = JSON.parse(completion.choices[0].message.content);
      return response;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error('Failed to generate AI summary');
    }
  }

  async generateRoadmap(userHistory, weakAreas) {
    const prompt = `
Based on the user's coding history and weak areas, generate a personalized 7-day learning roadmap.

User History:
${JSON.stringify(userHistory, null, 2)}

Weak Areas:
${JSON.stringify(weakAreas, null, 2)}

Create a day-by-day plan with:
- LeetCode problems (with links)
- Topics to study
- Mini-projects or tasks
- Estimated time commitment

Return as JSON array of 7 days.
`;

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
        max_tokens: 1500
      });

      const roadmap = JSON.parse(completion.choices[0].message.content);
      return roadmap;
    } catch (error) {
      console.error('Roadmap Generation Error:', error);
      throw new Error('Failed to generate roadmap');
    }
  }

  async detectWeakAreas(sessions) {
    const topicPerformance = {};
    
    sessions.forEach(session => {
      session.topics.forEach(topic => {
        if (!topicPerformance[topic]) {
          topicPerformance[topic] = { count: 0, avgDifficulty: 0 };
        }
        topicPerformance[topic].count++;
      });
    });

    // Find topics with low frequency (weak areas)
    const weakAreas = Object.entries(topicPerformance)
      .filter(([_, data]) => data.count < 3)
      .map(([topic]) => topic);

    return weakAreas;
  }
}

module.exports = new AIService();
