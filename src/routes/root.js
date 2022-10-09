import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
export const ThemeContext = React.createContext();

import '../style/index.scss';

import Dashbaord from '../container/Dashboard';
import HomeContainer from '../container/home';
import Privacy from '../container/privacy';
import Terms from '../container/terms';
import useLocalStorage from '../hooks/useLocalStorage';

const Root = () => {
    const [theme, setTheme] = useLocalStorage();
    const themeclass = theme ? 'light' : 'dark';
    const handleThemeChange = () => {
        setTheme();
    };
    return (
        <ThemeContext.Provider
            value={{ theme, handleThemeChange: handleThemeChange }}
        >
            <div className={themeclass}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomeContainer />} />
                        <Route path='/terms' element={<Terms />} />
                        <Route path='/privacy' element={<Privacy />} />
                        <Route path='/dashboard' element={<Dashbaord />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeContext.Provider>
    );
};

export default Root;
