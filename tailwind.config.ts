import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#f3eee4",
        "ground-2": "#e4dbcc",
        ink: "#262321",
        "ink-2": "#5f5750",
        field: "#262321",
        "field-deep": "#302c29",
        "field-line": "#46403a",
        "on-field": "#f3eee4",
        "on-field-2": "#c6bdb0",
        panel: "#e4dbcc",
        "panel-line": "#c6b89f",
        accent: "#b69355",
        "accent-text": "#76591f",
        "accent-light": "#d2b071",
        rule: "#d5cab8",
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-instrument-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        body: "1rem",
        label: "0.75rem",
        "reading-small": "0.9375rem",
        caption: "0.875rem",
        attribution: "0.8125rem",
        "item-title": "1.375rem",
      },
      letterSpacing: {
        label: "0.16em",
        "item-title": "-0.01em",
      },
      lineHeight: {
        reading: "1.55",
        "item-title": "1.15",
        display: "1",
      },
      spacing: {
        pad: "3rem",
        gap: "1.5rem",
        "pad-mid": "2rem",
        "pad-narrow": "1.25rem",
        "gap-compact": "1rem",
        "section-block": "6rem",
        "section-roomy": "7rem",
      },
      borderRadius: {
        control: "0px",
      },
      transitionDuration: {
        interaction: "150ms",
        "door-content": "600ms",
      },
      transitionDelay: {
        "door-delay": "450ms",
      },
      transitionTimingFunction: {
        door: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
