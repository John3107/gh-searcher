import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../components/MainPage/MainPage';
import { UserPage } from '../components/UserPage/UserPage';

export const AppRouting: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user/:ghLogin" element={<UserPage />} />
        </Routes>
    );
};