import type { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import axios from 'axios';
const getTransporter = () => {
  return nodemailer.createTransport({
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};
const capchaVerify = async(token: string): Promise<boolean> => {
  const { data } = await axios.post('https://www.google.com/recaptcha/api/siteverify', {}, {
    params: {
      secret: process.env.CAPCHA_KEY,
      response: token,
    },
  });

  if (data.success === true && data.score >= 0.5)
    return true;

  throw new Error(`Is boot score: ${data.score}`);
};

const getTemplate = (body: any) => {
  return [
    body.nombre ? `<p><b>Nombre:</b> ${body.nombre}</p>` : '',
    body.cedula ? `<p><b>Cédula:</b> ${body.cedula}</p>` : '',
    body.email ? `<p><b>Email:</b> ${body.email}</p>` : '',
    body.tlf ? `<p><b>Telefono:</b> ${body.tlf}</p>` : '',
    body.requerimiento ? `<p><b>Requerimiento:</b> ${body.requerimiento}</p>` : '',
  ].join('\n');
};

export const handler: Handler = async(event) => {
  try {
    const _body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64').toString('utf8')
      : event.body;

    const body = JSON.parse(_body);
    await capchaVerify(body.token);
    const transporter = getTransporter();
    await transporter.sendMail({
      to: process.env.SMTP_TO,
      from: { address: 'teuno@bigbrige.app', name: 'Pagina Web' },
      subject: 'Mensaje desde formulario de Contacto',
      html: getTemplate(body),
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ mensaje: body.form === 'contacto' ? 'Gracias por escribirnos, pronto nos pondremos en contacto.' : 'Gracias por suscribirte.' }),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    };
  }
  catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ mensaje: 'Lo sentimos, hubo un error al enviar tu mensaje. Vuelve a intentarlo.' }),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    };
  }
};
