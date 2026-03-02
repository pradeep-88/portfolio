import { motion } from "framer-motion";
import { profile } from "../data/profile";

const GITHUB_USERNAME = profile.githubUsername;
const ACTIVITY_GRAPH_URL = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true`;
const STREAK_STATS_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=react`;

export default function GitHubActivity() {
  return (
    <motion.section
      id="github-activity"
      className="relative overflow-hidden py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/40 via-dark to-slate-900/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(34,197,94,0.06),transparent)]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            GitHub Activity
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg">
            Contribution graph and streak stats.
          </p>
        </motion.header>

        <motion.div
          className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-4 shadow-lg backdrop-blur-sm md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
              <img
                src={ACTIVITY_GRAPH_URL}
                alt="GitHub contribution graph"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
              <img
                src={STREAK_STATS_URL}
                alt="GitHub contribution streaks"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
