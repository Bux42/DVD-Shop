import { CSSProperties } from "react";

export interface IMovieListStyles {
  listContainer: CSSProperties;
  title: CSSProperties;
  skeletonCard: CSSProperties;
  skeletonContent: CSSProperties;
  skeletonButton: CSSProperties;
  errorContainer: CSSProperties;
  emptyContainer: CSSProperties;
}

export const MovieListStyles: IMovieListStyles = {
  listContainer: {
    padding: "24px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "32px",
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: "-0.5px",
  },
  skeletonCard: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    border: "1px solid #f0f0f0",
  },
  skeletonContent: {
    padding: "16px",
  },
  skeletonButton: {
    height: "280px",
    width: "100%",
  },
  errorContainer: {
    padding: "60px 24px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  emptyContainer: {
    marginTop: "100px",
    textAlign: "center",
  },
};
