declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST?: string;
    DB_PORT?: string;
    DB_USER?: string;
    DB_PASSWORD?: string;
    DB_NAME?: string;
    PORT?: string;
    ENVIRONMENT?: string;
    DISCORD_CLIENT_I?: string;
    DISCORD_CLIENT_SECRET?: string;
    DISCORD_CLIENT_URL?: string;
  }

  export type Environment = 'DEVELOPMENT' | 'PRODUCTION';
}
