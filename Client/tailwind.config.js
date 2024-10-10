module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        primary: {
          light: "#000000",
          dark: "#FFFFFF",
          textLight: "#FFFFFF",
          textDark: "#000000",
          borderLight: "#333333",
          borderDark: "#E5E5E5",
          hoverLight: "#FFFFFF",
          hoverTextLight: "#000000",
          hoverDark: "#000000",
          hoverTextDark: "#FFFFFF",
          transition: "all 0.3s ease",
        },
        primaryText: {
          light: "#111111",
          dark: "#f1f1f1",
        },
        secondaryText: {
          light: "#555555",
          dark: "#bbbbbb",
        },
        tertiaryText: {
          light: "#888888",
          dark: "#999999",
        },
      },
    },
  },
  plugins: [],
};
