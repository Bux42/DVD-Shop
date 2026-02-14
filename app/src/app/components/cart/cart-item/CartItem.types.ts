export interface ProcessCartItemDiscountResponse {
  discountRatePercent: number;
  discountAmount: number;
}

export interface ProcessCartItemResponse {
  id: number;
  title: string;
  unitPrice: number;
  finalPrice: number;
  quantity: number;
  discount?: ProcessCartItemDiscountResponse;
}

export interface CartItemProps {
  item: ProcessCartItemResponse;
}
