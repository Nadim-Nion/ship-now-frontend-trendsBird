// theme/tokens.js
// Single source of truth for design tokens.
// Any component that needs a color, font, or the shared card shell
// imports from here — never redefines its own copy.

export const COLOR = {
  primary: "#7B61FF",
  secondary: "#A995FF",
  bg: "#F6F6F7",
  card: "#FFFFFF",
  textPrimary: "#2E2E2E",
  textSecondary: "#8E8E8E",
  border: "#ECECEC",
  green: "#2CCB7F",
  black: "#222222",
  navInactive: "#707070",
  navActiveBg: "#ECE8FF",
  navActiveText: "#5B4AE6",
};

export const FONT =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const cardStyle = {
  backgroundColor: COLOR.card,
  borderRadius: 16,
  padding: 20,
  boxShadow: "0 4px 20px rgba(0,0,0,.05)",
};