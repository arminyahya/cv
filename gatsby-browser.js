import React from "react";
import { HashRouter } from 'react-router-dom';
import { Body } from './src/Styled';
import Layout from './src/Layout';
require("typeface-rubik");

export const wrapPageElement = ({ element, props }) => {
    return (
        <HashRouter>
            <Body>
                <Layout {...props} currentScreen={props["*"]}>{element}</Layout>
            </Body>
        </HashRouter>
    )
}