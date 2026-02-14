"use client";

import { useMoviesControllerList } from "@/app/services/movies/movies";
import MovieCard from "../card/MovieCard";
import { Row, Col, Typography, Empty, Alert, Spin } from "antd";
import { MovieListStyles } from "./MovieList.styles";

const { Title } = Typography;

export default function MovieList() {
  const { data, isLoading, isError, error } = useMoviesControllerList();

  if (isError) {
    return (
      <div style={MovieListStyles.errorContainer}>
        <Alert
          description={
            (error as any)?.message || "Failed to load movies from the server."
          }
          type="error"
          showIcon
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={MovieListStyles.listContainer}>
        <Title level={2} style={MovieListStyles.title}>
          Movies
        </Title>
        <div style={MovieListStyles.loadingContainer}>
          <Spin size="large" description="Loading..." />
        </div>
      </div>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <div style={MovieListStyles.emptyContainer}>
        <Empty description="No movies available at the moment." />
      </div>
    );
  }

  return (
    <div style={MovieListStyles.listContainer}>
      <Title level={2} style={MovieListStyles.title}>
        Movies
      </Title>
      <Row gutter={[24, 24]}>
        {data.items.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
