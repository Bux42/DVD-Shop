import { CSSProperties } from "react";

export interface ICartStyles {
  container: CSSProperties;
  badge: CSSProperties;
  hiddenBadge: CSSProperties;
  button: (isEmpty: boolean) => CSSProperties;
  icon: (isEmpty: boolean) => CSSProperties;
  dropdown: CSSProperties;
}

export const CartStyles: ICartStyles = {
  container: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  badge: {
    backgroundColor: "var(--accent)",
    boxShadow: "0 2px 8px rgba(37, 99, 235, 0.3)",
  },
  hiddenBadge: {
    display: "none",
  },
  button: (isEmpty: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "14px",
    border: "1px solid var(--card-border)",
    background: isEmpty ? "transparent" : "var(--card-bg)",
    cursor: isEmpty ? "not-allowed" : "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    padding: 0,
    opacity: isEmpty ? 0.4 : 1,
    boxShadow: isEmpty ? "none" : "0 4px 12px rgba(0, 0, 0, 0.05)",
  }),
  icon: (isEmpty: boolean) => ({
    fontSize: "22px",
    color: isEmpty ? "#94a3b8" : "var(--accent)",
    transition: "transform 0.3s ease",
  }),
  dropdown: {
    position: "absolute",
    top: "calc(100% + 12px)",
    right: 0,
    background: "var(--background)",
    borderRadius: "16px",
    border: "1px solid var(--card-border)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    zIndex: 1000,
  },
};
