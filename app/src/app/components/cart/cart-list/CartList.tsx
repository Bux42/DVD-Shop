"use client";

import { useCartControllerProcess } from "@/app/services/cart/cart";
import { Spin, Typography, List, Alert } from "antd";
import { useEffect } from "react";
import { CartListProps } from "./CartList.types";
import { CartListStyles } from "./CartList.styles";
import CartItem from "../cart-item/CartItem";
import { NestHttpException } from "@/app/lib/nest-error.types";

const { Text } = Typography;

const CartList = ({ items }: CartListProps) => {
  const processMutation = useCartControllerProcess();

  useEffect(() => {
    if (items.length > 0) {
      processMutation.mutate({ data: { items } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  if (processMutation.isPending) {
    return (
      <div style={CartListStyles.spinnerContainer}>
        <Spin size="large" />
      </div>
    );
  }

  const responseData = processMutation.data;

  if (processMutation.isError) {
    return (
      <div style={CartListStyles.errorContainer}>
        <Alert
          description={
            (processMutation.error as NestHttpException)?.message ||
            "Failed to process cart."
          }
          type="error"
          showIcon
        />
      </div>
    );
  }

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
        renderItem={(item) => (
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
