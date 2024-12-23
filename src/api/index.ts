import axios, { AxiosError } from 'axios';

const API_BASE_URL =
  process.env.API_BASE_URL ?? 'https://sycret.ru/service/api/api';
const API_KEY = process.env.API_KEY ?? '011ba11bdcad4fa396660c2ec447ef14';

const getDefaultQueryParams = (methodName) => ({
  MethodName: methodName,
  ApiKey: API_KEY
});

/** 
  * Функция, которая "собирает" URL запроса с переданными query-параметрами
  * 
  * @param {string} url URL запроса без query-параметров
  * @param {Object.<string, string>} params Объект с query-парамтерами
  *   Пример: { MethodName: 'some-method-name', ApiKey: 'some-api-key' }
  * @returns {string} Полный URL с query-параметрами

*/
const buildURLWithQuery = (url, params) => {
  let urlWithParams = url + '?';
  const paramsEntries = Object.entries(params);

  paramsEntries.forEach((entry, index, array) => {
    urlWithParams +=
      index < array.length - 1
        ? `${entry[0]}=${entry[1]}&`
        : `${entry[0]}=${entry[1]}`;
  });

  return urlWithParams;
};

export const getGoodList = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams('OSSetGoodList');
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);
    const { data } = await axios.get(url);
    const { result, data: goodsList } = data;

    if (result === 0) {
      throw new Error('Произошла ошибка');
    }

    return goodsList;
  } catch (error) {
    throw new AxiosError(error);
  }
};

export const sendOrder = async (queryParams = {}) => {
  try {
    const defaultParams = getDefaultQueryParams('OSSale');
    const params = Object.assign(defaultParams, queryParams);
    const url = buildURLWithQuery(API_BASE_URL, params);
    const { data } = await axios.get(url);
    const { result, data: orderedGoods } = data;

    if (result === 0) {
      throw new Error('Произошла ошибка');
    }

    return orderedGoods;
  } catch (error) {
    throw new AxiosError(error);
  }
};
