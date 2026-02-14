"use client";

import { Typography } from "antd";
import { CartItemProps } from "./CartItem.types";
import { CartItemStyles } from "./CartItem.styles";
import { useMoviesControllerList } from "@/app/services/movies/movies";

const { Text } = Typography;

const CartItem = ({ item }: CartItemProps) => {
  const { data: moviesData } = useMoviesControllerList();
  const movie = moviesData?.items?.find((m) => m.id === item.id);
  const title = movie?.title || `Product #${item.id}`;

  return (
    <div style={CartItemStyles.container}>
      <div style={CartItemStyles.info}>
        <Text strong style={CartItemStyles.title}>
          {title}
        </Text>
        <Text style={CartItemStyles.quantity}>
          Quantity:{" "}
          <span style={CartItemStyles.quantityValue}>{item.quantity}</span>
        </Text>
      </div>
      <div style={CartItemStyles.priceContainer}>
        <Text style={CartItemStyles.price}>
          ${(item.finalPrice * item.quantity).toFixed(2)}
        </Text>
        {item.discount && (
          <div style={CartItemStyles.discountBadge}>
            {item.discount.discountRatePercent}% OFF
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
