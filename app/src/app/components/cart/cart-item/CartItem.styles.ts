import { CSSProperties } from "react";

export interface ICartItemStyles {
  container: CSSProperties;
  info: CSSProperties;
  title: CSSProperties;
  quantity: CSSProperties;
  quantityValue: CSSProperties;
  priceContainer: CSSProperties;
  price: CSSProperties;
  discountBadge: CSSProperties;
}

export const CartItemStyles: ICartItemStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid var(--card-border)",
    width: "100%",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  title: {
    fontSize: "1.05rem",
    color: "var(--foreground)",
  },
  quantity: {
    color: "var(--foreground)",
    opacity: 0.6,
    fontSize: "0.85rem",
    marginTop: "2px",
  },
  quantityValue: {
    fontWeight: 600,
  },
  priceContainer: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "flex-end",
  },
  price: {
    fontWeight: 700,
    color: "var(--accent)",
    fontSize: "1.1rem",
  },
  discountBadge: {
    fontSize: "0.75rem",
    color: "#10b981",
    fontWeight: 700,
    marginTop: "4px",
    background: "rgba(16, 185, 129, 0.1)",
    padding: "2px 8px",
    borderRadius: "6px",
    display: "inline-block",
  },
};
