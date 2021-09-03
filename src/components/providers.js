
import React from 'react';
import Layout from "./layout"
import Profile from './Profile';
import Repositories from './Repos';
import useGithub from '../hooks/github-hooks';
import NoSearch from './NoSearch/NoSearch';

function Providers() {
  const { githubState } = useGithub();
  return (

    <Layout>
      {githubState.has_user ?
        <>
          {githubState.loading ?
            (<h1>LOADING</h1>) :
            (
              <>
                <Profile />
                <Repositories />
              </>
            )}
        </> :
        <NoSearch />}
    </Layout>

  );
}

export default Providers;
