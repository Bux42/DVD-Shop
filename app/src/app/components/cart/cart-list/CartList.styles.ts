import { CSSProperties } from "react";

export interface ICartListStyles {
  errorContainer: CSSProperties;
  container: CSSProperties;
  listItem: CSSProperties;
  totalContainer: CSSProperties;
  price: CSSProperties;
  quantity: CSSProperties;
  totalText: CSSProperties;
  totalAmount: CSSProperties;
  spinnerContainer: CSSProperties;
  emptyContainer: CSSProperties;
  listItemWrapper: CSSProperties;
  totalLabelContainer: CSSProperties;
  totalDiscountAmount: CSSProperties;
}

export const CartListStyles: ICartListStyles = {
  errorContainer: {
    padding: "20px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "8px 0",
    minWidth: "320px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid var(--card-border)",
  },
  totalContainer: {
    marginTop: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
  },
  price: {
    fontWeight: 700,
    color: "var(--accent)",
    fontSize: "1.1rem",
  },
  quantity: {
    color: "var(--foreground)",
    opacity: 0.6,
    fontSize: "0.85rem",
    marginTop: "2px",
  },
  totalText: {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "var(--foreground)",
  },
  totalAmount: {
    fontWeight: 800,
    fontSize: "1.4rem",
    color: "var(--accent)",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    width: "100%",
  },
  emptyContainer: {
    padding: "20px",
    textAlign: "center",
  },
  listItemWrapper: {
    border: "none",
    padding: 0,
  },
  totalLabelContainer: {
    display: "flex",
    flexDirection: "column",
  },
  totalDiscountAmount: {
    fontSize: "0.8rem",
  },
};
