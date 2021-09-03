import React from 'react'
import { WrapperLayout } from './style'
import Header from '../Header';


export default function Layout({ children }) {

    return (
        <WrapperLayout>
            <Header />
            {children}
        </WrapperLayout>
    )
}

