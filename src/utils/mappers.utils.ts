import { Certificate } from '../types/certificate.interface';
import { Order } from '../types/order.interface';
import { CertificateDTO, OrderDTO } from '../types/server-responses.interfaces';

type Mapper<T, U> = {
  [K in keyof T]?: keyof U | ((value: U) => T[K]);
};

export const mapObject = <T, U>(source: U, mapper: Mapper<T, U>): T => {
  const result = {} as T;

  for (const key in mapper) {
    const mapping = mapper[key];

    if (typeof mapping === 'function') {
      result[key] = mapping(source as any);
    } else if (typeof mapping === 'string') {
      result[key] = source[mapping as keyof U] as unknown as T[typeof key];
    }
  }

  return result;
};

export const mapCertDTOToClient = (certDTO: CertificateDTO) => {
  const mapper: Mapper<Certificate, CertificateDTO> = {
    id: 'ID',
    tableName: 'TABLENAME',
    primaryKey: 'PRIMARYKEY',
    name: 'NAME',
    description: 'DESCRIPTION',
    price: (dto) => parseFloat(dto.PRICE),
    sum: (dto) => parseFloat(dto.SUMMA),
    discount: (dto) => (dto.DISCOUNT ? parseFloat(dto.DISCOUNT) : undefined)
  };

  return mapObject<Certificate, CertificateDTO>(certDTO, mapper);
};

export const mapClientCertToDTO = (clientCert: Certificate) => {
  const mapper: Mapper<CertificateDTO, Certificate> = {
    ID: 'id',
    TABLENAME: 'tableName',
    PRIMARYKEY: 'primaryKey',
    NAME: 'name',
    DESCRIPTION: 'description',
    PRICE: (cert) => String(cert.price),
    SUMMA: (cert) => String(cert.sum),
    DISCOUNT: (cert) => (cert.discount ? String(cert.discount) : undefined)
  };

  return mapObject<CertificateDTO, Certificate>(clientCert, mapper);
};

export const mapOrderedCertDTOToClient = (orderedCertDTO: OrderDTO) => {
  const mapper: Mapper<Order, OrderDTO> = {
    certNumber: 'CERTNUMBER'
  };

  return mapObject<Order, OrderDTO>(orderedCertDTO, mapper);
};

export const mapOrderedCertToDTO = (orderedCert: Order) => {
  const mapper: Mapper<OrderDTO, Order> = {
    CERTNUMBER: 'certNumber'
  };

  return mapObject<OrderDTO, Order>(orderedCert, mapper);
};
