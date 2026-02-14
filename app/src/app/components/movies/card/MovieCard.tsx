import { MovieCardProps } from "./MovieCard.types";
import { Card, Button, Typography, Tag } from "antd";
import { MovieCardStyles } from "./MovieCard.styles";
import { useCart } from "@/app/context/CartContext";

const { Title, Text } = Typography;

export default function MovieCard({ movie }: MovieCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id: movie.id, quantity: 1 });
  };

  return (
    <Card
      hoverable
      style={MovieCardStyles.card}
      cover={
        <div style={MovieCardStyles.imageContainer}>
          <img
            alt={movie.title}
            src={`https://picsum.photos/400/600?random=${movie.id}`}
            style={MovieCardStyles.image}
          />
          <div style={MovieCardStyles.tagContainer}>
            <Tag color="blue" style={MovieCardStyles.tag}>
              DVD
            </Tag>
          </div>
        </div>
      }
      actions={[
        <Button
          type="primary"
          key="buy"
          style={MovieCardStyles.buyButton}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>,
      ]}
    >
      <div style={MovieCardStyles.contentContainer}>
        <div>
          <Title level={5} style={MovieCardStyles.movieTitle}>
            {movie.title}
          </Title>
        </div>
        <div style={MovieCardStyles.priceContainer}>
          <Text type="secondary">Price</Text>
          <Text strong style={MovieCardStyles.priceAmount}>
            ${movie.price.toFixed(2)}
          </Text>
        </div>
      </div>
    </Card>
  );
}
