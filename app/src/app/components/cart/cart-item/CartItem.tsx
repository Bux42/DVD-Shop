"use client";

import { Typography } from "antd";
import { CartItemProps } from "./CartItem.types";
import { CartItemStyles } from "./CartItem.styles";

const { Text } = Typography;

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div style={CartItemStyles.container}>
      <div style={CartItemStyles.info}>
        <Text strong style={CartItemStyles.title}>
          {item.title}
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
