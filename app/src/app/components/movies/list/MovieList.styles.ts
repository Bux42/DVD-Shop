import { CSSProperties } from "react";

export interface IMovieListStyles {
  listContainer: CSSProperties;
  title: CSSProperties;
  errorContainer: CSSProperties;
  emptyContainer: CSSProperties;
  loadingContainer: CSSProperties;
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
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    width: "100%",
  },
};
