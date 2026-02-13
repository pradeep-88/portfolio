import { motion } from "framer-motion";
import { profile } from "../data/profile";

const GITHUB_USERNAME = profile.githubUsername;
const ACTIVITY_GRAPH_URL = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true`;
const STREAK_STATS_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=react`;

export default function GitHubActivity() {
  return (
    <motion.section
      id="github-activity"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-10">GitHub Activity</h2>

      <div className="flex flex-col gap-8">
        <motion.div
          className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src={ACTIVITY_GRAPH_URL}
            alt="GitHub contribution graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={STREAK_STATS_URL}
            alt="GitHub contribution streaks"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
