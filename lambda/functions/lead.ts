import type { Handler } from '@netlify/functions';
import axios from 'axios';

const api = axios.create({
  // Colo
  baseURL: 'https://www.zohoapis.com',
  transformResponse: (data) => {
    return data || '';
  },
});
export const handler: Handler = async(event) => {
  const _headers: Record<string, any> = {
    'cookie': event.headers.cookie,
    'content-type': event.headers['content-type'],
    'authorization': event.headers.authorization,
  };
  const path = `${event.path.replace('/proxy-lead', '')}?${event.rawQuery}`;

  try {
    const { data, status, headers } = await api.post(path, event.body, {
      headers: _headers,
      validateStatus(status) {
        return status >= 200 && status < 600;
      },

    });
    if (typeof headers['set-cookie'] !== 'string')
      // @ts-expect-error
      headers['set-cookie'] = JSON.stringify(headers['set-cookie']);
    return {
      statusCode: status,
      body: data,
      headers,
    // headers:
    };
  }
  catch (error) {
    console.error(error);
  }
};
