import { registerPlugin } from '@capacitor/core';

import type { FetchIgnoreSSLPlugin } from './definitions';

const FetchIgnoreSSL = registerPlugin<FetchIgnoreSSLPlugin>('FetchIgnoreSSL', {
  web: () => import('./web').then((m) => new m.FetchIgnoreSSLWeb()),
});

export * from './definitions';
export { FetchIgnoreSSL };
