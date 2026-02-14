import { CSSProperties } from "react";

export interface IHomeStyles {
  title: CSSProperties;
  layout: CSSProperties;
  header: CSSProperties;
}

export const HomeStyles: IHomeStyles = {
  title: {
    margin: 0,
  },
  layout: {
    minHeight: "100vh",
    background: "transparent",
  },
  header: {
    display: "flex",
    alignItems: "center",
    background: "var(--header-bg)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--header-border)",
    padding: "0 24px",
    height: "64px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
};
