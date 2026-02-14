"use client";

import { useMoviesControllerList } from "@/app/services/movies/movies";
import MovieCard from "../card/MovieCard";
import { Row, Col, Typography, Skeleton, Empty, Alert } from "antd";
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
          Movies Collection
        </Title>
        <Row gutter={[24, 24]}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Col key={i} xs={24} sm={12} md={8} lg={6} xl={4}>
              <div style={MovieListStyles.skeletonCard}>
                <Skeleton.Button
                  active
                  style={MovieListStyles.skeletonButton}
                />
                <div style={MovieListStyles.skeletonContent}>
                  <Skeleton active paragraph={{ rows: 2 }} title={false} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
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
        Movies Collection
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
