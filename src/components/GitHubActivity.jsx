import { useState } from "react";
import { motion } from "framer-motion";
import { Github, BarChart3 } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const GITHUB_USERNAME = profile.githubUsername;
const ACTIVITY_GRAPH_URL = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true`;
const STREAK_STATS_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=react`;

function StatCard({ title, src, alt }) {
  const [error, setError] = useState(false);

  return (
    <div
      className="rounded-md border border-surface-3 bg-surface-1 p-4 md:p-6"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Github className="h-5 w-5 text-accent" />
        <span className="text-sm font-medium text-text-primary">{title}</span>
      </div>
      {error ? (
        <div className="flex flex-col items-center justify-center py-12 text-text-tertiary">
          <BarChart3 className="h-10 w-10 mb-2 opacity-50" />
          <span className="text-sm">Stats unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full block rounded-md"
          style={{ borderRadius: "var(--radius-md)" }}
          width="100%"
          height="auto"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function GitHubActivity() {
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      id="github-activity"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />

      <div className="max-w-section mx-auto px-6 md:px-12">
        <SectionHeading label="05 — github" title="GitHub Activity" />

        <motion.div
          className="flex flex-col gap-6"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <StatCard
            title="Contribution graph"
            src={ACTIVITY_GRAPH_URL}
            alt="GitHub contribution graph"
          />
          <StatCard
            title="Streak stats"
            src={STREAK_STATS_URL}
            alt="GitHub contribution streaks"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
