import { CardStylesType } from "antd/es/card/Card";
import { CSSProperties } from "react";

export interface IMovieCardStyles {
  card: CSSProperties;
  antdCard: CardStylesType;
  imageContainer: CSSProperties;
  image: CSSProperties;
  tagContainer: CSSProperties;
  tag: CSSProperties;
  buyButton: CSSProperties;
  contentContainer: CSSProperties;
  movieTitle: CSSProperties;
  priceContainer: CSSProperties;
  priceAmount: CSSProperties;
}

export const MovieCardStyles: IMovieCardStyles = {
  card: {
    width: "100%",
    padding: 0,
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid var(--card-border)",
    background: "var(--card-bg)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  },
  antdCard: {
    body: { padding: 0 },
  },
  imageContainer: {
    position: "relative",
    height: "320px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  tagContainer: {
    position: "absolute",
    top: "16px",
    right: "16px",
    zIndex: 2,
  },
  tag: {
    borderRadius: "6px",
    fontWeight: 700,
    padding: "4px 10px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    border: "none",
    backdropFilter: "blur(4px)",
    background: "rgba(24, 144, 255, 0.9)",
  },
  buyButton: {
    width: "calc(100% - 32px)",
    height: "40px",
    borderRadius: "10px",
    fontWeight: 700,
    margin: "16px auto",
    display: "block",
    boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
  },
  contentContainer: {
    padding: "20px 16px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  movieTitle: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 700,
    lineHeight: "1.4",
    height: "3.1em",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: "4px",
  },
  priceAmount: {
    fontSize: "20px",
    color: "var(--accent)",
    fontWeight: 800,
  },
};
