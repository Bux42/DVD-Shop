"use client";

import MovieList from "@/app/components/movies/list/MovieList";
import { Typography, Layout } from "antd";
import { HomeStyles } from "./Home.styles";
import Cart from "@/app/components/cart/Cart";

const { Title } = Typography;

export default function Home() {
  return (
    <Layout style={HomeStyles.layout}>
      <Layout.Header style={HomeStyles.header}>
        <Title level={4} style={HomeStyles.title}>
          DVD Shop
        </Title>
        <Cart />
      </Layout.Header>
      <Layout.Content>
        <MovieList />
      </Layout.Content>
    </Layout>
  );
}
