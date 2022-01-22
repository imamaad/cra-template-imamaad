import axios from 'axios';
import {Store} from "@reduxjs/toolkit";

export const main = axios.create({
    // TODO: SET BASE URL FOR API
    baseURL: 'localhost:8000/',
});

export const setupClients = (store: Store) => {
    main.interceptors.request.use(
        (config: any) => {
            // TODO: If you have a token, enter it here
            /*const {auth: {authToken}} = store.getState();
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }*/
            return config;
        },
        err => Promise.reject(err)
    );
}