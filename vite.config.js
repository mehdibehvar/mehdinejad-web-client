import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';

const HOST = 'localhost';
const PORT = 3000;

export default {
  server: {
    host: HOST,
    port: PORT,
    origin: 'http://localhost:3000',
  },
  plugins: [
    legacy(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ]
};