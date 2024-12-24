import axios, { AxiosError } from 'axios';
import {
  API_BASE_URL,
  API_METHOD_NAMES,
  buildURLWithQuery,
  getDefaultQueryParams
} from './utils';

export const getGoodList = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams(API_METHOD_NAMES.getGoodList);
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);
    const { data } = await axios.get(url);
    const { result, data: goodsList } = data;

    if (result !== 0) {
      throw new Error('Произошла ошибка');
    }

    return goodsList;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const sendOrder = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams(API_METHOD_NAMES.sale);
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);
    const { data } = await axios.get(url);
    const { result, data: orderedGoods } = data;

    if (result !== 0) {
      throw new Error('Произошла ошибка');
    }

    return orderedGoods;
  } catch (error) {
    throw new AxiosError(error);
  }
};
