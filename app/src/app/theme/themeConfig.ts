import type { ThemeConfig } from "antd";

export const themeTokens = {
  colorPrimary: "#2563eb", // Blue 600
  colorSuccess: "#10b981", // Emerald 500
  colorWarning: "#f59e0b", // Amber 500
  colorError: "#ef4444", // Red 500
  colorInfo: "#3b82f6", // Blue 500
  borderRadius: 12,
  fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
  colorBgContainer: "transparent",
};

export const darkThemeTokens = {
  ...themeTokens,
  colorBgLayout: "#020617", // Slate 950
  colorBgContainer: "#0f172a", // Slate 900
  colorBorder: "rgba(255, 255, 255, 0.08)",
  colorTextBase: "#f8fafc", // Slate 50
};

export const lightThemeTokens = {
  ...themeTokens,
  colorBgLayout: "#f8fafc", // Slate 50
  colorBgContainer: "#ffffff",
  colorBorder: "rgba(0, 0, 0, 0.06)",
  colorTextBase: "#0f172a", // Slate 900
};

export const antdTheme: ThemeConfig = {
  token: themeTokens,
  components: {
    Button: {
      fontWeight: 600,
      controlHeight: 40,
    },
    Card: {
      colorBgContainer: "rgba(255, 255, 255, 0.03)",
      colorBorderSecondary: "rgba(255, 255, 255, 0.08)",
    },
    Typography: {
      colorTextHeading: darkThemeTokens.colorTextBase,
    },
  },
};
