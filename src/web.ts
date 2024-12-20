import { WebPlugin } from '@capacitor/core';

import type { FetchIgnoreSSLPlugin } from './definitions';

export class FetchIgnoreSSLWeb extends WebPlugin implements FetchIgnoreSSLPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async fetchIgnoreMethod( options: { url: string }): Promise<{ value: string}> {
    return { value:options.url };
  }
}
