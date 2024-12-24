export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? 'https://sycret.ru/service/api/api';
const API_KEY =
  process.env.REACT_APP_API_KEY ?? '011ba11bdcad4fa396660c2ec447ef14';

export enum API_METHOD_NAMES {
  getGoodList = 'OSGetGoodList',
  sale = 'OSSale'
}

export const getDefaultQueryParams = (methodName: string) => ({
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
export const buildURLWithQuery = (
  url: string,
  params: Record<string, string>
): string => {
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
