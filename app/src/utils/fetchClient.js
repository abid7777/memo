import _get from 'lodash/get';

const contentTypeParsers = Object.freeze({
  'application/json': async (data) => data.json(),
  'application/text': async (data) => data.text(),
  default: async (data) => data.text(),
});

export default async function fetchClient(url, options = {}) {
  const data = await fetch(url, options);
  const parsedData = await _get(
    contentTypeParsers,
    data.headers.get('content-type'),
    contentTypeParsers.default,
  )(data);

  if (data.status < 200 || data.status > 299) {
    const error = Object.create(null);
    error.message = parsedData;
    error.statusCode = data.status;
    error.isError = true;

    throw error;
  }

  return parsedData;
}
