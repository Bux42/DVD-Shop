"use client";

import MovieList from "@/app/components/movies/list/MovieList";
import { Typography, Layout } from "antd";
import { HomeStyles } from "./Home.styles";

const { Title } = Typography;

export default function Home() {
  return (
    <Layout style={HomeStyles.layout}>
      <Layout.Header style={HomeStyles.header}>
        <Title level={4} style={HomeStyles.title}>
          DVD Shop
        </Title>
      </Layout.Header>
      <Layout.Content>
        <MovieList />
      </Layout.Content>
    </Layout>
  );
}
