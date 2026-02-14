import { CSSProperties } from "react";

export interface IMovieCardStyles {
  card: CSSProperties;
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
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #f0f0f0",
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
  imageContainer: {
    position: "relative",
    height: "280px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  tagContainer: {
    position: "absolute",
    top: "12px",
    right: "12px",
  },
  tag: {
    borderRadius: "4px",
    fontWeight: 600,
    padding: "2px 8px",
  },
  buyButton: {
    width: "90%",
    borderRadius: "6px",
    fontWeight: 600,
  },
  contentContainer: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  movieTitle: {
    margin: 0,
    height: "48px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceAmount: {
    fontSize: "18px",
    color: "#1890ff",
  },
};
