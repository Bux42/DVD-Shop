"use client";

import { useCartControllerProcess } from "@/app/services/cart/cart";
import { Spin, Typography, List } from "antd";
import { useEffect } from "react";
import { CartListProps } from "./CartList.types";
import { CartListStyles } from "./CartList.styles";
import CartItem from "../cart-item/CartItem";

const { Text } = Typography;

const CartList = ({ items }: CartListProps) => {
  const processMutation = useCartControllerProcess();

  useEffect(() => {
    if (items.length > 0) {
      processMutation.mutate({ data: { items } });
    }
  }, [items]);

  if (processMutation.isPending) {
    return (
      <div style={CartListStyles.spinnerContainer}>
        <Spin size="large" />
      </div>
    );
  }

  const responseData = processMutation.data as any;

  if (!responseData || !responseData.items) {
    return (
      <div style={CartListStyles.emptyContainer}>
        <Text type="secondary">No items to display</Text>
      </div>
    );
  }

  return (
    <div style={CartListStyles.container}>
      <List
        dataSource={responseData.items}
        renderItem={(item: any) => (
          <List.Item style={CartListStyles.listItemWrapper}>
            <CartItem item={item} />
          </List.Item>
        )}
      />
      <div style={CartListStyles.totalContainer}>
        <div style={CartListStyles.totalLabelContainer}>
          <Text style={CartListStyles.totalText}>Total</Text>
          {responseData.totalDiscount > 0 && (
            <Text type="success" style={CartListStyles.totalDiscountAmount}>
              Saved ${responseData.totalDiscount.toFixed(2)}
            </Text>
          )}
        </div>
        <Text style={CartListStyles.totalAmount}>
          ${responseData.total.toFixed(2)}
        </Text>
      </div>
    </div>
  );
};

export default CartList;
