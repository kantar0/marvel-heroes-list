/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_PUBLIC_KEY: string;
        REACT_APP_PRIVATE_KEY: string;
        REACT_APP_BASE_URL: string;

    }
}