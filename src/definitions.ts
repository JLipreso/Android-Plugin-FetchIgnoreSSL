declare module "@capacitor/core" {
  interface PluginRegistry {
    FetchIgnoreSSLPlugin: FetchIgnoreSSLPlugin
  }
}

export interface FetchIgnoreSSLPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  fetchIgnoreMethod(options: { url: string }):Promise<{ value: string }>;
}
