"use client";

import { useCart } from "@/app/context/CartContext";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useState } from "react";
import { CartStyles } from "./Cart.styles";

const Cart = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const isEmpty = totalItems === 0;

  const handleToggle = () => {
    if (!isEmpty) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={CartStyles.container}>
      <Badge
        count={totalItems}
        style={isEmpty ? { display: "none" } : CartStyles.badge}
        offset={[-4, 4]}
      >
        <Button
          type="text"
          style={CartStyles.button(isEmpty)}
          onClick={handleToggle}
          disabled={isEmpty}
          icon={<ShoppingCartOutlined style={CartStyles.icon(isEmpty)} />}
        />
      </Badge>

      {/* 
        Cart items list implementation will go here later.
        The state 'isOpen' is ready to toggle the visibility.
      */}
      {isOpen && !isEmpty && <>{/* List component will be added here */}</>}
    </div>
  );
};

export default Cart;
