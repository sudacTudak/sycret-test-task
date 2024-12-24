import axios, { AxiosError } from 'axios';
import {
  API_BASE_URL,
  API_METHOD_NAMES,
  buildURLWithQuery,
  getDefaultQueryParams
} from './utils';
import {
  OSGetGoodsResponse,
  OSSaleResponse
} from '../types/server-responses.interfaces';

export const getGoodList = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams(API_METHOD_NAMES.getGoodList);
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);

    const { data } = await axios.get<OSGetGoodsResponse>(url);
    const { result, data: goodsList } = data;

    if (result !== 0) {
      throw new Error('Произошла ошибка');
    }

    return goodsList;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error('Произошла ошибка');
  }
};

export const sendOrder = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams(API_METHOD_NAMES.sale);
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);

    const { data } = await axios.get<OSSaleResponse>(url);
    const { result, data: orderedGoods } = data;

    if (result !== 0) {
      throw new Error('Произошла ошибка');
    }

    return orderedGoods;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error('Произошла ошибка');
  }
};
