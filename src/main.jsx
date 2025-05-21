import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import storeReducer, { initialStore, StoreContext } from './store';

const Main = () => {
    const [state, dispatch] = useReducer(storeReducer, initialStore());

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            <RouterProvider router={router} />
        </StoreContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
