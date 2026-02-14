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
    padding: "40px 24px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "48px",
    fontWeight: 800,
    textAlign: "center",
    fontSize: "2.5rem",
    letterSpacing: "-0.02em",
    opacity: 0.9,
  },
  skeletonCard: {
    background: "var(--card-bg)",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid var(--card-border)",
  },
  skeletonContent: {
    padding: "20px",
  },
  skeletonButton: {
    height: "320px",
    width: "100%",
  },
  errorContainer: {
    padding: "80px 24px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  emptyContainer: {
    marginTop: "120px",
    textAlign: "center",
    opacity: 0.6,
  },
};
