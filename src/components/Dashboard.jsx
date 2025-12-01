import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalHours: 0,
    currentStreak: 0,
    topTopics: []
  });

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sessions');
      const data = await response.json();
      setSessions(data.sessions);
      calculateStats(data.sessions);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      setLoading(false);
    }
  };

  const calculateStats = (sessions) => {
    const totalHours = sessions.reduce((acc, s) => acc + s.duration, 0) / 60;
    const topics = sessions.flatMap(s => s.topics);
    const topicCounts = {};
    topics.forEach(t => topicCounts[t] = (topicCounts[t] || 0) + 1);
    const topTopics = Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic]) => topic);

    setStats({
      totalSessions: sessions.length,
      totalHours: Math.round(totalHours * 10) / 10,
      currentStreak: 7,
      topTopics
    });
  };

  if (loading) {
    return <div className="dashboard loading">Loading your sessions...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🚀 Your Coding Journey</h1>
        <button className="sync-btn">Sync GitHub</button>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.totalSessions}</h3>
          <p>Total Sessions</p>
        </div>
        <div className="stat-card">
          <h3>{stats.totalHours}h</h3>
          <p>Hours Coded</p>
        </div>
        <div className="stat-card">
          <h3>{stats.currentStreak}🔥</h3>
          <p>Day Streak</p>
        </div>
        <div className="stat-card">
          <h3>{stats.topTopics.length}</h3>
          <p>Topics Covered</p>
        </div>
      </div>

      <section className="sessions-section">
        <h2>Recent Sessions</h2>
        <div className="sessions-list">
          {sessions.map(session => (
            <div key={session.id} className="session-card">
              <div className="session-header">
                <span className="session-date">{session.date}</span>
                <span className={`difficulty ${session.difficulty.toLowerCase()}`}>
                  {session.difficulty}
                </span>
              </div>
              <p className="session-summary">{session.summary}</p>
              <div className="session-topics">
                {session.topics.map(topic => (
                  <span key={topic} className="topic-tag">{topic}</span>
                ))}
              </div>
              <div className="session-footer">
                <span>⏱️ {session.duration} min</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="roadmap-section">
        <h2>Your Personalized Roadmap</h2>
        <button className="generate-roadmap-btn">
          Generate 7-Day Roadmap
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
