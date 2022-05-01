import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import {setupClients} from "app/axiosClinets";
import {persistor, store} from "app/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import {App} from "app";

/*Set Axios Clients*/
setupClients(store);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();