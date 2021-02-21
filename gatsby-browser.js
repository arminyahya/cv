import React from "react";
import { HashRouter } from 'react-router-dom';

import { Body } from './src/Styled';
import Layout from './src/Layout';

export const wrapPageElement = ({ element, props }) => {
    return (
            <Body {...props} >
                <Layout {...props} currentScreen={props["*"]}>{element}</Layout>
            </Body>
    )
}


