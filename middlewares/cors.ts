import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
]

export const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: ACCEPTED_ORIGINS,
  preflightContinue: false,
};