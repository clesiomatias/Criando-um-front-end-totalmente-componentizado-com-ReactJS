
import React from 'react';
import ResetCSS from '../global/resetCSS';
import GithubProvider from '../providers/github-provider';
import Providers from './providers';

function App() {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <Providers />
            </GithubProvider>
        </main>
    );
}

export default App;
