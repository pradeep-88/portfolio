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
    title: "IoT Telemetry Backend",
    description: "High-throughput pipeline for real-time IoT sensor ingestion and alerting.",
    techStack: ["FastAPI", "MQTT", "PostgreSQL", "Docker"],
    details:
      "Designed and implemented a high-throughput telemetry pipeline handling thousands of sensor events per second. Included real-time dashboards and alerting for anomaly detection.",
    icon: "Activity",
    metric: "10k+ events/sec ingestion",
  },
  {
    title: "MQTT Broker for ESP32",
    description: "Lightweight MQTT broker for embedded devices with QoS and TLS.",
    techStack: ["C++", "MQTT", "ESP32"],
    details:
      "Lightweight MQTT broker implementation for resource-constrained ESP32 devices. Supports QoS levels, retained messages, and TLS for secure IoT deployments.",
    icon: "Radio",
    metric: "Resource-constrained deployment",
  },
  {
    title: "ML Analytics Platform",
    description: "Churn prediction and analytics with feature engineering and model serving API.",
    techStack: ["Python", "SQL", "FastAPI"],
    details:
      "Built ML pipelines for churn prediction with feature engineering from transactional data. REST API for model serving and real-time inference.",
    icon: "BarChart2",
    metric: "Production inference API",
  },
];
