import React from 'react';
import { GlobalStateProvider } from './contexts/GlobalStateContext';
import AppRouter from './router/AppRouter';
import './assets/styles/global.css';
import { Navbar } from './components/organisms/Navbar';


const App = () => {
    return (
        <GlobalStateProvider>
                <AppRouter />
        </GlobalStateProvider>
    );
};

export default App;