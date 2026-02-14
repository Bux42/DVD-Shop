"use client";

import { useCart } from "@/app/context/CartContext";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useState } from "react";
import { CartStyles } from "./Cart.styles";
import CartList from "./cart-list/CartList";

const Cart = () => {
  const { items, totalItems } = useCart();
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
        style={isEmpty ? CartStyles.hiddenBadge : CartStyles.badge}
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

      {isOpen && !isEmpty && (
        <div style={CartStyles.dropdown}>
          <CartList items={items} />
        </div>
      )}
    </div>
  );
};

export default Cart;
