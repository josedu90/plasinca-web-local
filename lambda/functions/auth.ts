import type { Handler } from '@netlify/functions';
import axios from 'axios';

const api = axios.create({
  // Colo
  baseURL: 'https://accounts.zoho.com',
  transformResponse: (data) => {
    return data || '';
  },
});
const env = process.env;
export const handler: Handler = async(event) => {
  const _headers: Record<string, any> = {};
  const query = `refresh_token=${env.ZOHO_REFRESH_TOKEN}&client_id=${env.ZOHO_CLIENT_ID}&client_secret=${env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;

  const path = `${event.path.replace('/proxy-auth', '')}?${query}`;

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

    // await axios.post()
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
