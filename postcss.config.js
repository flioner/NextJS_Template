module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: { config: "./tailwind.config.js" },
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
    "postcss-reporter": {},
    autoprefixer: {},
  },
};
