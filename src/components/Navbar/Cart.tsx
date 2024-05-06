import React, { useRef } from "react";
import { useCart } from "../../AppStore/use-cart";

import DynamicButton from "../DynamicButton/DynamicButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Cart = () => {
  const { items, clearCart } = useCart();
  console.log(items);
  const [isExpaned, setIsExpanded] = React.useState(false);
  const cartRef = useRef(null);
  useOnClickOutside(cartRef, () => setIsExpanded(false));
  return (
    <div
      ref={cartRef}
      className={isExpaned ? "mycart active" : "mycart"}
    >
      <p onClick={() => setIsExpanded(!isExpaned)}>
        My Cart
      </p>
      {isExpaned && (
        <div className="selected-product-list">
          {items.map((item, index) => {
            return (
              <div className="selected-product" key={index}>
                <img
                  className="product-image"
                  src={item.product.imageURL}
                  alt={item.product.title}
                />
                <div className="product-detail">
                  <p>{item.product.title}</p>
                  <p>
                    {item.product.quantity} x{" "}
                    <b
                      style={{ color: "var(--text-dark)" }}
                    >
                      ${item.product.price}
                    </b>
                  </p>
                  <p>
                    Size: {item.product.selectedSize.label}
                  </p>
                </div>
              </div>
            );
          })}
          <DynamicButton
            marginAuto
            onClick={() => clearCart()}
          >
            Clear Cart
          </DynamicButton>
        </div>
      )}
    </div>
  );
};

export default Cart;
