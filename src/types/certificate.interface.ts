export interface Certificate {
  id: number;
  tableName: string;
  primaryKey: string;
  name: string;
  description?: string;
  price: number;
  sum: number;
  discount?: number;
  imageUrl?: string;
}
