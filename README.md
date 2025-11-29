# 🚀 AI Coding Session Summarizer + Roadmap Generator

> Transform your coding activity into actionable insights and personalized learning paths

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub Stars](https://img.shields.io/github/stars/eng-neelpatel/ai-coding-session-summarizer?style=social)](https://github.com/eng-neelpatel/ai-coding-session-summarizer/stargazers)

## 📖 Overview

AI Coding Session Summarizer is a full-stack web application that intelligently analyzes your coding activity from GitHub commits and LeetCode sessions. Using advanced LLM technology, it generates:

- **Intelligent Summaries**: 3-5 bullet point summaries of each coding session
- **Topic Extraction**: Automatic tagging (arrays, DP, REST APIs, auth, etc.)
- **Difficulty Rating**: Smart assessment of session complexity
- **7-Day Roadmaps**: Personalized learning plans based on your weak areas
- **Progress Tracking**: Visual dashboards with streaks, time spent, and topic coverage

## ✨ Key Features

### 🔐 Authentication & Profile
- Email/Google OAuth login
- User profile with coding goals (MAANG prep, backend, etc.)
- Secure session management

### 📊 Activity Ingestion
- **GitHub Integration**: Automatic fetching of commits and PRs
- **LeetCode Support**: Manual link input (API integration coming soon)
- **Session Grouping**: Intelligent grouping by day and coding session

### 🤖 AI-Powered Analysis
- Session summarization in natural language
- Automatic topic and concept extraction
- Focus assessment (DSA vs Project work)
- Difficulty rating (Easy/Medium/Hard)

### 🗺️ Personalized Roadmap
- 7-day learning plan generation
- Mix of DSA problems and project tasks
- Targets your weak areas automatically
- Adaptive recommendations

### 📈 Dashboard & Analytics
- Timeline view of all sessions
- Streak tracking and time analytics
- Topic coverage visualization
- Progress charts and insights

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js / Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Context / Redux
- **Charts**: Recharts / Chart.js

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js / Next.js API Routes
- **Authentication**: NextAuth.js / Passport.js

### Database
- **Primary DB**: PostgreSQL / MongoDB
- **ORM**: Prisma / Mongoose
- **Caching**: Redis (optional)

### AI & ML
- **LLM Provider**: OpenAI GPT-4 / Claude / Gemini
- **Embeddings**: OpenAI Embeddings (for similarity search)
- **Vector DB**: Pinecone / Weaviate (optional for advanced features)

### DevOps
- **Hosting**: Vercel / Render / Railway
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL or MongoDB
- OpenAI API key (or other LLM provider)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/eng-neelpatel/ai-coding-session-summarizer.git
cd ai-coding-session-summarizer
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/coding_summarizer"

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# AI/LLM
OPENAI_API_KEY="your-openai-api-key"

# GitHub Integration
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

4. **Run database migrations**
```bash
npx prisma migrate dev
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**
Navigate to `http://localhost:3000`

## 🚀 Usage

### 1. Sign Up / Login
- Create an account using email or Google
- Set your coding goals (MAANG prep, full-stack, etc.)

### 2. Connect GitHub
- Authorize GitHub access
- Your commits and PRs will be automatically synced

### 3. Add LeetCode Sessions
- Paste LeetCode problem links
- Add notes about your approach

### 4. View AI Summaries
- Check your dashboard for session summaries
- See extracted topics and difficulty ratings

### 5. Generate Roadmap
- Click "Generate 7-Day Roadmap"
- Get personalized DSA problems and project tasks
- Track your progress daily

## 📁 Project Structure

```
ai-coding-session-summarizer/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   └── roadmap/        # Roadmap pages
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── charts/        # Chart components
│   │   └── sessions/      # Session-related components
│   ├── lib/               # Utility functions
│   │   ├── ai/           # AI/LLM integration
│   │   ├── github/       # GitHub API integration
│   │   └── db/           # Database utilities
│   └── types/            # TypeScript types
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── .env.local           # Environment variables
├── package.json
└── README.md
```

## 🗺️ Roadmap

### Phase 1: MVP (Weeks 1-2)
- [x] Repository setup and project structure
- [ ] Basic authentication (email + Google)
- [ ] GitHub integration for commit fetching
- [ ] Simple session display
- [ ] Basic AI summarization

### Phase 2: Core Features (Weeks 3-4)
- [ ] Enhanced dashboard with charts
- [ ] Topic extraction and tagging
- [ ] Difficulty rating system
- [ ] Session filtering and search

### Phase 3: Roadmap Generator (Weeks 5-6)
- [ ] 7-day roadmap generation
- [ ] Weak area detection algorithm
- [ ] Task recommendation engine
- [ ] Progress tracking

### Phase 4: Polish & Deploy (Week 7)
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Testing and bug fixes
- [ ] Production deployment

### Future Enhancements
- [ ] LeetCode API integration
- [ ] VS Code extension
- [ ] Team collaboration features
- [ ] Mobile app
- [ ] Advanced analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Neel Patel**
- GitHub: [@eng-neelpatel](https://github.com/eng-neelpatel)
- LinkedIn: [Connect with me](https://linkedin.com/in/neelpatel)

## 🙏 Acknowledgments

- OpenAI for GPT API
- GitHub for their excellent API
- LeetCode for inspiration
- The open-source community

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or reach out!

---

⭐ Star this repo if you find it helpful!
