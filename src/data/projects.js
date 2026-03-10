export const projects = [
  {
    title: "MoodMatrix",
    description: "Mood-driven UI: webcam emotion + text sentiment, dynamic theme, music suggestions, and mood history.",
    techStack: ["FastAPI", "DeepFace", "NLTK", "OpenCV", "React", "Vite", "Tailwind", "Recharts"],
    details:
      "Mood-aware experience that combines live webcam-based facial emotion detection (via DeepFace) with text sentiment analysis (using NLTK Vader). The UI dynamically adapts gradients and theme based on your current mood, overlays the detected emotion on the camera feed, suggests mood-aligned music, and visualizes your mood history over time using interactive charts.",
    link: "https://mood-matrix-vert.vercel.app/",
    icon: "Smile",
    metric: "Real-time emotion + sentiment fusion",
  },
  {
    title: "Yaadein",
    description: "Image storage platform with folders, metadata, QR codes, and admin dashboard.",
    techStack: ["React", "Vite", "Express", "MongoDB", "JWT", "Cloudinary", "Google OAuth"],
    details:
      "Feature-rich image management system where users can authenticate via email/password or Google, create searchable folders, upload images with titles, descriptions, and tags, and automatically generate QR codes for each image stored on Cloudinary. Includes an admin dashboard with overviews and management tools for users, folders, and images.",
    link: "https://yaadein-tan.vercel.app/",
    icon: "Image",
    metric: "Full auth, storage, and admin flows",
  },
  {
    title: "AI Quiz",
    description:
      "Real-time AI-powered quiz platform where hosts spin up live rooms in seconds and players compete with instant leaderboard updates.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "Zustand",
      "Socket.IO",
      "Node.js",
      "Express",
      "Redis",
      "Groq API",
      "Docker",
    ],
    details:
      "Production-ready, real-time quiz platform where AI (Groq Llama 3.1) generates multiple-choice questions on demand by topic, difficulty, and count. Hosts create room-based sessions with 6-character codes, control quiz start and pacing, and see live leaderboards backed by Redis sorted sets. Players join from any device, answer under time pressure with time-based scoring, and see instant ranking updates without page refreshes. The app is Dockerized for easy deployment and uses a dark, responsive UI with motion-enhanced interactions.",
    link: "https://ai-quiz-fw9h.vercel.app/",
    icon: "Activity",
    metric: "AI-generated, real-time multiplayer quizzes",
  },
];
