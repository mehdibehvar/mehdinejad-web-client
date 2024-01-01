import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';

export default {
  plugins: [
    legacy(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ]
};