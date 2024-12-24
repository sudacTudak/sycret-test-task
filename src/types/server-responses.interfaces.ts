interface ServerResponse<DataType> {
  data: DataType;
  result: number;
  resultDescription: string;
}

export interface OrderDTO {
  CERTNUMBER?: string;
}

export interface CertificateDTO {
  ID: string;
  TABLENAME: string;
  PRIMARYKEY: string;
  NAME: string;
  DESCRIPTION?: string;
  PRICE: string;
  SUMMA: string;
  DISCOUNT?: string;
  IMAGEURL?: string;
}

export interface OSGetGoodsResponse extends ServerResponse<CertificateDTO[]> {}

export interface OSSaleResponse extends ServerResponse<OrderDTO[]> {}
