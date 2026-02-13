export const projects = [
  {
    title: "IoT Telemetry Backend System",
    description:
      "Scalable FastAPI-based backend for real-time IoT telemetry ingestion.",
    techStack: ["FastAPI", "MQTT", "PostgreSQL", "Docker"],
    details:
      "Designed and implemented a high-throughput telemetry pipeline handling thousands of sensor events per second. Included real-time dashboards and alerting for anomaly detection.",
  },
  {
    title: "MQTT Broker for ESP32",
    description:
      "High-performance MQTT broker optimized for embedded systems.",
    techStack: ["C++", "MQTT", "ESP32"],
    details:
      "Lightweight MQTT broker implementation for resource-constrained ESP32 devices. Supports QoS levels, retained messages, and TLS for secure IoT deployments.",
  },
  {
    title: "ML Analytics Platform",
    description:
      "Customer retention prediction and analytics system using ML.",
    techStack: ["Python", "SQL", "FastAPI"],
    details:
      "Built ML pipelines for churn prediction with feature engineering from transactional data. REST API for model serving and real-time inference.",
  },
];
