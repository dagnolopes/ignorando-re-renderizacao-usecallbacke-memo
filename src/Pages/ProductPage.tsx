import { useCallback } from "react";
import ShippingForm from "./ShippingForm.js";

interface ProductPageValues {
  referrerId: string;
  productId: number;
  theme: string;
}

export default function ProductPage({
  productId,
  referrerId,
  theme,
}: ProductPageValues) {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrerId,
        orderDetails,
      });
    },
    [productId, referrerId]
  );

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url: string, data: any) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
