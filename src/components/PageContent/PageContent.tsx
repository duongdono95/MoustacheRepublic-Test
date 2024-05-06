import React from "react";
import "./PageContent.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import { useCart } from "../../AppStore/use-cart";
import { toast } from "react-toastify";
interface SizeInterface {
  id: number;
  label: string;
}
export interface ProductInterface {
  id: number;
  description: string;
  imageURL: string;
  price: number;
  sizeOptions: SizeInterface[];
  title: string;
}
export interface SelectedProductInterface {
  id: number;
  description: string;
  imageURL: string;
  price: number;
  sizeOptions: SizeInterface[];
  title: string;
  selectedSize: SizeInterface;
  quantity: number;
}

const PageContent = ({
  data,
}: {
  data: ProductInterface;
}) => {
  const { addItem, items, setItems } = useCart();
  const [selectedSize, setSelectedSize] =
    React.useState<SizeInterface | null>(null);
  const handleSelectSize = (size: SizeInterface) => {
    if (selectedSize?.id === size.id) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.warning("Please select a size");
    } else {
      const isItemExist = items.find(
        (item) =>
          item.product.selectedSize.id === selectedSize.id
      );
      if (isItemExist) {
        const updatedItems = items.map((item) => {
          if (
            item.product.selectedSize.id === selectedSize.id
          ) {
            return {
              product: {
                ...item.product,
                quantity: item.product.quantity + 1,
              },
            };
          }
          return item;
        });
        setItems(updatedItems);
        toast.success("Item added to cart");
      } else {
        addItem({
          ...data,
          selectedSize: selectedSize,
          quantity: 1,
        });
        toast.success("Item added to cart");
      }
    }
  };
  return (
    <div className="page-content">
      <div className="left">
        <img
          className="product-image"
          src={data.imageURL}
          alt={data.title}
        />
      </div>
      <div className="product-detail right">
        <p className="title">{data.title}</p>
        <p className="price">$ {data.price}</p>
        <p className="description">{data.description}</p>
        <div className="size-title">
          <p style={{ color: "var(--text-light)" }}>
            SIZE
            <span style={{ color: "var(--required-star)" }}>
              *
            </span>
          </p>
          {selectedSize && (
            <p style={{ fontWeight: 600 }}>
              {selectedSize.label}
            </p>
          )}
        </div>
        <div className="size-list">
          {data.sizeOptions.map((size: SizeInterface) => (
            <div
              key={size.id}
              onClick={() => handleSelectSize(size)}
            >
              <div
                className={
                  selectedSize?.id === size.id
                    ? "size-item active"
                    : "size-item"
                }
              >
                <p>{size.label}</p>
              </div>
            </div>
          ))}
        </div>
        <DynamicButton onClick={() => handleAddToCart()}>
          ADD TO CART
        </DynamicButton>
      </div>
    </div>
  );
};

export default PageContent;
