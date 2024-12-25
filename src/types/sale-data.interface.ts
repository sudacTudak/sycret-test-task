export interface SaleData {
  id: number;
  tableName: string;
  primaryKey: string;
  price: number;
  sum: number;
  clientName: string;
  phone: string;
  message?: string;
  email: string;
  paymentTypeId: number;
  useDelivery: number;
}
